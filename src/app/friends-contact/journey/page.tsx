"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "../../../components/modern/ClientMotionWrapper";
import {
  readJourneySnapshot,
  type FriendContactJourneySnapshot,
} from "../../../lib/friends-contact-journey";
import JourneyChatPanel from "./JourneyChatPanel";

function ParticleBurst({ seed }: { seed: number }) {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => {
        const angle = (i / 28) * Math.PI * 2 + seed * 0.7;
        const r = 120 + (i % 5) * 18;
        const size = 2 + (i % 4);
        return {
          id: `${seed}-${i}`,
          ox: Math.cos(angle) * r,
          oy: Math.sin(angle) * r,
          duration: 5 + (i % 7) * 0.35,
          delay: (i * 0.08 + seed * 0.12) % 2.5,
          sizePx: `${size}px`,
          halfPx: `${-size / 2}px`,
          opacity: 0.35 + (i % 5) * 0.08,
        };
      }),
    [seed]
  );

  // Framer Motion applies transform/style differently on server vs client; render only after mount.
  if (!clientReady) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        aria-hidden
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute left-1/2 top-1/2 h-0 w-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]"
            style={{
              width: p.sizePx,
              height: p.sizePx,
              marginLeft: p.halfPx,
              marginTop: p.halfPx,
              opacity: p.opacity,
            }}
            initial={{ x: p.ox, y: p.oy, scale: 0.4 }}
            animate={{ x: 0, y: 0, scale: 1 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
}

function DetailHub({
  title,
  emoji,
  children,
  seed,
}: {
  title: string;
  emoji: string;
  children: ReactNode;
  seed: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: seed * 0.08 }}
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl"
    >
      <ParticleBurst seed={seed} />
      <div className="relative z-10">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
          <span className="text-2xl" aria-hidden>
            {emoji}
          </span>
          {title}
        </h2>
        <div className="space-y-2 text-sm leading-relaxed text-blue-100/90">{children}</div>
      </div>
    </motion.article>
  );
}

function field(label: string, value: string, empty = "—") {
  const v = value?.trim();
  return (
    <p>
      <span className="font-medium text-cyan-200/90">{label}:</span>{" "}
      <span className="text-white/90">{v || empty}</span>
    </p>
  );
}

export default function HiggsJourneyPage() {
  const [snapshot, setSnapshot] = useState<FriendContactJourneySnapshot | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSnapshot(readJourneySnapshot());
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 py-14"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.25), transparent),
          radial-gradient(ellipse 60% 40% at 100% 50%, rgba(167, 139, 250, 0.2), transparent),
          radial-gradient(ellipse 50% 30% at 0% 80%, rgba(34, 211, 238, 0.15), transparent),
          linear-gradient(165deg, #0a0618 0%, #12082a 40%, #0c1938 100%)
        `,
      }}
    >
      <div className="pointer-events-none fixed inset-0 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-px rounded-full bg-cyan-200"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 2.2, 1] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            Friends contact · post-submit journey
          </p>
          <h1 className="mb-4 bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Higgs field & your details
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100/85">
            Think of each interaction as a gentle coupling:{" "}
            <strong className="text-cyan-200">effective Higgs–like excitations</strong> nudge information along
            well-defined paths—so your{" "}
            <strong className="text-violet-200">personal details stay organized</strong> as they converge toward
            clarity. Below, your profile “attractors” collect what you shared (or placeholders until you submit the
            form).
          </p>
        </motion.header>

        {!mounted ? null : !snapshot ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-6 text-center text-amber-100"
          >
            <p className="mb-4 text-lg">
              No journey payload yet. Complete the cosmic form once—then return here to see your details orbit the
              attractors.
            </p>
            <Link
              href="/friends-contact"
              className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-95"
            >
              Go to Friends Contact
            </Link>
          </motion.div>
        ) : (
          <p className="mb-8 text-center text-sm text-cyan-200/80">
            Submitted {new Date(snapshot.submittedAt).toLocaleString()} · particles are a metaphor—your data stays
            in this browser tab until you clear site data.
          </p>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <DetailHub title="Earth identity core" emoji="🌍" seed={0}>
            {snapshot ? (
              <>
                {field("Earth name", snapshot.name)}
                {field("Age", snapshot.age)}
                {field("Birthday", snapshot.birthday)}
                {field("Residence", snapshot.currentResidence)}
                {field("Birth place", snapshot.birthPlace)}
                {field("Favorite color", snapshot.favoriteColor)}
              </>
            ) : (
              <p className="text-white/70">
                Ground truth for your legal identity and whereabouts—keep dates and spellings aligned with official
                documents when you share them with Menno.
              </p>
            )}
          </DetailHub>

          <DetailHub title="Cosmic persona" emoji="👽" seed={1}>
            {snapshot ? (
              <>
                {field("Alien name", snapshot.alienName)}
                {field("Alien hobbies", snapshot.alienHobbies)}
                {field("Dance battle song", snapshot.danceBattleSong)}
                {field("Favorite Disney film", snapshot.favoriteDisneyFilm)}
              </>
            ) : (
              <p className="text-white/70">
                Your playful alter-ego and tastes—these orbits stay light-hearted while still helping friends remember
                who you are.
              </p>
            )}
          </DetailHub>

          <DetailHub title="Mission cargo" emoji="🚀" seed={2}>
            {snapshot ? (
              <>
                {field("Space food", snapshot.spaceFood)}
                {field("Space gear", snapshot.spaceGear)}
                {field("Why you’re a hero", snapshot.heroReason)}
              </>
            ) : (
              <p className="text-white/70">
                Supplies and motivation you’d pack for a long voyage—good prompts to refresh when your goals shift.
              </p>
            )}
          </DetailHub>

          <DetailHub title="Signal to Menno" emoji="💌" seed={3}>
            {snapshot ? (
              <p className="whitespace-pre-wrap text-white/90">{snapshot.spaceMessage?.trim() || "—"}</p>
            ) : (
              <p className="text-white/70">
                Your open message is the clearest trajectory: update it whenever your story changes so the field stays
                coherent.
              </p>
            )}
          </DetailHub>
        </div>

        <div className="mt-16 max-w-4xl">
          <JourneyChatPanel />
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-10 text-center"
        >
          <p className="max-w-xl text-sm text-blue-200/75">
            Maintaining details properly means revisiting this journey after life updates—same form, new snapshot, same
            particle dance toward clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/friends-contact"
              className="rounded-xl border border-white/25 bg-white/5 px-5 py-2.5 text-white transition hover:bg-white/10"
            >
              Update via Friends Contact
            </Link>
            <Link href="/" className="rounded-xl px-5 py-2.5 text-cyan-200 underline-offset-4 hover:underline">
              Return home
            </Link>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
