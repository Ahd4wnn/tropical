import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Counts up from 0 to `value` when it enters the viewport.
export default function Counter({ value, decimals = 0, suffix = '' }) {
  const el = useRef(null)

  useLayoutEffect(() => {
    const obj = { n: 0 }
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el.current,
        start: 'top 90%',
        once: true,
      },
      onUpdate: () => {
        if (el.current) {
          el.current.textContent = obj.n.toFixed(decimals) + suffix
        }
      },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [value, decimals, suffix])

  return <span ref={el}>{(0).toFixed(decimals) + suffix}</span>
}
