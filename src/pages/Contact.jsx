import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium text-teal">Contact Us</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s start a conversation
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Whether you&apos;re exploring enterprise access to OutWise, partnership opportunities, or
            press inquiries — we&apos;d love to hear from you.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</p>
              <a
                href="mailto:hello@corsiro.com"
                className="mt-1 block text-lg text-white transition hover:text-teal"
              >
                hello@corsiro.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Headquarters
              </p>
              <p className="mt-1 text-lg text-white">Remote-first · Global</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-navy-card p-6 sm:p-8">
          {submitted ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal/20 text-teal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-white">Message sent</h2>
              <p className="mt-2 text-muted">Thanks for reaching out. We&apos;ll get back to you soon.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-teal hover:text-cyan"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-white outline-none focus:border-accent"
                  defaultValue="general"
                >
                  <option value="general">General inquiry</option>
                  <option value="enterprise">Enterprise / Campus</option>
                  <option value="press">Press</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
