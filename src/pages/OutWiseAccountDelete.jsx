import { Link } from 'react-router-dom'

export default function OutWiseAccountDelete() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium text-teal">
          <Link to="/products/outwise" className="hover:underline">
            OutWise
          </Link>{' '}
          · Account
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white">
          Delete Your OutWise Account
        </h1>
        <p className="mt-3 text-lg text-muted">
          Permanently remove your account and personal data
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-300">
          <section>
            <p>
              OutWise gives you full control over your account data. You can permanently delete your
              account directly from the app through:
            </p>
            <p className="mt-4 rounded-xl border border-white/10 bg-navy-card px-4 py-3 font-medium text-white">
              Settings → Delete Account
            </p>
            <p className="mt-4">
              When you confirm account deletion, your request is processed immediately. Account
              deletion is permanent and cannot be reversed.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              How account deletion works
            </h2>
            <p>When you request deletion:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>You confirm account deletion from the OutWise app.</li>
              <li>
                OutWise securely verifies your account using your active login session.
              </li>
              <li>Your personal data stored on our servers is permanently deleted.</li>
              <li>Your account authentication record is removed.</li>
              <li>The app clears locally stored data and signs you out.</li>
            </ul>
            <p className="mt-4">
              Once completed, your account and personal history cannot be restored.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Data that will be deleted
            </h2>
            <p>
              The following personal data associated with your OutWise account will be permanently
              removed:
            </p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Account information
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Profile information, including your name and account details</li>
              <li>Login identity associated with your account</li>
            </ul>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Personal preferences
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Outdoor interests</li>
              <li>Safety alert priorities</li>
              <li>Saved locations used for personalised weather alerts</li>
            </ul>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Activity and outdoor history
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Outdoor activity history</li>
              <li>Activity try history</li>
              <li>Daily outdoor score history</li>
              <li>Personalised insights connected to your account</li>
            </ul>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Communication data
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Feedback submissions</li>
              <li>Contact-us messages</li>
              <li>Email verification records</li>
            </ul>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Notifications data
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Push notification device tokens</li>
              <li>Saved notification preferences</li>
              <li>Pending activity recommendations</li>
              <li>Pending weather alert records</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Data removed from your device
            </h2>
            <p>
              When your account is deleted, OutWise also removes locally stored information from your
              device, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Personal insight and outdoor score cache</li>
              <li>In-app notification inbox</li>
              <li>Notification permission prompt status</li>
              <li>Your active login session</li>
            </ul>
            <p className="mt-4">You will be signed out automatically.</p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Data that is not deleted
            </h2>
            <p>
              Some information is not connected to your personal account and is not deleted:
            </p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Shared app data
            </h3>
            <p>OutWise uses shared app-wide information such as:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Outdoor activity categories</li>
              <li>General priority lists</li>
              <li>Public app configuration data</li>
            </ul>
            <p className="mt-3">This information does not contain your personal data.</p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Weather information
            </h3>
            <p>
              Weather information is retrieved from external weather providers when needed. OutWise
              does not maintain a personal archive of your weather data after account deletion.
            </p>

            <h3 className="mb-2 mt-5 font-display text-base font-semibold text-white">
              Device-level cached information
            </h3>
            <p>
              Some non-personal app preferences or temporary device caches may remain on your device
              until removed by your operating system or by uninstalling the OutWise app.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-white">
              Before deleting your account
            </h2>
            <p>Please note:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Account deletion is permanent.</li>
              <li>
                Your outdoor history, scores, preferences, and personalised recommendations cannot be
                recovered.
              </li>
              <li>Creating a new OutWise account will start with a fresh profile.</li>
            </ul>
          </section>

          <section>
            <p className="text-muted">
              Related:{' '}
              <Link to="/products/outwise/privacy" className="text-teal hover:underline">
                OutWise Privacy Policy
              </Link>
              {' · '}
              <Link to="/products/outwise/terms" className="text-teal hover:underline">
                OutWise Terms of Service
              </Link>
              {' · '}
              <Link to="/contact" className="text-teal hover:underline">
                Contact
              </Link>
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
