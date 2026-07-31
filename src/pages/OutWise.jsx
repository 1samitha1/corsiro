import { Link } from 'react-router-dom'
import outwiseScreenshot from '../assets/outwise-screenshot.png'
import outwiseScreenshot2 from '../assets/outwise-screenshot2.png'
import outwiseScreenshot3 from '../assets/outwise-screenshot3.png'

function PhoneMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-[480px] items-end justify-center pb-2">
      <div className="absolute inset-0 rounded-[3rem] bg-accent/20 blur-3xl" aria-hidden />
      <img
        src={outwiseScreenshot2}
        alt="OutWise home screen with outdoor score and local weather conditions"
        width={371}
        height={775}
        className="relative z-0 w-[40%] -translate-x-1 -rotate-8 drop-shadow-2xl sm:w-[44%]"
        decoding="async"
      />
      <img
        src={outwiseScreenshot}
        alt="OutWise activities screen with personalized outdoor recommendations"
        width={371}
        height={775}
        className="relative z-20 -ml-[14%] w-[48%] drop-shadow-2xl sm:w-[52%]"
        decoding="async"
      />
      <img
        src={outwiseScreenshot3}
        alt="OutWise planner screen with peak activity windows and insights"
        width={371}
        height={775}
        className="relative z-10 -ml-[14%] w-[40%] translate-x-1 rotate-8 drop-shadow-2xl sm:w-[44%]"
        decoding="async"
      />
    </div>
  )
}

export default function OutWise() {
  return (
    <div>
      <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 80% 30%, rgba(64,64,255,0.2), transparent 55%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Available on Android
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                iOS Coming Soon
              </span>
            </div>
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              OutWise
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              An intelligent outdoor companion built to bridge weather data and human decisions.
              OutWise analyses environmental conditions and user preferences to deliver personalised
              activity recommendations that help people spend more time outdoors with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#00F076" d="M3.6 2.2c-.3.2-.6.6-.6 1.1v17.4c0 .5.3.9.6 1.1l.1.1 9.7-9.7v-.4L3.7 2.1l-.1.1z" />
                  <path fill="#FFD200" d="M16.6 15.3l-3.2-3.2v-.2l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2.2-.1-.1z" />
                  <path fill="#FF3A44" d="M16.7 15.2L13.4 12 3.6 21.8c.4.4 1 .5 1.6.1l11.5-6.7z" />
                  <path fill="#00C3FF" d="M16.7 8.8L5.2 2.1c-.6-.3-1.2-.3-1.6.1L13.4 12l3.3-3.2z" />
                </svg>
                Get it on Google Play
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iOS — Coming Soon
              </span>
              <Link
                to="/products/outwise/privacy"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Privacy Policy
              </Link>
              <Link
                to="/products/outwise/terms"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Built around your activities
            </h2>
            <p className="mt-4 text-muted">
              Set your favourites, get scored recommendations, and stay ahead of changing weather —
              all in one place.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <div className="overflow-hidden rounded-2xl border border-white/8 bg-navy-card md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-white">
                    Activity Scores
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted">
                  Powered by intelligent weather analysis, OutWise creates personalised scores for your favourite outdoor activities. 
                  Instead of relying on generic forecasts, OutWise evaluates the conditions that matter most — including temperature, precipitation, wind, humidity, UV exposure, and user preferences — to determine how suitable the environment is for each activity. The result is a simple, easy-to-understand score that helps people make smarter outdoor decisions.
                  </p>
                </div>
                <img
                  src={outwiseScreenshot}
                  alt="OutWise activities with scored recommendations"
                  width={160}
                  height={334}
                  className="mx-auto h-56 w-auto object-contain object-bottom drop-shadow-xl sm:mr-6 sm:h-64"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-accent md:row-span-1">
              <div className="p-6 text-center sm:p-8">
                <h3 className="font-display text-xl font-semibold text-white">Outdoor Score</h3>
                <p className="mt-2 text-sm text-blue-100">
                A real-time suitability score that turns complex weather conditions into a simple outdoor decision. OutWise analyses local weather factors including temperature, UV exposure, wind speed, rainfall probability, and other environmental conditions to determine how suitable the current conditions are for being outdoors. 
                Whether planning a walk, exercise session, or adventure, the Outdoor Score helps users quickly understand if it is the right time to go.
                </p>
              </div>
              <img
                src={outwiseScreenshot2}
                alt="OutWise home with outdoor score gauge"
                width={160}
                height={334}
                className="mx-auto h-48 w-auto object-contain object-top drop-shadow-xl sm:h-56"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/8 bg-navy-card md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-white">
                    Smart Planner
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted">
                  Turn weather forecasts into actionable outdoor plans. OutWise continuously evaluates daily conditions to highlight ideal activity periods, 
                  provide weather summaries, and help users schedule outdoor time around changing environmental factors. Whether it’s a morning run, weekend hike, or cycling session, Smart Planner helps you find the right moment to go.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-teal">
                      Peak Windows
                    </span>
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-teal">
                      Daily Insights
                    </span>
                  </div>
                </div>
                <img
                  src={outwiseScreenshot3}
                  alt="OutWise planner with peak activity window"
                  width={160}
                  height={334}
                  className="mx-auto h-56 w-auto object-contain object-bottom drop-shadow-xl sm:mr-6 sm:h-64"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-navy-card p-6 md:p-8">
              <div className="mb-4 text-teal">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">Location Aware</h3>
              <p className="mt-2 text-sm text-muted">
              OutWise uses your location to deliver accurate, personalised outdoor insights. With your permission, location data helps provide local weather conditions, nearby activity recommendations, and relevant outdoor scores based on where you are. Your location is used only to improve your experience and is never sold or used for advertising purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              The Corsiro Ecosystem
            </h2>
            <p className="mt-2 text-muted">Corsiro builds and owns a growing portfolio of proprietary technology products. <br></br>
              Starting with OutWise, our ecosystem focuses on creating scalable platforms that leverage modern software engineering</p>
          </div>
          <Link to="/products" className="text-sm font-medium text-teal hover:text-cyan">
            Explore All →
          </Link>
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <div className="flex max-w-md flex-col overflow-hidden rounded-2xl border border-accent/40 bg-navy-card sm:flex-row">
            <div className="flex items-end justify-center bg-gradient-to-b from-accent/20 to-transparent px-4 pt-4 sm:w-36">
              <img
                src={outwiseScreenshot}
                alt="OutWise app"
                width={120}
                height={250}
                className="h-44 w-auto object-contain drop-shadow-lg sm:h-52"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="mb-3 inline-flex w-fit rounded-full bg-accent/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                Available on Android
              </span>
              <h3 className="font-display text-xl font-bold text-white">OutWise</h3>
              <p className="mt-2 text-sm text-muted">
                Weather-based outdoor activity scores and smart recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-8 bottom-0 opacity-20" aria-hidden>
            <svg width="200" height="140" viewBox="0 0 200 140" fill="none">
              <path d="M20 120 L70 40 L120 120 Z" stroke="white" strokeWidth="2" />
              <path d="M80 120 L130 50 L180 120 Z" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
            Know when to get outside.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-blue-100">
            Available now on Android. iOS version coming soon — built by Corsiro.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan px-6 py-3.5 text-sm font-semibold text-navy transition hover:brightness-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path fill="#00F076" d="M3.6 2.2c-.3.2-.6.6-.6 1.1v17.4c0 .5.3.9.6 1.1l.1.1 9.7-9.7v-.4L3.7 2.1l-.1.1z" />
                <path fill="#FFD200" d="M16.6 15.3l-3.2-3.2v-.2l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2.2-.1-.1z" />
                <path fill="#FF3A44" d="M16.7 15.2L13.4 12 3.6 21.8c.4.4 1 .5 1.6.1l11.5-6.7z" />
                <path fill="#00C3FF" d="M16.7 8.8L5.2 2.1c-.6-.3-1.2-.3-1.6.1L13.4 12l3.3-3.2z" />
              </svg>
              Get it on Google Play
            </a>
            <span className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white/70">
              iOS — Coming Soon
            </span>
            
          </div>
        </div>
      </section>
    </div>
  )
}
