import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS = [
  {
    text: 'What truly sets them apart is the exceptional quality of their services. A fantastic, inclusive space that caters equally well to both men and women.',
    author: 'M.P. — Local Guide',
  },
  {
    text: 'They listened carefully to what I wanted and executed it perfectly. Warm, welcoming, and highly skilled.',
    author: 'Suneyana Sajan',
  },
  {
    text: 'Did my haircut by showing a reference — and they did exactly the same.',
    author: 'Ashwathy Krishnan',
  },
  {
    text: 'The facial was incredibly relaxing and effective. Clean, premium, and well-maintained — a perfect environment for relaxation.',
    author: 'Gayathri Dhanish',
  },
  {
    text: 'I had my hair botox and facial here. I was so happy to see my new look after my first hair treatment.',
    author: 'Dhanya Sajeev',
  },
  {
    text: 'The staff were kind and attentive, especially toward my little daughter, who was warmly looked after.',
    author: 'Bobby Shankar',
  },
  {
    text: 'The interior was beautifully designed — calming and luxurious. The threading was gentle and precise.',
    author: 'Sniya Sajeev',
  },
  {
    text: 'I’ve been coming to this team for a long time, and honestly, I wouldn’t go anywhere else.',
    author: 'K.V.',
  },
]

export default function Reviews() {
  const section = useRef(null)
  const track = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(section)

    // Pinned horizontal scrub on desktop only — on touch screens the
    // track falls back to native swipe scrolling (see mobile CSS).
    mm.add('(min-width: 721px)', () => {
      const getDistance = () =>
        track.current.scrollWidth - window.innerWidth

      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section className="reviews" id="reviews" ref={section}>
      <div className="reviews__pin">
        <div className="reviews__head">
          <h2>
            In their <em>own words</em>
          </h2>
          <span className="reviews__count label">5.0 ★ — 105 Google reviews</span>
        </div>
        <div className="reviews__track" ref={track}>
          {REVIEWS.map((r) => (
            <blockquote className="review" key={r.author}>
              <div>
                <div className="review__stars">★ ★ ★ ★ ★</div>
                <p className="review__text">“{r.text}”</p>
              </div>
              <footer className="review__author label">{r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
