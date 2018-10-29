import {getType} from '../src'

/* mock function with implementation on param */
const mockGetType = jest.fn(getType)

describe('Test for check extension on url', () => {
  test('Test function getType src: main.css return .css', () => {
    expect(mockGetType('main.css')).toBe('css')
    expect(mockGetType)
      .toHaveBeenCalled()
    expect(mockGetType)
      .toHaveBeenCalledWith('main.css')
  })
  test('Test with param \'\'', () => {
    expect(mockGetType('')).toBe(null)
    expect(mockGetType)
      .toHaveBeenCalled()
    expect(mockGetType)
      .toHaveBeenCalledWith('')
  })
})
