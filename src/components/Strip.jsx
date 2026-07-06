import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Strip() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.strip img').forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.12, yPercent: -4 },
          {
            scale: 1,
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div className="strip" ref={root}>
      <div className="strip__inner">
        <figure>
          <img src="/media/interior-1.webp" alt="Tropical Salon interior — green walls and brass fixtures" loading="lazy" />
        </figure>
        <figure>
          <img src="/media/hands-2.webp" alt="Detail of hair styling at Tropical Salon" loading="lazy" />
        </figure>
      </div>
    </div>
  )
}
