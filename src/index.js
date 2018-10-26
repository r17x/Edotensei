/**
 * Rel List;
 *   'dns-prefetch',
 *   'prefetch',
 *   'preconnect',
 *   'preload', require as attributes
 *
 * @url https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
 *
 */

const REL = ['dns-prefetch', 'prefetch', 'preconnect', 'preload']

/* scriptElementList */
const stateOfScriptElement = document
  .getElementsByTagName('script')

/**
 * Simple Injection HTML Script resource | Edotensei
 * Example use:
 *     const scriptList = [
 *      {
 *          src: 'url',
 *          async: boolean,
 *          defer: boolean,
 *          rel: 'preload|prefetch'
 *      }
 *     ];
 *
 *     Edotensei.addScript(scriptList)
 *     Edotensei.removeScript(scriptList)
 */
export default class Edotensei {
  /**
   * @param {array} scriptList
   */
  static add(scriptList) {
    scriptList.forEach((script, key) => {
      script.id = `script:${key}`
      Edotensei.append({...script})
    })
  }

  /**
   * @param {array} scriptList
   */
  static remove(scriptList) {
    scriptList.forEach((script, key) => {
      script = document.getElementById(`script:${key}`)
      script.parentNode.removeChild(script)
    })
  }

  /**
   * @param {object} attributes
   * {
   *    id  : string,
   *    src : string <url>,
   *    async : boolean,
   *    defer : boolean,
   *    rel   : string <HTML:Link_types>
   *    reference for rel https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
   * }
   */
  static append({id, src, async, defer, rel}) {
    const {item} = stateOfScriptElement
    for (let n = 0; n < stateOfScriptElement.length; n++) {
      if (item(n) && item(n).src === src) return
    }
    const element = document.createElement('script')

    Object.assign(element, {id, src, async, defer})

    if (async && defer) {
      element.async = undefined
      element.defer = undefined
    }

    if (rel && REL.includes(rel)) {
      const link = document.createElement('link')
      const attributes = {
        href: src,
        rel,
      }

      if (rel.toLowerCase() === 'preload') {
        Object.assign(attributes, {as: 'script'})
      }

      Object.assign(link, attributes)
      document.head.appendChild(link)
    }

    document.body.appendChild(element)
  }
}
