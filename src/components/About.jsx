"use client";

import { useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "business",
    label: "I run a business",
    url: "yourbusiness.com",
    text: "Tell me about your business and what you need. I'll build a clear, professional website that makes it easy for customers to find you and get in touch.",
  },
  {
    id: "idea",
    label: "I have a design or an idea",
    url: "your-idea.com",
    text: "Send me your design and I'll build it exactly as it looks. Only have an idea? Tell me about it and I'll help turn it into a real website.",
  },
];

// A tiny sketch of a website. It "builds" itself each time the tab changes.
function SiteSketch({ id }) {
  const pop = (i) => ({ animationDelay: `${i * 90}ms` });
  return (
    <div key={id} className="space-y-4 p-4" aria-hidden="true">
      <div className="about-pop flex items-center justify-between" style={pop(0)}>
        <span className="h-3 w-16 rounded bg-white/30" />
        <span className="flex gap-2">
          <span className="h-2 w-8 rounded bg-white/15" />
          <span className="h-2 w-8 rounded bg-white/15" />
          <span className="h-2 w-8 rounded bg-white/15" />
        </span>
      </div>

      <div className="about-pop space-y-2.5 rounded-lg bg-white/5 p-4" style={pop(1)}>
        <span className="block h-4 w-3/4 rounded bg-white/30" />
        <span className="block h-4 w-1/2 rounded bg-white/30" />
        <span className="block h-2 w-2/3 rounded bg-white/15" />
        <span className="block h-6 w-20 rounded-full bg-sky-400" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[2, 3, 4].map((i) => (
          <span
            key={i}
            className="about-pop block h-14 rounded-md bg-white/10"
            style={pop(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [active, setActive] = useState(0);
  const current = options[active];

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-neutral-950/70 px-6 py-28 backdrop-blur-sm"
    >
      <style>{`
        @keyframes about-pop {
          from { opacity: 0; transform: translateY(6px) scale(0.98); }
          to   { opacity: 1; transform: none; }
        }
        .about-pop { animation: about-pop 0.45s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .about-pop { animation: none; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: who I am */}
        <div className="max-w-xl">
          <h2
            className="text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            I&apos;m Saiful. I build websites.
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-white/80">
            A self-taught frontend developer from Bangladesh. I build clean,
            fast websites that look right on phones, tablets and computers. Using modern libraries and frameworks (e.g. React, Next.js, TailwindCSS).
          </p>
          <p className="mt-3 text-lg leading-relaxed text-white/60">
            I&apos;m early in my freelance career, so every project gets my
            full attention.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/#contact"
              className="group relative overflow-hidden rounded-full border border-white/30 px-7 py-3 font-medium text-white transition-colors duration-500 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative">Contact me</span>
            </Link>

            <Link
              href="/#projects"
              className="text-white/70 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              See my work
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-3 text-white/70">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open for work | Worldwide
          </p>
        </div>

        {/* Right: "which one are you?" */}
        <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-6 lg:max-w-none">
          <div
            role="tablist"
            aria-label="What brings you here"
            className="grid grid-cols-2 gap-1 rounded-full bg-white/10 p-1"
          >
            {options.map((o, i) => (
              <button
                key={o.id}
                role="tab"
                id={`about-tab-${o.id}`}
                aria-selected={active === i}
                aria-controls="about-panel"
                onClick={() => setActive(i)}
                className={`rounded-full px-3 py-2.5 text-sm font-medium leading-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base ${
                  active === i
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <p
            id="about-panel"
            role="tabpanel"
            aria-labelledby={`about-tab-${current.id}`}
            className="mt-6 min-h-[8.5rem] text-lg leading-relaxed text-white/80 sm:min-h-[6.5rem]"
          >
            {current.text}
          </p>

          {/* browser sketch */}
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/70">
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </span>
              <span className="flex-1 rounded-full bg-white/10 px-3 py-1 text-center text-xs text-white/60">
                {current.url}
              </span>
            </div>
            <SiteSketch id={current.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
