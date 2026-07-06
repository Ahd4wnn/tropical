import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Film() {
  const section = useRef(null)
  const frame = useRef(null)
  const media = useRef(null)
  const caption = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(section)

    mm.add(
      {
        desktop: '(min-width: 721px)',
        mobile: '(max-width: 720px)',
      },
      (ctx) => {
        const startInset = ctx.conditions.mobile
          ? 'inset(20% 10% 20% 10%)'
          : 'inset(16% 24% 16% 24%)'

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: '+=160%',
            pin: true,
            scrub: 1,
          },
        })

        tl.fromTo(
          frame.current,
          { clipPath: startInset },
          { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 1 },
        )
          .fromTo(
            media.current,
            { scale: 1.18 },
            { scale: 1, ease: 'none', duration: 1 },
            0,
          )
          .to(caption.current, { opacity: 1, duration: 0.25 }, 0.7)
      },
    )

    return () => mm.revert()
  }, [])

  return (
    <section className="film" ref={section} aria-label="Inside the salon">
      <div className="film__frame" ref={frame}>
        <video
          ref={media}
          src="/media/salon-film.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/interior-1.webp"
        />
      </div>
      <span className="film__side label">Banarasa Arcade · Parammal</span>
      <div className="film__caption">
        <div ref={caption} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="dot" />
          <span className="label">Inside Tropical — the green room</span>
        </div>
      </div>
    </section>
  )
}
