import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal.jsx'

// NOTE: indicative prices — confirm with the salon before publishing.
const MENU = [
  {
    category: 'Hair',
    items: [
      ['Haircut — women', '500'],
      ['Haircut — men', '300'],
      ['Kids’ cut', '250'],
      ['Blow-dry & styling', '400'],
      ['Global colour', '2,500'],
      ['Highlights', '2,000'],
      ['Hair spa', '900'],
      ['Hair botox', '3,000'],
      ['Anti-dandruff treatment', '800'],
    ],
  },
  {
    category: 'Skin',
    items: [
      ['Signature facial', '1,200'],
      ['Acne-care facial', '1,500'],
      ['De-tan pack', '600'],
      ['Clean-up', '500'],
    ],
  },
  {
    category: 'Hands & Feet',
    items: [
      ['Manicure', '500'],
      ['Pedicure', '700'],
      ['Nail care & shaping', '300'],
    ],
  },
  {
    category: 'Grooming & Occasion',
    items: [
      ['Threading', '60'],
      ['Waxing', '350'],
      ['Beard shaping', '200'],
      ['Party hair & makeup', '2,500'],
      ['Bridal styling', '5,000'],
    ],
  },
]

const rise = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
}

export default function Menu() {
  return (
    <section className="menu-card" id="menu">
      <div className="menu-card__head">
        <SplitReveal as="h2" className="menu-card__title">
          The <em>menu</em>
        </SplitReveal>
        <p className="menu-card__note">
          Prices are indicative, from-rates in ₹. Confirm your service on
          WhatsApp — the team will guide you to what suits you.
        </p>
      </div>

      <div className="menu-card__grid">
        {MENU.map((group) => (
          <motion.div className="menu-card__group" key={group.category} {...rise}>
            <h3 className="label">{group.category}</h3>
            <ul>
              {group.items.map(([name, price]) => (
                <li key={name}>
                  <span className="menu-card__name">{name}</span>
                  <span className="menu-card__leader" aria-hidden="true" />
                  <span className="menu-card__price">
                    <i>from</i> ₹{price}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
