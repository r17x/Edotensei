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

/**
 * @typedef  {Object}  ScriptConfig
 * @property {string?} id
 * @property {string}  url
 * @property {boolean} async
 * @property {boolean} defer
 * @property {string}  rel            Should be <HTML:Link_types>, reference https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
 */

/**
 * Edotensei, A simple HTML script resource injector
 * @example
 * const scriptList = [
 *   {
 *     src: 'url',
 *     async: boolean,
 *     defer: boolean,
 *     rel: 'preload|prefetch'
 *   }
 * ];
 *
 * Edotensei.addScript(scriptList)
 * Edotensei.removeScript(scriptList)
 */
export default class Edotensei {
  /**
   * Inject all of scripts into document.
   * Currently, it mutate and add `id` attribute into ScriptConfig within scriptList
   * @param  {ScriptConfig[]} scriptList
   * @return {void}
   */
  static add(scriptList) {
    scriptList.forEach((script, key) => {
      script.id = `script:${key}`
      Edotensei.append({...script})
    })
  }

  /**
   * Remove injected scripts from document.
   * @param  {ScriptConfig[]} scriptList
   * @return {void}
   */
  static remove(scriptList) {
    scriptList.forEach((script, key) => {
      script = document.getElementById(`script:${key}`)
      script.parentNode.removeChild(script)
    })
  }

  /**
   * Inject script into document.
   * @param  {ScriptConfig} attributes
   * @return {void}
   */
  static append(scriptConfig) {
    const {id, src, async, defer, rel} = scriptConfig
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
