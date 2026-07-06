import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SplitReveal from './SplitReveal.jsx'

const SERVICES = [
  {
    num: '01',
    name: 'Hair',
    desc: 'Cuts that follow a reference exactly, colour that suits your skin tone, and treatments that repair rather than mask.',
    items: [
      'Haircuts — women, men & kids',
      'Styling & blow-dry',
      'Hair colouring & highlights',
      'Hair botox',
      'Hair spa',
      'Anti-dandruff treatment',
      'Keratin & smoothing',
    ],
  },
  {
    num: '02',
    name: 'Skin',
    desc: 'Facials chosen for your skin — not off a menu. The team guides you to what your skin actually needs, acne-prone included.',
    items: [
      'Signature facials',
      'De-tan face pack',
      'Clean-ups',
      'Acne-care solutions',
      'Skin consultations',
    ],
  },
  {
    num: '03',
    name: 'Hands & Feet',
    desc: 'Unhurried manicures and pedicures in a calm corner of the salon. Regulars call it the best in a long time.',
    items: ['Manicure', 'Pedicure', 'Nail care & shaping'],
  },
  {
    num: '04',
    name: 'Grooming',
    desc: 'Gentle, precise, and quick — the small rituals done properly.',
    items: ['Threading', 'Waxing', 'Beard shaping', 'Detailing'],
  },
  {
    num: '05',
    name: 'Occasion',
    desc: 'For the days that are photographed. Bridal and event styling with a trial-first approach.',
    items: ['Bridal styling', 'Party hair & makeup', 'Group bookings'],
  },
]

export default function Services() {
  const [open, setOpen] = useState('01')

  return (
    <section className="services" id="services">
      <div className="services__head">
        <SplitReveal as="h2" className="services__title">
          Every <em>service,</em>
          <br /> one roof
        </SplitReveal>
        <p className="services__note">
          The best-kept secret in Kozhikode is how much this salon actually
          does. Tap a category.
        </p>
      </div>

      <div>
        {SERVICES.map((s) => {
          const isOpen = open === s.num
          return (
            <div className="service" key={s.num}>
              <button
                className="service__row"
                onClick={() => setOpen(isOpen ? null : s.num)}
                aria-expanded={isOpen}
              >
                <span className="service__num">{s.num}</span>
                <span className="service__name">{s.name}</span>
                <span className="service__toggle">{isOpen ? 'close' : 'open'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="service__panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <div className="service__panel-inner">
                      <p className="service__desc">{s.desc}</p>
                      <ul className="service__items">
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
