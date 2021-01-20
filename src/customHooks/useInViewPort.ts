import { useState, useEffect } from 'react'

interface Entry {
  intersectionRatio: number
  isIntersecting: boolean
}

export default function useInViewPort(
  intersectionRation: number,
  wrapperRef: any
) {
  const [isInViewPort, setIsInViewPort] = useState(false)

  const observerCallBack = (entries: Entry[], observer: any) => {
    let intersectionCounter = 0
    entries.forEach((entry: Entry) => {
      if (
        entry.isIntersecting &&
        entry.intersectionRatio >= intersectionRation
      ) {
        intersectionCounter++
      }
    })

    if (intersectionCounter > 0) {
      setIsInViewPort(true)
    }
  }

  const createObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [intersectionRation]
    }

    const observer = new IntersectionObserver(observerCallBack, options)
    const target = wrapperRef.current

    if (target) {
      observer.observe(target)
    }
  }

  useEffect(() => {
    createObserver()
  })

  return isInViewPort
}
