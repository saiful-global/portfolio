"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

// sans-serif (Inter Black) - for big name
const inter = Inter({ subsets: ["latin"], weight: ["900"] });

// ===== তথ্য =====
const FOOTER_IMAGE = ""; // TODO: public/ এ ছবি রেখে লেখো, যেমন "/footer.webp" (১৯২০px প্রস্থ, ৩০০KB এর নিচে)
const FOOTER_IMAGE_POSITION = "center"; // "top", "center" বা "bottom"

const EMAIL = "saifulislambappi01@gmail.com";
const PHONE = "+8801530076509";
const WHATSAPP = "8801530076509";

// logo's
const socials = [
  { key: "facebook", label: "Facebook", brand: "#1877F2", href: "https://www.facebook.com/global.saiful" },
  { key: "linkedin", label: "LinkedIn", brand: "#0A66C2", href: "https://www.linkedin.com/in/saiful-global/" },
  {
    key: "whatsapp",
    label: "WhatsApp",
    brand: "#25D366",
    href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Saiful, I'd like to talk about a website.")}`,
  },
  { key: "email", label: "Email", brand: "#38bdf8", href: `mailto:${EMAIL}`, email: true },
  { key: "fiverr", label: "Fiverr", brand: "#1DBF73", href: "https://www.fiverr.com/saiful_global" },
  {
    key: "upwork",
    label: "Upwork",
    brand: "#14A800",
    href: "https://www.upwork.com/freelancers/~01b5da874ba7c7aa28",
  },
  { key: "github", label: "GitHub", brand: "#c4b5fd", href: "https://github.com/saiful-global" },
].filter((l) => l.href);

// footer category
const services = ["Figma to React", "Landing pages", "E-commerce frontends", "Business websites"];

const columns = [
  {
    title: "Navigate",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Skills", href: "/#skills" },
      { label: "Projects", href: "/#projects" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Projects",
    items: [
      { label: "Uomo", href: "/#projects" },
      { label: "Agenc", href: "/#projects" },
      { label: "CoreWave", href: "/#projects" },
      { label: "Nexcent", href: "/#projects" },
    ],
  },
  {
    title: "Services",
    items: services.map((label) => ({ label, href: "/#contact" })),
  },
  {
    title: "Get in touch",
    items: [
      { label: EMAIL, href: `mailto:${EMAIL}`, email: true },
      { label: PHONE, href: `tel:${PHONE}` },
      { label: "Bangladesh" }, // href নেই, তাই শুধু লেখা
    ],
  },
];

// moving text animation
const ticker = ["Open for freelance work", ...services, "Next.js", "Tailwind CSS", "Let's talk"];

// ===== বিশাল "SAIFUL" লেখার মাপ (Inter Black এর আসল মাপ থেকে হিসাব করা) =====
const VB_W = 1000;
const VB_H = 212;
const FONT_SIZE = 280.3;
const TEXT_X = -7.94;
const TEXT_LENGTH = 1015.5;
const BASELINE = 209;

/* ---------- icons ---------- */
function Brand({ d, viewBox = "0 0 24 24", className }) {
  return (
    <svg viewBox={viewBox} className={className} fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const icons = {
  facebook: (p) => <Brand d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" {...p} />,
  linkedin: (p) => <Brand d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" viewBox="0 0 128 128" {...p} />,
  whatsapp: (p) => <Brand d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" {...p} />,
  fiverr: (p) => <Brand d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" {...p} />,
  upwork: (p) => <Brand d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" {...p} />,
  github: (p) => <Brand d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" {...p} />,
  email: (p) => (
    <svg
      viewBox="0 0 24 24"
      className={p.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

// কম্পিউটারে Gmail, ফোনে mail app (mailto কম্পিউটারে প্রায়ই কিছুই করে না)
function isMobile() {
  return typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}
function onEmailClick(e) {
  if (!isMobile()) {
    e.preventDefault();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
}

const linkStyle =
  "text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function FooterLink({ item }) {
  if (!item.href) return <span className="text-white/65">{item.label}</span>;
  if (item.email)
    return (
      <a href={item.href} onClick={onEmailClick} className={`${linkStyle} break-all`}>
        {item.label}
      </a>
    );
  if (item.href.startsWith("/"))
    return (
      <Link href={item.href} className={linkStyle}>
        {item.label}
      </Link>
    );
  return (
    <a href={item.href} className={linkStyle}>
      {item.label}
    </a>
  );
}

export default function Footer() {
  const wordRef = useRef(null);
  const [shown, setShown] = useState(false);

  // বিশাল নামটা পর্দায় এলে নিচ থেকে উঠে আসে, একবারই
  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="relative overflow-hidden bg-black">
      <style>{`
        @keyframes footer-drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to   { transform: translate3d(70px, -40px, 0) scale(1.2); }
        }
        .footer-orb { animation: footer-drift 14s ease-in-out infinite alternate; }

        @keyframes footer-marquee { to { transform: translateX(-50%); } }
        .footer-ticker { animation: footer-marquee 45s linear infinite; }

        /* ফোন/ট্যাবলেটে hover নেই, তাই icon গুলো শুরু থেকেই নিজের রঙে */
        @media (hover: none) {
          .social-link { color: var(--brand) !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-orb, .footer-ticker { animation: none; }
        }
      `}</style>

      {/* background: image + সবসময় ভেসে বেড়ানো রঙিন আলো */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {FOOTER_IMAGE && (
          <Image
            src={FOOTER_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: FOOTER_IMAGE_POSITION }}
          />
        )}

        {/* ছবি থাকুক বা না থাকুক, এগুলো নড়তেই থাকে, আর কাচ এদের ঝাপসা করে দেখায় */}
        <div className="footer-orb absolute left-[5%] top-8 h-80 w-80 rounded-full bg-sky-500/30 blur-3xl mix-blend-screen" />
        <div
          className="footer-orb absolute right-[6%] top-20 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl mix-blend-screen"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="footer-orb absolute left-[40%] top-48 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl mix-blend-screen"
          style={{ animationDelay: "-9s" }}
        />

        {/* নিচের দিকে ধীরে কালো, যাতে বিশাল নামটা খাঁটি কালোর উপর বসে */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
      </div>

      <div className="relative">
        {/* কাচের প্যানেল */}
        <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
          <div className="relative rounded-3xl border border-white/15 bg-white/[0.08] px-6 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-transparent"
            />

            <div className="relative">
              {/* উপরের সারি: কথা + logo */}
              <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
                <p
                  className="text-4xl font-light tracking-tight text-white sm:text-5xl"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Thanks for stopping by.
                </p>

                <nav aria-label="Social and contact links">
                  <ul className="flex flex-wrap items-center justify-center gap-3">
                    {socials.map(({ key, label, brand, href, email }) => {
                      const Icon = icons[key];
                      return (
                        <li key={key}>
                          <a
                            href={href}
                            {...(email ? { onClick: onEmailClick } : { target: "_blank", rel: "noreferrer" })}
                            aria-label={label}
                            style={{ "--brand": brand }}
                            className="social-link flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-white/20 hover:text-[var(--brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                          >
                            <Icon className="h-6 w-6" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="my-10 h-px bg-white/15" />

              {/* category */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
                {columns.map((col) => (
                  <div key={col.title}>
                    <h3 className="text-sm font-semibold text-white">{col.title}</h3>
                    <ul className="mt-4 space-y-2.5 text-sm">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <FooterLink item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="my-10 h-px bg-white/15" />

              {/* bottom row */}
              <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/55 sm:flex-row">
                <p>
                  &copy; {new Date().getFullYear()} Saiful Islam. All rights reserved.
                </p>
                <p>Built with Next.js &amp; Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>

        {/* always moving text animation */}
        <div
          aria-hidden="true"
          className="mt-14 overflow-hidden border-y border-white/10 py-5 [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:mt-20"
        >
          <div className="footer-ticker flex w-max">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center">
                {ticker.map((text) => (
                  <li key={`${copy}-${text}`} className="flex items-center">
                    <span
                      className="px-6 text-2xl font-light text-white/70 sm:px-8 sm:text-3xl"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {text}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Big Name*/}
        <div ref={wordRef} className="mt-10 px-3 pb-2 sm:mt-14 sm:px-5 sm:pb-3">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="block h-auto w-full select-none"
            role="img"
            aria-label="Saiful"
          >
            <text
              aria-hidden="true"
              x={TEXT_X}
              y={BASELINE}
              fontSize={FONT_SIZE}
              fontWeight="900"
              textLength={TEXT_LENGTH}
              lengthAdjust="spacingAndGlyphs"
              fill="#ffffff"
              className={inter.className}
              style={{
                transform: shown ? "translateY(0)" : `translateY(${VB_H + 20}px)`,
                transition: "transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1)",
              }}
            >
              SAIFUL
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
