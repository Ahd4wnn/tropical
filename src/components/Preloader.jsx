import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const WORD = 'TROPICAL'

export default function Preloader({ onDone }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false)
      onDone()
    }, 1900)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader__word" aria-label="Tropical">
            {WORD.split('').map((ch, i) => (
              <motion.span
                key={i}
                className={i === 0 ? 'gold' : undefined}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.055,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
