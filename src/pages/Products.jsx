import { Link } from 'react-router-dom'
import outwiseScreenshot from '../assets/outwise-screenshot.png'
import outwiseScreenshot2 from '../assets/outwise-screenshot2.png'
import outwiseScreenshot3 from '../assets/outwise-screenshot3.png'

const products = [
  {
    slug: 'outwise',
    name: 'OutWise',
    status: 'available',
    badge: 'Available on Android',
    description:
      'Weather-smart outdoor activity recommendations. Score hiking, cycling, running, and more against live local conditions.',
    href: '/products/outwise',
    images: [outwiseScreenshot2, outwiseScreenshot, outwiseScreenshot3],
  },
  {
    slug: '',
    name: '',
    status: 'upcoming',
    badge: 'Coming Soon',
    description:
      '',
  }
]

export default function Products() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-teal">Products</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Apps by Corsiro
          </h1>
          <p className="mt-4 text-lg text-muted">
          Our products combine modern technology, intuitive design, and practical innovation to help people make smarter decisions every day.
           As our ecosystem grows, every application shares the same commitment to quality, simplicity, and reliability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const isAvailable = product.status === 'available'
            const Card = (
              <div
                className={[
                  'flex h-full flex-col overflow-hidden rounded-2xl border transition',
                  isAvailable
                    ? 'border-accent/40 bg-navy-card shadow-[0_0_40px_-12px_rgba(64,64,255,0.45)] hover:border-accent/70'
                    : 'border-white/8 bg-navy-card/60 opacity-70',
                ].join(' ')}
              >
                {product.images && (
                  <div className="flex items-end justify-center gap-1 bg-gradient-to-b from-accent/15 to-transparent px-3 pt-6 sm:gap-2 sm:px-4">
                    {product.images.map((src, i) => {
                      const mid = Math.floor((product.images.length - 1) / 2)
                      const size =
                        i === mid || (product.images.length === 2 && i === 1)
                          ? 'h-52 z-10'
                          : 'h-40'
                      const tilt =
                        i < mid || (product.images.length === 2 && i === 0)
                          ? '-rotate-6'
                          : i > mid
                            ? 'rotate-6'
                            : ''
                      return (
                        <img
                          key={src}
                          src={src}
                          alt={`${product.name} app screenshot ${i + 1}`}
                          width={120}
                          height={250}
                          className={`w-auto object-contain drop-shadow-xl transition group-hover:scale-[1.02] ${size} ${tilt}`}
                        />
                      )
                    })}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <span
                    className={[
                      'mb-5 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider',
                      isAvailable
                        ? 'bg-accent/20 text-blue-300'
                        : 'bg-white/5 text-slate-400',
                    ].join(' ')}
                  >
                    {product.badge}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white">{product.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                  {isAvailable && (
                    <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition group-hover:brightness-110">
                      Explore Product
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            )

            return isAvailable ? (
              <Link key={product.slug} to={product.href} className="group block">
                {Card}
              </Link>
            ) : (
              <div key={product.slug}>{Card}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
