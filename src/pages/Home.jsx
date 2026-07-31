import { Link } from 'react-router-dom'
import logo from '../assets/logo-mark.png'

const products = ['OUTWISE']

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(45,212,191,0.12), transparent 60%), radial-gradient(ellipse 50% 40% at 70% 20%, rgba(64,64,255,0.15), transparent 55%)',
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-teal">
            <img
              src={logo}
              alt=""
              className="h-4 w-4 object-contain"
              width={16}
              height={16}
            />
            Independent Product Lab
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Building Apps That Make Everyday Life Smarter
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Corsiro is an independent software studio creating thoughtfully designed mobile and web applications that solve real-world problems. 
          We combine modern technology, intuitive design, and innovation to build products people love to use.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110"
            >
              Explore Our Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Innovation */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Internal Innovation
            </h2>
            <p className="mt-3 text-muted">
            Every Corsiro product begins with a real problem. We combine thoughtful design, modern engineering, 
            and continuous improvement to create applications that are practical, intuitive, and built to evolve with our users.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Scalable Web Platforms - wide */}
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-navy-card p-6 md:col-span-2 md:row-span-1 md:p-8">
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 40%, rgba(45,212,191,0.35) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.3) 1px, transparent 1px)',
                  backgroundSize: '24px 24px, 32px 32px',
                }}
              />
              <div className="relative">
                <div className="mb-4 text-teal">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">Scalable Web Platforms</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                We build modern cloud-powered applications with scalability, security, and maintainability in mind. 
                Our platforms are designed to grow alongside our products while delivering reliable experiences across devices.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-300">
                    Cloud-Native
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-300">
                    Secure by Design
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-300">
                  Scalable Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Innovations - tall */}
            <div className="flex flex-col rounded-2xl border border-white/8 bg-navy-card p-6 md:row-span-2 md:p-8">
              <div className="mb-4 text-teal">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">Mobile Innovations</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
              We create intuitive mobile applications that help people make smarter decisions in their everyday lives. 
              Every app is designed with performance, accessibility, and a seamless user experience at its core.
              </p>
              <Link
                to="/products"
                className="mt-auto pt-8 text-sm font-medium text-teal transition hover:text-cyan"
              >
                Explore Out Apps →
              </Link>
            </div>

            {/* Infrastructure */}
            <div className="rounded-2xl border border-white/8 bg-navy-card p-6 md:col-span-2 md:p-8">
              <div className="mb-4 text-teal">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">Infrastructure</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
              Behind every Corsiro product is a reliable cloud infrastructure designed for performance, security, and continuous improvement. 
              We embrace modern development practices to deliver dependable digital experiences today while preparing for tomorrow's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Powering digital experiences across the globe
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {products.map((name) => (
              <div
                key={name}
                className="rounded-lg border border-white/5 bg-white/[0.03] px-5 py-3 text-sm font-semibold tracking-widest text-slate-500 sm:px-8"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
