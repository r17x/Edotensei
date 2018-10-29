/**
 * List of supported rel values List:
 *   'dns-prefetch',
 *   'prefetch',
 *   'preconnect',
 *   'preload', required as attributes
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
 * @var {string[]}
 */
const REL = ['dns-prefetch', 'prefetch', 'preconnect', 'preload']


export const getType = (src) => {
  /*
   * @url https://regex101.com/r/iV3iM1/19
   */
  const regx = /\.(\w{2,3}($|\?))/m
  const [, type] = regx.exec(src) || [, null]
  return type
}

/**
 * @param {object} attributes
 * @param {string} type only "js" | "css" | "rel"
 * @return {element} element
 */
export const makeElement = (attributes, type) => {
  const element =
        (['css', 'rel'].includes(type) && document.createElement('link'))
    || (type === 'js' && document.createElement('script'))

  Object.assign(element, attributes)
  return element
}

export const makeAttribute = (attributes, type) => {
  let {id, src, async, defer} = attributes

  if (async && defer) {
    async = false
    defer = false
  }

  return (type === 'css' && {
    id,
    href: src,
    rel: 'stylesheet',
  }) || (type ==='js' && {
    id,
    src,
    async,
    defer,
  }) || {}
}

/*
 * @const {HTMLCollection} stateOfScriptElement
 * @url https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
 */
export const stateOfScriptElement = document
  .getElementsByTagName('script')

export const stateOfLinkElement = document
  .getElementsByTagName('link')

export const duplicateScript = []

/**
 * Edotensei, A simple HTML script resource injector
 * @example
 * const elementList = [
 *   {
 *     src: 'url',
 *     async: boolean,
 *     defer: boolean,
 *     rel: 'preload|prefetch'
 *   }
 * ];
 *
 * Edotensei.addScript(elementList)
 * Edotensei.removeScript(elementList)
 *
 * @typedef  {Object}  AttributeConfig
 * @property {string?} id
 * @property {string}  url
 * @property {boolean} async
 * @property {boolean} defer
 * @property {string}  rel
 * Should be <HTML:Link_types>, reference https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
 */
export default class Edotensei {
  /**
   * Inject all of scripts into document.
   * Currently, it mutate and add `id` attribute
   * into ScriptConfig within scriptList
   * @param  {ScriptConfig[]} scriptList
   * @return {void}
   */
  static add(scriptList) {
    const duplicates = []
    scriptList.filter(
      (value, index, me) => {
        if (duplicates.includes(value.src)) {
          duplicateScript.push(value.src)
          return false
        }
        duplicates.push(value.src)
        return me.indexOf(value) === index
      }
    )
      .forEach(
        (script, key) => {
          script.id = `script:${key}`
          Edotensei.append({...script})
        }
      )
  }

  /**
   * Remove injected scripts from document.
   * @param  {AttributeConfig[]} elementList
   * @return {void}
   */
  static remove(elementList) {
    elementList.forEach((script, key) => {
      script = document.getElementById(`script:${key}`)
      script.parentNode.removeChild(script)
    })
  }

  /**
   * Inject script into document.
   * @param  {AttributeConfig} attributes
   * @return {void}
   */
  static append(attributes) {
    const {src, rel} = attributes

    const type = getType(src)

    const element = makeElement(
      makeAttribute(attributes, type),
      type
    )

    if (rel && REL.includes(rel)) {
      const attributes = {
        href: src,
        rel,
      }

      rel.toLowerCase() === 'preload' &&
        Object.assign(attributes, {
          as: (type==='js' && 'script')
            || (type==='css' && 'style'),
        })

      document.head.appendChild(makeElement(attributes, 'rel'))
    }

    type === 'css' && document.head.appendChild(element)
    type === 'js' && document.body.appendChild(element)
  }
}
