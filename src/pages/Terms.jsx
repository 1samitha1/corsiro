import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium text-teal">Legal</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted">Last Updated: August 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">1. Introduction</h2>
            <p>Welcome to Corsiro.</p>
            <p className="mt-3">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Corsiro website,
              digital platforms, and related services operated by Corsiro (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="mt-3">
              By accessing our website or engaging with our services, you agree to these Terms. If
              you do not agree with these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">2. About Corsiro</h2>
            <p>
              Corsiro is an independent product studio that designs, develops, and operates
              proprietary digital products and technology platforms.
            </p>
            <p className="mt-3">
              Our products are created, owned, and maintained by Corsiro. Information provided
              through our website is intended to describe our products, capabilities, and company
              activities.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">3. Website Usage</h2>
            <p>You may use the Corsiro website for lawful purposes only.</p>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Use the website in a way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Copy, reproduce, modify, or distribute website content without permission</li>
              <li>Interfere with website performance or security</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              4. Intellectual Property
            </h2>
            <p>
              All content, branding, designs, logos, software, text, graphics, and materials
              available through Corsiro are owned by or licensed to Corsiro.
            </p>
            <p className="mt-3">
              You may not use, reproduce, distribute, or modify our intellectual property without
              prior written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              5. Products and Services
            </h2>
            <p>
              Corsiro develops and operates proprietary products. Product availability, features, and
              functionality may change over time as we continue to improve our technology.
            </p>
            <p className="mt-3">
              Information displayed on our website does not guarantee future product availability or
              specific features.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              6. Third-Party Services
            </h2>
            <p>
              Our website or products may contain references or links to third-party services.
            </p>
            <p className="mt-3">
              Corsiro is not responsible for the availability, accuracy, security, or practices of
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">7. Privacy</h2>
            <p>Your privacy is important to us.</p>
            <p className="mt-3">
              Information about how we collect, use, and protect personal information is explained in
              our{' '}
              <Link to="/privacy" className="text-teal hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">8. Disclaimer</h2>
            <p>Corsiro provides information and services on an &quot;as available&quot; basis.</p>
            <p className="mt-3">
              While we aim to provide accurate and reliable information, we do not guarantee that our
              website or services will always be uninterrupted, error-free, or completely accurate.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Corsiro is not liable for indirect, incidental,
              or consequential losses arising from your use of our website or products.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              10. Changes to These Terms
            </h2>
            <p>We may update these Terms from time to time.</p>
            <p className="mt-3">
              Any changes will be published on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">11. Contact</h2>
            <p>For questions regarding these Terms:</p>
            <p className="mt-3">
              <Link to="/contact" className="text-teal hover:underline">
                Corsiro Contact page
              </Link>
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
