import Link from "next/link";

/**
 * Shown on auth screens when the visitor has no session yet — nudge to Friends Contact
 * before admin session cookies are issued (BFF wordplay).
 */
export default function AuthBffFriendsCallout() {
  return (
    <div
      className="mb-4 rounded-lg border border-cyan-200 bg-cyan-50/90 p-3 text-sm leading-relaxed text-cyan-950 dark:border-cyan-800 dark:bg-cyan-950/35 dark:text-cyan-100"
      role="note"
    >
      <p className="font-semibold text-cyan-900 dark:text-cyan-50">New here — no cookie yet?</p>
      <p className="mt-2">
        Before I start issuing admin session cookies, let&apos;s get to know each other a bit. Head to{" "}
        <Link
          href="/friends-contact"
          className="font-semibold text-cyan-800 underline decoration-cyan-600/60 underline-offset-2 hover:text-cyan-950 dark:text-cyan-200 dark:hover:text-white"
        >
          Friends Contact
        </Link>{" "}
        to meet my newly acquired BFFs (Backend-for-Frontend friends) and say hello.
      </p>
    </div>
  );
}
