import { motion } from 'framer-motion'

const WHATSAPP_URL =
  'https://wa.me/916238193133?text=' +
  encodeURIComponent(
    'Hi Tropical! I would like to book an appointment. My preferred service and time:',
  )

const lineAnim = (ready, delay) => ({
  initial: { y: '110%' },
  animate: ready ? { y: 0 } : {},
  transition: { delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero({ ready }) {
  return (
    <section className="hero" id="top">
      <div className="hero__stage">
        <div className="hero__type">
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <span className="label">Unisex Salon</span>
            <span className="dash" />
            <span className="label">Civil Station, Kozhikode</span>
          </motion.div>

          <motion.figure
            className="hero__peek"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 1.1 }}
          >
            <img
              src="/media/hero-mobile.webp"
              alt="Inside Tropical Unisex Salon — styling chair and gold mirror"
            />
            <figcaption className="label">The green room — Banarasa Arcade</figcaption>
          </motion.figure>

          <h1 className="hero__title">
            <span className="line">
              <motion.span {...lineAnim(ready, 0.15)}>Tropical</motion.span>
            </span>
            <span className="line indent">
              <motion.span {...lineAnim(ready, 0.27)}>
                <em>is for</em>
              </motion.span>
            </span>
            <span className="line">
              <motion.span {...lineAnim(ready, 0.39)}>everyone</motion.span>
            </span>
          </h1>

          <motion.div
            className="hero__meta"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 1.05, duration: 1 }}
          >
            <p>
              Hair, skin, nails and grooming — one calm green room where men,
              women and children are cared for with the same unhurried
              attention.
            </p>
            <div className="hero__rating">
              <b>Google Rating</b>
              5.0 — from 105 reviews
            </div>
            <div className="hero__cta">
              <a
                className="btn btn--ink"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
              </a>
              <a className="btn btn--ghost" href="#services">
                Explore services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
