"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

/*
  - position: ছবির কোন অংশ দেখাবে ("top", "center", "bottom")
*/
const AUTO_SCROLL = true; // false করলে নিজে চলা বন্ধ
const AUTO_DELAY = 2000;
const SLIDE_MS = 600;

// playground এর সেটিং: rotate 50, stretch 0, depth 100 (Swiper)
const COVERFLOW = { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true };

// card blur layer: true = backdrop-blur original, false = copy
const REAL_BLUR = true;

const projects = [
  {
    name: "Uomo",
    description: "E-commerce website frontend.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase"],
    image: "/projects/uomo.jpg",
    position: "top",
    live: "#",
    github: "https://github.com/saiful-global",
  },
  {
    name: "Agenc",
    description: "Agency website frontend.",
    tech: [],
    image: "",
    position: "top",
    live: "#",
    github: "https://github.com/saiful-global",
  },
  {
    name: "CoreWave",
    description: "Website frontend.",
    tech: [],
    image: "",
    position: "top",
    live: "#",
    github: "https://github.com/saiful-global",
  },
  {
    name: "Nexcent",
    description: "Landing page frontend.",
    tech: [],
    image: "",
    position: "top",
    live: "#",
    github: "https://github.com/saiful-global",
  },
];

function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

// External link icon
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

function ProjectCard({ project }) {
  const { name, description, tech, image, position, live, github } = project;
  return (
    <article
      className="group relative h-[440px] w-full overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl sm:h-[480px]"
    >
      {/* image: full card , no padding no border */}
      {image ? (
        <Image
          src={image}
          alt={`${name} website screenshot`}
          fill
          sizes="360px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          style={{ objectPosition: position }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-fuchsia-500/40" />
      )}

      {/* Live badge */}
      <span className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Live
      </span>

      {/* নিচের কাচের স্তর: ওপরের দিকে ধীরে মিলিয়ে গেছে, কোনো কড়া ধার নেই */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        {REAL_BLUR ? (
          /* আসল কাচ: mask আর backdrop-blur একই element এ, নইলে ঝাপসা কাজ করে না */
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm [mask-image:linear-gradient(to_top,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_top,black_72%,transparent)]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_top,black_72%,transparent)] [-webkit-mask-image:linear-gradient(to_top,black_72%,transparent)]"
          >
            {/* ছবির ঝাপসা কপি, ঠিক নিচের ছবির উপরে বসে (কার্ডের উচ্চতা একই), তাই কাচের মতো দেখায় */}
            <div className="absolute inset-x-0 bottom-0 h-[440px] sm:h-[480px]">
              {image ? (
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="360px"
                  className="scale-110 object-cover blur-xl"
                  style={{ objectPosition: position }}
                />
              ) : (
                <div className="h-full w-full scale-110 bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-fuchsia-500/40 blur-xl" />
              )}
            </div>
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

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

          {/* Button : Live Preview & GitHub */}
          <div className="mt-4 grid gap-2">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} live preview (opens in a new tab)`}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3"
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
              className="flex items-center justify-center gap-2 rounded-full bg-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:py-3"
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
  const swiperRef = useRef(null);
  const [reduce, setReduce] = useState(false);
  const [active, setActive] = useState(0);

  // যাদের device এ "reduced-motion" চালু, তাদের জন্য নিজে চলা বন্ধ
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const n = projects.length;
  // মাঝের কার্ড ধরে loop চালাতে কমপক্ষে ৫টা কার্ড লাগে; project কম হলে নিজেরাই কপি করে ভরি
  const repeat = Math.max(1, Math.ceil(6 / n));
  const slides = Array.from({ length: repeat }).flatMap((_, copy) =>
    projects.map((project) => ({ project, copy }))
  );

  // ডটে চাপলে সবচেয়ে কাছের ওই project এ যায়
  const goTo = (i) => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    const total = slides.length;
    const cur = swiper.realIndex;
    let delta = (i - (cur % n) + n) % n;
    if (delta > n / 2) delta -= n;
    swiper.slideToLoop((cur + delta + total) % total, SLIDE_MS);
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-neutral-950/70 py-28 sm:py-32"
    >
      <style>{`
        .projects-swiper {
          --swiper-navigation-color: #fff;
          --swiper-navigation-size: 28px;
          padding: 24px 0;
        }
        .projects-swiper .swiper-button-prev,
        .projects-swiper .swiper-button-next {
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));
        }
      `}</style>

      <h2
        className="px-6 text-center text-5xl font-light tracking-tight text-white sm:text-6xl"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        Things I&apos;ve built
      </h2>

      <div className="mx-auto mt-10 max-w-6xl px-6 sm:mt-14">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation]}
          className="projects-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActive(swiper.realIndex % n);
          }}
          onSlideChange={(swiper) => setActive(swiper.realIndex % n)}
          effect="coverflow"
          coverflowEffect={COVERFLOW}
          centeredSlides
          loop
          speed={SLIDE_MS}
          grabCursor
          navigation
          autoplay={
            AUTO_SCROLL && !reduce
              ? { delay: AUTO_DELAY, disableOnInteraction: false, pauseOnMouseEnter: false }
              : false
          }
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map(({ project, copy }) => (
            <SwiperSlide key={`${project.name}-${copy}`} className="px-3">
              <div className="mx-auto w-full max-w-[380px]">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* pagination: কাচের গোল পাত্রে ডট, চলতি project এর ডট লম্বা সাদা পিল */}
      <div className="mt-2 flex justify-center px-6">
        <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-3">
          {projects.map((project, i) => (
            <button
              key={project.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${project.name}`}
              aria-current={active === i ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                active === i ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
