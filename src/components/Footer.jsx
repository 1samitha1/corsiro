import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandLogo size="sm" to="/" />
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} Corsiro Venture Studio. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-muted">
          <Link to="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition hover:text-white">
            Terms of Service
          </Link>
        </nav>

        
      </div>
    </footer>
  )
}
