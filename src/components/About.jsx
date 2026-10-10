"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const details = [
  { label: "Role", value: "Frontend developer" },
  { label: "Specialty", value: "Figma designs to React and Next.js" },
  { label: "Stack", value: "React, Next.js, Tailwind CSS" },
  { label: "Experience", value: "1+ year, self-taught" },
  { label: "Live projects", value: "Uomo, Agenc, CoreWave, Nexcent" },
  { label: "Based in", value: "Bangladesh" },
];

// Figma's own selection blue. The only accent in this section.
const FIGMA_BLUE = "#0d99ff";

function Handle({ className }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-2.5 w-2.5 border bg-white ${className}`}
      style={{ borderColor: FIGMA_BLUE }}
    />
  );
}

export default function About() {
  const frameRef = useRef(null);
  const [selected, setSelected] = useState(false);

  // One moment only: when the frame scrolls into view it gets "selected",
  // like clicking it in Figma. Runs once.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSelected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const chrome = `transition-opacity duration-500 motion-reduce:transition-none ${
    selected ? "opacity-100" : "opacity-0"
  }`;

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-neutral-950/70 px-6 py-28 backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: the pitch */}
        <div className="max-w-xl">
          <h2
            className="text-4xl font-light leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            I turn Figma designs into fast, working websites.
          </h2>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/70">
            <p>
              I&apos;m Saiful, a self-taught frontend developer from
              Bangladesh. You send the design, and I build it in React and
              Next.js with Tailwind CSS, so it matches the file and works on
              every screen.
            </p>
            <p>
              I&apos;m early in my freelance career, so each project gets my
              full attention.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/#contact"
              className="group relative overflow-hidden rounded-full border border-white/30 px-7 py-3 text-white transition-colors duration-500 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative">Talk about your project</span>
            </Link>

            <Link
              href="/projects"
              className="text-white/70 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              See my projects
            </Link>
          </div>
        </div>

        {/* Right: the profile as a selected Figma frame */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* layer name, like the label above a frame in Figma */}
          <span
            className={`absolute -top-7 left-0 text-xs font-medium ${chrome}`}
            style={{ color: FIGMA_BLUE }}
          >
            About
          </span>

          <div
            ref={frameRef}
            className="relative border bg-white/5 p-8 backdrop-blur-xl transition-colors duration-500 motion-reduce:transition-none sm:p-10"
            style={{ borderColor: selected ? FIGMA_BLUE : "rgba(255,255,255,0.15)" }}
          >
            <dl className="divide-y divide-white/10">
              {details.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm text-white/50">{label}</dt>
                  <dd className="text-white">{value}</dd>
                </div>
              ))}

              <div className="grid gap-1 py-4 pb-0 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="text-sm text-white/50">Availability</dt>
                <dd className="flex items-center gap-3 text-white">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  Open for work | Worldwide
                </dd>
              </div>
            </dl>

            {/* selection handles */}
            <span className={chrome}>
              <Handle className="-left-[5px] -top-[5px]" />
              <Handle className="-right-[5px] -top-[5px]" />
              <Handle className="-bottom-[5px] -left-[5px]" />
              <Handle className="-bottom-[5px] -right-[5px]" />
            </span>
          </div>

          {/* size tag, Figma shows this under a selected frame */}
          <span
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 text-[11px] font-medium text-white ${chrome}`}
            style={{ backgroundColor: FIGMA_BLUE }}
          >
            SAIFUL
          </span>
        </div>
      </div>
    </section>
  );
}
