import { Link } from 'react-router-dom'

export default function OutWiseTerms() {
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
          OutWise Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted">Effective Date: August 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">1. Introduction</h2>
            <p>Welcome to OutWise.</p>
            <p className="mt-3">
              OutWise is an outdoor activity planning application developed and operated by Corsiro.
              The application provides weather-based insights, activity recommendations, outdoor
              suitability scores, and planning tools.
            </p>
            <p className="mt-3">
              By downloading, accessing, or using OutWise, you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">2. Use of OutWise</h2>
            <p>You may use OutWise for personal, non-commercial purposes.</p>
            <p className="mt-3">You agree that you will:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Provide accurate information when creating an account</li>
              <li>Keep your account information secure</li>
              <li>Use the application responsibly</li>
              <li>Follow all applicable laws when participating in outdoor activities</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              3. Weather Information and Recommendations
            </h2>
            <p>
              OutWise provides weather-based insights, activity scores, and recommendations using
              available environmental data.
            </p>
            <p className="mt-3">
              These features are designed to assist decision-making but should not be considered
              professional safety advice.
            </p>
            <p className="mt-3">
              Weather conditions can change rapidly. Users remain responsible for assessing risks and
              making their own decisions before participating in outdoor activities.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              4. Outdoor Scores and Activity Recommendations
            </h2>
            <p>
              OutWise calculates activity suitability scores based on factors such as:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Weather conditions</li>
              <li>Temperature</li>
              <li>Rain probability</li>
              <li>Wind conditions</li>
              <li>UV levels</li>
              <li>Other environmental information</li>
              <li>User preferences</li>
            </ul>
            <p className="mt-3">
              Scores are provided as guidance only and do not guarantee safe or ideal conditions.
            </p>
            <p className="mt-3">
              Users should always consider their own abilities, equipment, location, and
              circumstances.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              5. Location Services
            </h2>
            <p>OutWise may request access to your location to provide:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Accurate local weather information</li>
              <li>Personalised activity scores</li>
              <li>Nearby recommendations</li>
              <li>Location-based features</li>
            </ul>
            <p className="mt-3">
              Location access is optional and can be managed through your device settings.
            </p>
            <p className="mt-3">We do not sell your personal location information.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">6. User Accounts</h2>
            <p>Some features may require an account.</p>
            <p className="mt-3">You are responsible for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Maintaining confidentiality of your account</li>
              <li>Keeping your login details secure</li>
              <li>All activity performed through your account</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">7. Acceptable Use</h2>
            <p>You must not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Reverse engineer or modify the application</li>
              <li>Attempt to access restricted systems</li>
              <li>Use OutWise for unlawful purposes</li>
              <li>Abuse, disrupt, or interfere with application functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              8. Third-Party Data and Services
            </h2>
            <p>
              OutWise may use third-party services, including weather providers, analytics providers,
              authentication services, and infrastructure providers.
            </p>
            <p className="mt-3">
              Availability and accuracy of third-party information may vary.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              9. Advertising and Monetisation
            </h2>
            <p>
              OutWise may display advertisements or introduce additional monetisation features in the
              future.
            </p>
            <p className="mt-3">
              Advertising content may be provided by third-party advertising partners.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              10. Subscription and Paid Features
            </h2>
            <p>If OutWise introduces paid features or subscriptions:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Pricing will be displayed before purchase</li>
              <li>Payments will be processed through the relevant app store</li>
              <li>
                Subscription management and cancellation will follow the rules of the applicable
                platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">11. Disclaimer</h2>
            <p>OutWise is designed to support outdoor planning decisions.</p>
            <p className="mt-3">It does not replace:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Weather warnings from official authorities</li>
              <li>Emergency services</li>
              <li>Professional safety advice</li>
              <li>Personal judgement</li>
            </ul>
            <p className="mt-3">
              Outdoor activities involve inherent risks, and users participate at their own
              responsibility.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              12. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Corsiro is not responsible for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Injuries, accidents, or damages resulting from outdoor activities</li>
              <li>Decisions made based on application recommendations</li>
              <li>Inaccuracies caused by weather data providers</li>
              <li>Service interruptions or technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">13. Termination</h2>
            <p>
              We may suspend or terminate access to OutWise if users violate these Terms or misuse
              the application.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              14. Changes to These Terms
            </h2>
            <p>We may update these Terms as OutWise evolves.</p>
            <p className="mt-3">
              Continued use of OutWise after changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">15. Contact</h2>
            <p>For questions about OutWise:</p>
            <p className="mt-3">
              OutWise by Corsiro —{' '}
              <Link to="/contact" className="text-teal hover:underline">
                Contact page
              </Link>
            </p>
            <p className="mt-6 text-muted">
              Related:{' '}
              <Link to="/products/outwise/privacy" className="text-teal hover:underline">
                OutWise Privacy Policy
              </Link>
              {' · '}
              <Link to="/terms" className="text-teal hover:underline">
                Corsiro Terms of Service
              </Link>
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
