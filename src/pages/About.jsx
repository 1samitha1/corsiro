import { Link } from 'react-router-dom'
import logo from '../assets/logo-mark.png'

const values = [
  {
    title: 'Build Own Products',
    body: 'We are not a traditional software development agency. Every product created at Corsiro is owned, operated, and continuously improved by our team. From the first concept to global scale, we take full responsibility for the entire product journey — research, design, engineering, infrastructure, and growth. We build products with the intention of creating long-term value for users and the markets we serve.',
  },
  {
    title: 'Technical Excellence',
    body: 'Great products are built on strong foundations. At Corsiro, we obsess over every layer of technology — from scalable cloud infrastructure and reliable systems to intuitive interfaces and seamless user experiences. We believe performance, security, maintainability, and simplicity are not optional. They are the foundation that allows products to grow from early ideas into platforms trusted by users.'
  },
  {
    title: 'Long-Term Vision',
    body: 'Corsiro is built with a long-term mindset. We invest in ideas that have the potential to evolve, scale, and create meaningful impact over time.  Rather than chasing quick launches, we focus on building products that compound in value through continuous improvement, innovation, and deep understanding of our users. Our vision is to create a portfolio of technology products that solve meaningful problems and shape the way people interact with digital experiences.'
  },
]

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(64,64,255,0.18), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <img
            src={logo}
            alt=""
            className="mx-auto mb-6 h-14 w-14 object-contain sm:h-16 sm:w-16"
            width={64}
            height={64}
          />
          <p className="mb-3 text-sm font-medium text-teal">About Us</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            An independent product lab for the next decade
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
          Corsiro is a venture studio focused on creating, engineering, and scaling proprietary digital products. We identify opportunities, build solutions from the ground up, and transform ideas into technology products designed for real-world impact.

          We are not driven by short-term projects or trends. We build products we believe should exist — combining product strategy, software engineering, and thoughtful design to create experiences that can grow into lasting platforms.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/8 bg-navy-card p-6 sm:p-8"
            >
              <h2 className="font-display text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-lg font-semibold tracking-tight text-slate-300 sm:text-xl">
            Founded by Engineers, Built for Impact
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Corsiro was founded by Samitha Gunarathna, a software engineer passionate about
              building technology products that solve meaningful problems.
            </p>
            <p>
              With a background in software engineering and postgraduate studies in Information
              Technology at RMIT University, alongside a foundation in Information Technology and
              Engineering from the University of Moratuwa &amp; SLIATE, Samitha brings experience
              across software development, cloud technologies, and scalable digital platforms.
            </p>
            <p>
              Corsiro was created with a simple belief: great technology products should be built
              with ownership, long-term thinking, and a deep focus on user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-14 text-center sm:px-12">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to explore what we&apos;re building?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
          Discover Corsiro’s growing portfolio of proprietary products and the technology behind them. Whether you’re interested in our products, potential partnerships, or opportunities to collaborate, we’d love to connect.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              View Products
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
