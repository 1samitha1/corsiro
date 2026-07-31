import { Link } from 'react-router-dom'

export default function OutWisePrivacy() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium text-teal">
          <Link to="/products/outwise" className="hover:underline">
            OutWise
          </Link>{' '}
          · Legal
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white">
          OutWise Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">Last Updated: August 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Introduction</h2>
            <p>Welcome to OutWise.</p>
            <p className="mt-3">OutWise is developed by Corsiro.</p>
            <p className="mt-3">
              This Privacy Policy explains how OutWise collects, uses, stores, and protects your
              information when using the application.
            </p>
            <p className="mt-3">By using OutWise, you agree to this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Information We Collect
            </h2>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Account Information
            </h3>
            <p>When creating an account, we collect:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Email address</li>
              <li>Encrypted authentication credentials</li>
              <li>Basic profile information you choose to provide</li>
            </ul>
            <p className="mt-3">
              Authentication is securely managed using Supabase Authentication.
            </p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Activity Preferences
            </h3>
            <p>OutWise stores your selected:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Favourite activities</li>
              <li>Activity priorities</li>
              <li>User preferences</li>
            </ul>
            <p className="mt-3">This information is used to personalise recommendations.</p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Location Information
            </h3>
            <p>With your permission, OutWise may access your device location.</p>
            <p className="mt-3">Location is used solely to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Retrieve local weather conditions</li>
              <li>Generate location-based activity recommendations</li>
              <li>Improve weather accuracy</li>
            </ul>
            <p className="mt-3">Location is never sold to third parties.</p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Weather Data
            </h3>
            <p>
              OutWise retrieves weather information from third-party weather providers based on your
              location.
            </p>
            <p className="mt-3">
              Weather data is used only to generate forecasts and activity recommendations.
            </p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Notifications
            </h3>
            <p>If enabled, OutWise may send push notifications including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Weather alerts</li>
              <li>Activity recommendations</li>
              <li>Safety information</li>
              <li>Important service announcements</li>
            </ul>
            <p className="mt-3">
              You may disable notifications at any time through your device settings.
            </p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">Analytics</h3>
            <p>
              OutWise may collect anonymous usage information to help improve the application.
            </p>
            <p className="mt-3">Examples include:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Feature usage</li>
              <li>Screen visits</li>
              <li>Performance metrics</li>
              <li>Crash reports</li>
            </ul>
            <p className="mt-3">This information does not directly identify you.</p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Advertising
            </h3>
            <p>OutWise may display advertisements provided by Google AdMob.</p>
            <p className="mt-3">
              Google AdMob may collect and process certain information including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Device identifiers</li>
              <li>Advertising identifiers</li>
              <li>Approximate location</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Interaction with advertisements</li>
            </ul>
            <p className="mt-3">This information is used to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Display relevant advertisements</li>
              <li>Measure advertising performance</li>
              <li>Prevent fraud</li>
            </ul>
            <p className="mt-3">Google may use cookies and similar technologies.</p>
            <p className="mt-3">
              For more information, please refer to{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide personalised recommendations</li>
              <li>Calculate activity scores</li>
              <li>Improve weather predictions</li>
              <li>Maintain account security</li>
              <li>Respond to support requests</li>
              <li>Improve application performance</li>
              <li>Display advertisements</li>
              <li>Detect abuse or fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Third-Party Services
            </h2>
            <p>OutWise may use trusted third-party providers including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Supabase</li>
              <li>WeatherAPI</li>
              <li>Google AdMob</li>
              <li>Firebase services (if enabled)</li>
              <li>Google Play Services</li>
            </ul>
            <p className="mt-3">Each provider maintains its own privacy practices.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Data Storage</h2>
            <p>
              Your account information is securely stored using Supabase cloud infrastructure.
            </p>
            <p className="mt-3">
              Reasonable measures are implemented to protect stored information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Data Sharing</h2>
            <p>We do not sell your personal information.</p>
            <p className="mt-3">We may share information only:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>When required by law</li>
              <li>With trusted service providers necessary to operate OutWise</li>
              <li>To protect our legal rights</li>
              <li>During a business transfer or merger</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Your Choices</h2>
            <p>You may:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Update profile information</li>
              <li>Delete your account</li>
              <li>Disable location permission</li>
              <li>Disable notifications</li>
              <li>Contact us regarding your data</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Data Retention</h2>
            <p>We retain information only as long as necessary to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide our services</li>
              <li>Meet legal obligations</li>
              <li>Resolve disputes</li>
              <li>Improve our application</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Children&apos;s Privacy
            </h2>
            <p>OutWise is not directed toward children under 13 years of age.</p>
            <p className="mt-3">We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              International Users
            </h2>
            <p>Your information may be processed in countries outside your own.</p>
            <p className="mt-3">
              By using OutWise, you consent to such transfers where permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Changes to This Policy
            </h2>
            <p>We may update this Privacy Policy periodically.</p>
            <p className="mt-3">
              The latest version will always be available at{' '}
              <Link to="/products/outwise/privacy" className="text-teal hover:underline">
                corsiro.com/products/outwise/privacy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Contact</h2>
            <p>
              If you have questions about this Privacy Policy or your personal information, please
              contact:
            </p>
            <p className="mt-3">
              <Link to="/contact" className="text-teal hover:underline">
                Corsiro contact page
              </Link>
            </p>
            <p className="mt-6 text-muted">
              For website privacy practices, see the{' '}
              <Link to="/privacy" className="text-teal hover:underline">
                Corsiro Privacy Policy
              </Link>
              . For app terms, see the{' '}
              <Link to="/products/outwise/terms" className="text-teal hover:underline">
                OutWise Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
