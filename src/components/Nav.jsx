import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LINKS = [
  ['The Salon', '#salon'],
  ['Services', '#services'],
  ['Menu', '#menu'],
  ['Reviews', '#reviews'],
  ['Visit', '#visit'],
]

const MAPS_URL =
  'https://maps.google.com/?q=Tropical+Unisex+Salon,+Banarasa+Arcade,+Civil+Station,+Kozhikode'

const WHATSAPP_URL =
  'https://wa.me/916238193133?text=' +
  encodeURIComponent(
    'Hi Tropical! I would like to book an appointment. My preferred service and time:',
  )

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    return () => document.documentElement.classList.remove('menu-open')
  }, [open])

  return (
    <>
      <header className="nav">
        <a href="#top" className="nav__mark">
          Tropical
        </a>
        <nav className="nav__links label">
          {LINKS.map(([name, href]) => (
            <a key={href} href={href}>
              {name}
            </a>
          ))}
        </nav>
        <a className="label nav__cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          Book a chair —
        </a>
        <button
          className="nav__burger label"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="menu__top">
              <span className="nav__mark">Tropical</span>
              <button
                className="label"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <nav className="menu__links">
              {LINKS.map(([name, href], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.07,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="menu__num">0{i + 1}</span>
                  {name}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="menu__foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <a className="btn btn--solid" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Book on WhatsApp
              </a>
              <span className="label">Civil Station, Kozhikode</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
