"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/*
  প্রতিটা project এর জন্য বদলাও:
  - image:    public/projects/ এ screenshot রাখো, যেমন "/projects/uomo.webp"
              কার্ড লম্বা (portrait), তাই ফোনের মাপে (প্রস্থ ~390px) তোলা screenshot সবচেয়ে ভালো
  - position: ছবির কোন অংশ দেখাবে ("top", "center", "bottom")
  - live / github: আসল link
  নতুন project যোগ করতে শুধু array তে একটা object add 
*/
const AUTO_SCROLL = true; // false করলে নিজে চলা বন্ধ
const SPEED = 28; // px/সেকেন্ড, কমালে আরও ধীর

const projects = [
  {
    name: "Uomo",
    description: "E-commerce website frontend.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase"],
    image: "",
    position: "top",
    live: "#", // TODO: Uomo এর live link
    github: "https://github.com/saiful-global", // TODO: repo এর সরাসরি link
  },
  {
    name: "Agenc",
    description: "Agency website frontend.",
    tech: [], // TODO
    image: "",
    position: "top",
    live: "#", // TODO
    github: "https://github.com/saiful-global", // TODO
  },
  {
    name: "CoreWave",
    description: "Website frontend.", // TODO: এক লাইনে বর্ণনা
    tech: [], // TODO
    image: "",
    position: "top",
    live: "#", // TODO
    github: "https://github.com/saiful-global", // TODO
  },
  {
    name: "Nexcent",
    description: "Landing page frontend.",
    tech: [], // TODO
    image: "",
    position: "top",
    live: "#", // TODO
    github: "https://github.com/saiful-global", // TODO
  },
];

function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

// বর্গক্ষেত্রের ভেতর থেকে তীর বেরোনো icon, মানে "নতুন tab এ খুলবে"
function ExternalIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function Chevron({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

function ProjectCard({ project, duplicate = false }) {
  const { name, description, tech, image, position, live, github } = project;
  // slider এর নকল কপিতে tab বন্ধ, নইলে একই link বারবার আসবে
  const a11y = duplicate ? { tabIndex: -1 } : {};

  return (
    <article
      aria-hidden={duplicate || undefined}
      className="group relative h-[440px] w-[72vw] max-w-[280px] shrink-0 overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl sm:h-[480px] sm:w-[360px] sm:max-w-none"
    >
      {/* ছবি: পুরো কার্ড জুড়ে, কোনো padding বা border নেই */}
      {image ? (
        <Image
          src={image}
          alt={duplicate ? "" : `${name} website screenshot`}
          fill
          sizes="360px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          style={{ objectPosition: position }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-fuchsia-500/40" />
      )}

      {/* Live চিহ্ন */}
      <span className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Live
      </span>

      {/* নিচের কাচের স্তর: ওপরের দিকে ধীরে মিলিয়ে গেছে, কোনো কড়া ধার নেই */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40 backdrop-blur-xl [mask-image:linear-gradient(to_top,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_top,black_72%,transparent)]"
        />

        <div className="relative px-4 pb-4 pt-10 sm:px-5 sm:pb-5 sm:pt-12">
          {tech.length > 0 && (
            <ul className="mb-3 flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          <h3
            className="text-3xl font-normal tracking-tight text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {name}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-white/80">{description}</p>
          )}

          {/* বাটন উপর-নিচে: Live Preview আগে, GitHub তার নিচে */}
          <div className="mt-4 grid gap-2">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} live preview (opens in a new tab)`}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3"
              {...a11y}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Live Preview
              <ExternalIcon className="h-4 w-4" />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} source code on GitHub (opens in a new tab)`}
              className="flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3"
              {...a11y}
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
              GitHub
              <ExternalIcon className="h-4 w-4 text-white/70" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const scrollerRef = useRef(null);
  const ctl = useRef({ remaining: 0 });

  const n = projects.length;
  // দুই সেটের বেশি + screen প্রস্থ ভরাট রাখতে কত কপি লাগবে (project বাড়লে নিজে কমে)
  const copies = 2 + Math.ceil(2600 / (n * (360 + 24)));

  // বাটন চাপলে এক কার্ড পরিমাণ দূরত্ব "বাকি" থাকে, চলার হিসাব সেটা নরমভাবে খরচ করে
  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el || !el.children[1]) return;
    ctl.current.remaining += dir * (el.children[1].offsetLeft - el.children[0].offsetLeft);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const c = ctl.current;

    // এক সেট project এর মোট প্রস্থ (পিক্সেলে)
    const setWidth = () => {
      const a = el.children[0];
      const b = el.children[n];
      return a && b ? b.offsetLeft - a.offsetLeft : 0;
    };

    let S = setWidth();
    el.scrollLeft = S; // মাঝের সেট থেকে শুরু, যেন দুই দিকেই যাওয়া যায়
    let pos = S;
    let lastSet = el.scrollLeft;

    const onResize = () => {
      S = setWidth();
    };
    window.addEventListener("resize", onResize);

    // সীমা পেরোলে এক সেট পিছিয়ে/এগিয়ে আনি, তাই কখনো শেষ হয় না
    const onScroll = () => {
      if (S <= 0) return;
      if (el.scrollLeft >= 2 * S) el.scrollLeft -= S;
      else if (el.scrollLeft <= 0) el.scrollLeft += S;
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;

      // scroll নাড়ালে তার জায়গা থেকেই এগোই
      if (el.scrollLeft !== lastSet) pos = el.scrollLeft;

      // বাটনের নরম নড়াচড়া
      const ease = c.remaining * (1 - Math.exp(-dt * 8));
      c.remaining = Math.abs(c.remaining) < 0.5 ? 0 : c.remaining - ease;

      const auto = AUTO_SCROLL && !reduce ? SPEED * dt : 0;
      const move = auto + ease;

      if (move !== 0 && S > 0) {
        pos += move;
        if (pos >= 2 * S) pos -= S;
        else if (pos <= 0) pos += S;
        el.scrollLeft = pos;
      }
      lastSet = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("scroll", onScroll);
    };
  }, [n]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-neutral-950/70 py-28 backdrop-blur-sm sm:py-32"
    >
      <h2
        className="px-6 text-center text-5xl font-light tracking-tight text-white sm:text-6xl"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        Things I&apos;ve built
      </h2>

      <div className="relative mt-16 sm:mt-20">
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto px-6 [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {Array.from({ length: copies }).flatMap((_, c) =>
            projects.map((project) => (
              <ProjectCard
                key={`${project.name}-${c}`}
                project={project}
                duplicate={c > 0}
              />
            ))
          )}
        </div>

        {/* বাম-ডান নিয়ন্ত্রণ */}
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6 sm:h-12 sm:w-12"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:h-12 sm:w-12"
        >
          <Chevron dir="right" />
        </button>
      </div>
    </section>
  );
}
