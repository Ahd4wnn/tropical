import { motion } from 'framer-motion'
import SplitReveal from './SplitReveal.jsx'
import Counter from './Counter.jsx'

const rise = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
}

export default function About() {
  return (
    <section className="about" id="salon">
      <div className="about__label label">The Salon</div>
      <div className="about__grid">
        <div>
          <SplitReveal as="h2" className="about__quote">
            A blissful escape where <em>beauty meets relaxation</em> — built for
            men, women, and everyone in between the two chairs.
          </SplitReveal>
          <motion.div className="about__body" {...rise}>
            <p>
              Tucked into Banarasa Arcade near the Civil Station, Tropical is
              Kozhikode&rsquo;s quiet answer to the loud salon. Deep green walls,
              warm light, and a team that listens first and lifts the scissors
              second.
            </p>
            <p>
              From precision cuts and colour to hair botox, facials, and
              nail care — most people don&rsquo;t know how much happens in this
              room. Now you do.
            </p>
          </motion.div>
        </div>
        <motion.figure className="about__media" {...rise}>
          <img src="/media/hands-1.webp" alt="Stylist sectioning hair at Tropical Salon" loading="lazy" />
          <figcaption>
            <span className="label">Craft, daily</span>
            <span className="label">Est. Kozhikode</span>
          </figcaption>
        </motion.figure>
      </div>

      <div className="about__stats">
        <motion.div className="about__stat" {...rise}>
          <b>
            <Counter value={5.0} decimals={1} />
            <sup>★</sup>
          </b>
          <span className="label">Google rating</span>
        </motion.div>
        <motion.div className="about__stat" {...rise}>
          <b>
            <Counter value={105} />
          </b>
          <span className="label">Five-star reviews</span>
        </motion.div>
        <motion.div className="about__stat" {...rise}>
          <b>
            <Counter value={14} suffix="+" />
          </b>
          <span className="label">Services under one roof</span>
        </motion.div>
      </div>
    </section>
  )
}
