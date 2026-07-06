import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

// Splits its children into lines and unmasks them one by one when
// scrolled into view. Splitting waits for fonts so line breaks are final.
export default function SplitReveal({ as: Tag = 'div', className, children, delay = 0 }) {
  const el = useRef(null)

  useLayoutEffect(() => {
    let split
    let tween
    let cancelled = false

    document.fonts.ready.then(() => {
      if (cancelled || !el.current) return
      split = SplitText.create(el.current, { type: 'lines', mask: 'lines' })
      tween = gsap.from(split.lines, {
        yPercent: 115,
        duration: 1.15,
        ease: 'power4.out',
        stagger: 0.09,
        delay,
        scrollTrigger: {
          trigger: el.current,
          start: 'top 88%',
          once: true,
        },
      })
    })

    return () => {
      cancelled = true
      tween?.scrollTrigger?.kill()
      tween?.kill()
      split?.revert()
    }
  }, [delay])

  return (
    <Tag ref={el} className={className}>
      {children}
    </Tag>
  )
}
