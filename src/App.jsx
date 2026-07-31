import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import OutWise from './pages/OutWise'
import OutWisePrivacy from './pages/OutWisePrivacy'
import OutWiseTerms from './pages/OutWiseTerms'

function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl font-bold text-white">404</h1>
      <p className="mt-3 text-muted">This page doesn&apos;t exist.</p>
      <Link to="/" className="mt-6 text-sm font-medium text-teal hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/corsiro">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/outwise" element={<OutWise />} />
          <Route path="products/outwise/privacy" element={<OutWisePrivacy />} />
          <Route path="products/outwise/terms" element={<OutWiseTerms />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
