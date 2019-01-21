import Edotensei, {
  duplicateScript,
} from '../src'
import {
  stateOfScriptElement,
  stateOfLinkElement,
} from '../src/utils'
describe('Test Edotensei.add', () => {
  /*
   * @const {string} origin
   * https://localhost
   */
  const {origin} = document.location

  const scriptList = [
    {src: 'main.js'},
    {src: 'main-defer.js', defer: true},
    {src: 'main-async.js', async: true},
    {src: 'no-async-defer.js', async: true, defer: true},
    {
      src: 'with-rel.js',
      // bug on set rel attributes
      // rel: 'preload'
    },
    {src: 'duplicate.js'},
    {src: 'duplicate.js'},
  ]

  const scriptWithRel = [] // scriptList.filter( ({rel}) => rel )

  Edotensei.add(scriptList)

  for (const script of scriptList) {
    const {src, async, defer, rel} = script
    const url = `${origin}/${src}`
    let index = scriptList.indexOf(script)
    /* Check rel attributes */
    if (rel) {
      index = scriptWithRel.indexOf(script)
      test(`${src} have rel attribute`, () => {
        expect(stateOfLinkElement.item(index).href)
          .toEqual(url)
      })
    }

    /** check script in dom (body) **/
    if (! duplicateScript.includes(src)) {
      test(`Item: ${src} in dom`, () => {
        expect(
          stateOfScriptElement
            .item(index)
            .src
        ).toEqual(url)
      })
    }

    /** check attribute set by user **/
    if (async && defer) {
      test(`Item : ${src} have attribute async & defer`, () => {
        expect(
          stateOfScriptElement.item(index).defer
        || stateOfScriptElement.item(index).async
        ).toEqual(false)
      })
    } else if (defer) {
      test(`Item : ${src} have attribute defer`, () => {
        expect(stateOfScriptElement.item(index).defer)
          .toEqual(true)
      })
    } else if (async) {
      test(`Item : ${src} have attribute async`, () => {
        expect(stateOfScriptElement.item(index).async)
          .toEqual(true)
      })
    }
  }

  test('Test Count script element on DOM', () => {
    expect(stateOfScriptElement.length + duplicateScript.length)
      .toEqual(scriptList.length)
  })

  test('Check duplicate list', () => {
    expect(duplicateScript)
      .toHaveLength(1)
  })

  test('Test Count link element on DOM', () => {
    expect(stateOfLinkElement)
      .toHaveLength(
        scriptList
          .filter((script) => typeof script.rel === 'string' )
          .length)
  })
})

