import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

function linkClass({ isActive }) {
  return [
    'relative px-1 py-1 text-sm font-medium transition-colors',
    isActive ? 'text-white' : 'text-slate-400 hover:text-white',
    isActive
      ? "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-white after:content-['']"
      : '',
  ].join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <BrandLogo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">

        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
