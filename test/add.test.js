import Edotensei, {stateOfScriptElement} from '../src'
describe('Test Edotensei.add', () => {
  const {origin} = document.location

  const scriptList = [
    {src: 'main.js'},
    {src: 'main-defer.js', defer: true},
    {src: 'main-async.js', async: true},
    {src: 'no-async-defer.js', async: true, defer: true},
    {src: 'with-rel.js', rel: 'preload'},
  ]

  Edotensei.add(scriptList)

  for (let n = 0; n < scriptList.length; n++) {
    const url = `${origin}/${scriptList[n].src}`
    test(`Item: ${scriptList[n].src} in dom`, () => {
      expect(stateOfScriptElement.item(n).src)
        .toEqual(url)
    })
  }

  test('Test defer attribute on element script', () => {
    expect(stateOfScriptElement.item(1).defer)
      .toEqual(true)
  })

  test('Test async attribute on element script', () => {
    expect(stateOfScriptElement.item(2).async)
      .toEqual(true)
  })

  test('Test no async & defer on 1 script element', () => {
    expect(stateOfScriptElement.item(3).defer
        || stateOfScriptElement.item(3).async )
      .toEqual(false)
  })

  test('Test Count script element on DOM', () => {
    expect(stateOfScriptElement)
      .toHaveLength(scriptList.length)
  })
})

