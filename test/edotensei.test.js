import Edotensei, {stateOfScriptElement} from '../src'

describe('Check static method in edotensei', () => {
  test('add method in edotensei', () => {
    expect(Edotensei.add).toBeTruthy()
  })
  test('remove method in edotensei', () => {
    expect(Edotensei.add).toBeTruthy()
  })
  test('append method in edotensei', () => {
    expect(Edotensei.add).toBeTruthy()
  })
})

describe('Test Edotensei.add', () => {
  const scriptList = [
    {src: 'main.js'},
    {src: 'main-defer.js', defer: true},
    {src: 'main-async.js', async: true},
    {src: 'no-asyn-defer.js', async: true, defer: true},
  ]

  Edotensei.add(scriptList)

  test('Test Count script element on DOM', () => {
    expect(stateOfScriptElement)
      .toHaveLength(scriptList.length)
  })

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
})
