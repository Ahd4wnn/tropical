import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal.jsx'

const MAPS_URL =
  'https://maps.google.com/?q=Tropical+Unisex+Salon,+Banarasa+Arcade,+Civil+Station,+Parammal,+Kozhikode'

const WHATSAPP_URL =
  'https://wa.me/916238193133?text=' +
  encodeURIComponent(
    'Hi Tropical! I would like to book an appointment. My preferred service and time:',
  )

const rise = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
}

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="visit__grid">
        <div>
          <SplitReveal as="h2" className="visit__title">
            Your chair is <em>waiting</em>
          </SplitReveal>
          <motion.div className="visit__actions" {...rise}>
            <a className="btn btn--solid" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Book on WhatsApp
            </a>
            <a className="btn" href={MAPS_URL} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </motion.div>
        </div>
        <motion.div className="visit__details" {...rise}>
          <div className="visit__block">
            <span className="label">Find us</span>
            <p>
              Banarasa Arcade, Civil Station,
              <br />
              Parammal, Kozhikode,
              <br />
              Kerala 673020
            </p>
          </div>
          <div className="visit__block">
            <span className="label">Book / Call</span>
            <p>
              <a href="tel:+916238193133">+91 62381 93133</a>
            </p>
          </div>
          <div className="visit__block">
            <span className="label">Hours</span>
            <p>Open daily — walk-ins welcome</p>
          </div>
          <div className="visit__block">
            <span className="label">For everyone</span>
            <p className="serif-i">Men · Women · Kids</p>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="footer__word" aria-hidden="true">
          Tropi<span>cal</span>
        </div>
        <div className="footer__base label">
          <span>Tropical Unisex Salon</span>
          <span>Kozhikode, Kerala</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </section>
  )
}
