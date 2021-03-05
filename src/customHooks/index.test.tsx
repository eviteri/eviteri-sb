import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useWindowSize, useLockScreen, useInViewPort } from '.'

describe('useInViewPort', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  test('Should return false when not in view port', () => {
    const { result } = renderHook(() => {
      const intersectionRation = 1.0
      const elementRef = React.useRef(null)
      return useInViewPort(intersectionRation, elementRef)
    })

    expect(result.current).toBe(false)
  })
})

describe('useWindowSize', () => {
  test('Should return default window size', () => {
    const { result } = renderHook(() => useWindowSize())
    const { width, height } = result.current

    expect(height).toBe(768)
    expect(width).toBe(1024)
  })
})

describe('useLockScreen', () => {
  test('Should return lock screen styles', () => {
    renderHook(() => useLockScreen(true))

    expect(document.body.style.overflow).toBe('hidden')
    expect(document.body.style.position).toBe('fixed')
    expect(document.body.style.top).toBe('0px')
    expect(document.body.style.width).toBe('100%')
  })

  test('Should return unlock screen styles', () => {
    renderHook(() => useLockScreen(false))

    expect(document.body.style.overflow).toBe('')
    expect(document.body.style.position).toBe('')
    expect(document.body.style.top).toBe('')
    expect(document.body.style.width).toBe('')
  })
})
