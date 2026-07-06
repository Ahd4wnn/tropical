const SERVICES = [
  'Haircuts & Styling',
  'Hair Colouring',
  'Hair Botox',
  'Hair Spa',
  'Facials',
  'De-Tan',
  'Skincare',
  'Manicure',
  'Pedicure',
  'Waxing',
  'Threading',
  'Bridal & Occasion',
  'Kids’ Cuts',
  'Anti-Dandruff Treatment',
]

export default function Marquee() {
  const items = [...SERVICES, ...SERVICES]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  )
}
