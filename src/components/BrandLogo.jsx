import { Link } from 'react-router-dom'
import logo from '../assets/logo-mark.png'

export default function BrandLogo({
  to = '/',
  size = 'md',
  showWordmark = true,
  className = '',
  onClick,
}) {
  const sizes = {
    sm: 'h-7 w-7',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  }

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  const content = (
    <>
      <img
        src={logo}
        alt=""
        width={40}
        height={40}
        className={`${sizes[size]} shrink-0 object-contain`}
        decoding="async"
      />
      {showWordmark && (
        <span className={`font-display font-bold tracking-tight text-white ${textSizes[size]}`}>
          Corsiro
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`inline-flex items-center gap-2.5 ${className}`}
        aria-label="Corsiro home"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Corsiro">
      {content}
    </div>
  )
}
