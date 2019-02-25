import Edotensei, {
  duplicateScript,
} from '../src'

import {
  stateOfLinkElement,
} from '../src/utils'

/*
 * @const {string} origin
 * https://localhost
 */
const {origin} = document.location

describe('Added only script <js> files with attributes async or defer', () => {
  const styleList = [
    {src: 'main.css'},
    {src: 'main-preload.css', rel: 'preload'},
  ]

  Edotensei.add(styleList)

  for (const style of styleList) {
    const {src, rel} = style
    const url = `${origin}/${src}`
    const index = styleList.indexOf(style)

    test(`${style.src} in Dom`, () => {
      expect(
        stateOfLinkElement
          .item(index)
          .href
      ).toEqual(url)
    })

    if (rel) {
      test(`${style.src} have attributes rel: ${rel}`, () => {
        expect(
          stateOfLinkElement
            .item(index)
            .rel
        ).toEqual(style.rel)
      })
    }
  }


  test(`Edotensei Remove for style`, () => {
    Edotensei.remove(styleList)
    expect(stateOfLinkElement).toHaveLength(0)
  })
})
