import { useState, useEffect } from 'react'

export default function useLockScreen(shouldLockScreen: boolean) {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const scrollFromTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : document.body?.scrollTop

    if (shouldLockScreen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = '0px'
      document.body.style.width = '100%'
      setScrollTop(scrollFromTop)
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [shouldLockScreen])

  useEffect(() => {
    if (!shouldLockScreen && scrollTop > 0) {
      window.scrollTo(0, scrollTop)
    }
  }, [scrollTop, shouldLockScreen])
}
