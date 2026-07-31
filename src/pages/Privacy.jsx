import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium text-teal">Legal</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">Last Updated: August 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Introduction</h2>
            <p>Welcome to Corsiro.</p>
            <p className="mt-3">
              Corsiro (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is an independent software company that develops mobile
              applications and digital services. This Privacy Policy explains how we collect, use,
              disclose, and protect information when you visit our website.
            </p>
            <p className="mt-3">
              By using our website, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Information We Collect
            </h2>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Information You Provide
            </h3>
            <p>We may collect information that you voluntarily provide, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Your name</li>
              <li>Email address</li>
              <li>Messages submitted through our contact form</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we may automatically collect limited technical information
              such as:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Browser type</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referring website</li>
            </ul>
            <p className="mt-3">This information helps us improve our website and services.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              How We Use Information
            </h2>
            <p>We use information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to enquiries</li>
              <li>Improve our website</li>
              <li>Monitor website performance</li>
              <li>Detect security issues</li>
              <li>Develop future products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Cookies</h2>
            <p>
              Our website may use cookies or similar technologies to improve user experience.
            </p>
            <p className="mt-3">
              You may disable cookies through your browser settings, although some features may not
              function correctly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Third-Party Services
            </h2>
            <p>Our website may contain links to third-party websites or services.</p>
            <p className="mt-3">We are not responsible for their privacy practices.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Data Security</h2>
            <p>
              We use reasonable technical and organisational measures to protect personal information
              against unauthorised access, loss, misuse, or disclosure.
            </p>
            <p className="mt-3">
              However, no method of internet transmission or electronic storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Children&apos;s Privacy
            </h2>
            <p>Our website is not intended for children under the age of 13.</p>
            <p className="mt-3">We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of personal information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Changes to This Policy
            </h2>
            <p>We may update this Privacy Policy from time to time.</p>
            <p className="mt-3">Changes become effective immediately upon publication.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">Contact</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us.
            </p>
            <p className="mt-3">
              Email:{' '}
              <a href="mailto:privacy@corsiro.com" className="text-teal hover:underline">
                privacy@corsiro.com
              </a>
            </p>
            <p className="mt-6 text-muted">
              Looking for the OutWise app policy? See the{' '}
              <Link to="/products/outwise/privacy" className="text-teal hover:underline">
                OutWise Privacy Policy
              </Link>
              . For website terms, see our{' '}
              <Link to="/terms" className="text-teal hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
