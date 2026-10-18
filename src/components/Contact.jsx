"use client";

import { useEffect, useRef, useState } from "react";

// ===== তোমার তথ্য: কিছু বদলাতে হলে শুধু এখানে বদলাও =====
const EMAIL = "saifulislambappi01@gmail.com";
const PHONE = "+8801530076509"; // একই নম্বর WhatsApp আর imo তেও
const PHONE_EXTRA = "+8801914592970";
const WHATSAPP = "8801530076509"; // wa.me এর জন্য, + ছাড়া
const FACEBOOK = "https://www.facebook.com/global.saiful";
const MESSENGER = "https://m.me/global.saiful";
const LINKEDIN = "https://www.linkedin.com/in/saiful-global/";
// ==========================================================

const WA_GREETING = encodeURIComponent("Hi Saiful, I'd like to talk about a website.");

/* ---------- icons ---------- */
function BrandIcon({ d, viewBox = "0 0 24 24", className }) {
  return (
    <svg viewBox={viewBox} className={className} fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const WhatsAppIcon = (p) => <BrandIcon d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" {...p} />;
const FacebookIcon = (p) => <BrandIcon d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" {...p} />;
const MessengerIcon = (p) => <BrandIcon d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13" {...p} />;
const LinkedInIcon = (p) => <BrandIcon d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" viewBox="0 0 128 128" {...p} />;

function Stroke({ className, children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
const MailIcon = (p) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Stroke>
);
const PhoneIcon = (p) => (
  <Stroke {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </Stroke>
);
const CopyIcon = (p) => (
  <Stroke {...p}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </Stroke>
);
const CheckIcon = (p) => (
  <Stroke {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Stroke>
);
const OpenIcon = (p) => (
  <Stroke {...p}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </Stroke>
);
const SendIcon = (p) => (
  <Stroke {...p}>
    <path d="m22 2-7 20-4-9-9-4z" />
    <path d="M22 2 11 13" />
  </Stroke>
);

/* ---------- ডেটা ---------- */
const rows = [
  {
    key: "email",
    label: "Email",
    value: EMAIL,
    Icon: MailIcon,
    tint: "#38bdf8",
    copy: EMAIL,
    links: [{ label: "Send email", Icon: OpenIcon, href: `mailto:${EMAIL}`, action: "email" }],
  },
  {
    key: "phone",
    label: "Phone, WhatsApp & imo",
    value: PHONE,
    Icon: WhatsAppIcon,
    tint: "#25D366",
    copy: PHONE,
    links: [
      { label: "Call", Icon: PhoneIcon, href: `tel:${PHONE}` },
      {
        label: "Open WhatsApp",
        Icon: WhatsAppIcon,
        color: "#128C7E",
        href: `https://wa.me/${WHATSAPP}?text=${WA_GREETING}`,
        external: true,
      },
    ],
  },
  {
    key: "phone2",
    label: "Extra mobile",
    value: PHONE_EXTRA,
    Icon: PhoneIcon,
    tint: "#fbbf24",
    copy: PHONE_EXTRA,
    links: [{ label: "Call", Icon: PhoneIcon, href: `tel:${PHONE_EXTRA}` }],
  },
  {
    key: "facebook",
    label: "Facebook",
    value: "facebook.com/global.saiful",
    Icon: FacebookIcon,
    tint: "#1877F2",
    copy: FACEBOOK,
    links: [
      { label: "Open Facebook", Icon: OpenIcon, href: FACEBOOK, external: true },
      { label: "Open Messenger", Icon: MessengerIcon, color: "#0084ff", href: MESSENGER, external: true },
    ],
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/saiful-global",
    Icon: LinkedInIcon,
    tint: "#0A66C2",
    copy: LINKEDIN,
    links: [{ label: "Open LinkedIn", Icon: OpenIcon, href: LINKEDIN, external: true }],
  },
];

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    cta: "Send on WhatsApp",
    hint: "Opens WhatsApp with your message ready to send.",
  },
  {
    id: "email",
    label: "Email",
    Icon: MailIcon,
    cta: "Open email",
    hint: "Opens Gmail on a computer, or your email app on a phone, with the message filled in.",
  },
  {
    id: "messenger",
    label: "Messenger",
    Icon: MessengerIcon,
    cta: "Copy & open Messenger",
    hint: "Messenger can't pre-fill text, so your message is copied. Just paste it in the chat.",
  },
];

/* ---------- clipboard ---------- */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

/* ---------- email: কম্পিউটারে Gmail, ফোনে mail app ---------- */
function isMobile() {
  return typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}
function gmailCompose(subject = "", body = "") {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ---------- UI পিস ---------- */
function Glass({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-3xl border border-white/15 bg-white/[0.08] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl sm:p-7 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-transparent"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

const iconBtn =
  "inline-flex h-10 w-10 items-center justify-center rounded-xl transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function Row({ row, copied, onCopy }) {
  const { label, value, Icon, tint, links } = row;
  return (
    <div className="flex flex-wrap items-center gap-x-3.5 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 transition hover:bg-white/10 sm:p-4">
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10"
        style={{ color: tint }}
      >
        <Icon className="h-5 w-5" />
      </span>

      <div className="min-w-0 flex-1 basis-40">
        <p className="text-xs text-white/55">{label}</p>
        <p className="break-all text-base font-medium text-white sm:text-lg">{value}</p>
      </div>

      {/* ডান কোণে, পাশাপাশি: copy হালকা, open সাদা */}
      <div className="ml-auto flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => onCopy(row)}
          aria-label={`Copy ${label}`}
          title={copied ? "Copied" : "Copy"}
          className={`${iconBtn} ${
            copied ? "bg-emerald-400 text-black" : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {copied ? <CheckIcon className="h-[18px] w-[18px]" /> : <CopyIcon className="h-[18px] w-[18px]" />}
        </button>

        {links.map(({ label: l, Icon: LIcon, href, external, color, action }) => (
          <a
            key={l}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            onClick={
              action === "email"
                ? (e) => {
                    if (!isMobile()) {
                      e.preventDefault();
                      window.open(gmailCompose(), "_blank", "noopener,noreferrer");
                    }
                  }
                : undefined
            }
            aria-label={l}
            title={l}
            className={`${iconBtn} bg-white text-black hover:bg-emerald-300`}
            style={color ? { color } : undefined}
          >
            <LIcon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [announce, setAnnounce] = useState("");
  const timer = useRef(null);

  const [channel, setChannel] = useState("whatsapp");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async (row) => {
    const ok = await copyText(row.copy);
    clearTimeout(timer.current);
    if (ok) {
      setCopiedKey(row.key);
      setAnnounce(`${row.label} copied`);
      timer.current = setTimeout(() => setCopiedKey(null), 1800);
    } else {
      setAnnounce("Couldn't copy automatically. Please select and copy it by hand.");
    }
  };

  const current = channels.find((c) => c.id === channel);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const who = name.trim() ? `Hi Saiful, I'm ${name.trim()}.` : "Hi Saiful,";
    const text = `${who}\n\n${message.trim()}`;

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStatus("WhatsApp opened in a new tab.");
    } else if (channel === "email") {
      const subject = "Website project inquiry";
      if (isMobile()) {
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(text)}`;
        setStatus("Your email app should open now.");
      } else {
        window.open(gmailCompose(subject, text), "_blank", "noopener,noreferrer");
        setStatus("Gmail opened in a new tab.");
      }
    } else {
      const ok = copyText(text); // await করি না, নইলে popup আটকে যেতে পারে
      window.open(MESSENGER, "_blank", "noopener,noreferrer");
      setStatus((await ok) ? "Message copied. Paste it in Messenger." : "Messenger opened. Please type your message there.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950/70 px-6 py-28 backdrop-blur-sm sm:py-32"
    >
      <style>{`
        @keyframes contact-drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to   { transform: translate3d(48px, -36px, 0) scale(1.15); }
        }
        .contact-orb { animation: contact-drift 16s ease-in-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) { .contact-orb { animation: none; } }
      `}</style>

      {/* কাচের পেছনের রঙিন আলো, যাতে blur চোখে পড়ে */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="contact-orb absolute left-[6%] top-16 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
        <div
          className="contact-orb absolute bottom-10 right-[6%] h-80 w-80 rounded-full bg-violet-500/30 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="contact-orb absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"
          style={{ animationDelay: "-11s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            className="text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Message me directly, or copy any detail and reach out your own way.
          </p>
          <p className="mt-5 inline-flex items-center gap-3 text-white/70">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open for freelance work
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* বাঁয়ে: সব যোগাযোগের তথ্য, প্রতিটায় copy */}
          <Glass>
            <h3 className="text-xl font-medium text-white">Contact details</h3>
            <p className="mt-1 text-sm text-white/60">
              Copy any detail, or open it directly.
            </p>
            <div className="mt-5 space-y-3">
              {rows.map((row) => (
                <Row
                  key={row.key}
                  row={row}
                  copied={copiedKey === row.key}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          </Glass>

          {/* ডানে: সরাসরি message */}
          <Glass>
            <h3 className="text-xl font-medium text-white">Send a message</h3>
            <p className="mt-1 text-sm text-white/60">Pick where you want to send it.</p>

            <div className="mt-5 grid grid-cols-3 gap-1 rounded-full bg-white/10 p-1">
              {channels.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setChannel(id);
                    setStatus("");
                  }}
                  aria-pressed={channel === id}
                  className={`flex items-center justify-center gap-2 rounded-full px-2 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    channel === id ? "bg-white text-black" : "text-white/70 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{label}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSend} className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm text-white/70">
                  Your name <span className="text-white/40">(optional)</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  autoComplete="name"
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder-white/35 outline-none transition focus:border-white/50 focus:bg-white/10"
                  placeholder="e.g. Rahim"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm text-white/70">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={1000}
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder-white/35 outline-none transition focus:border-white/50 focus:bg-white/10"
                  placeholder="Tell me about your project or idea…"
                />
              </div>

              <button
                type="submit"
                disabled={!message.trim()}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-black transition hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
              >
                <SendIcon className="h-5 w-5" />
                {current.cta}
              </button>

              <p className="text-sm text-white/55">{current.hint}</p>
              {status && <p className="text-sm font-medium text-emerald-300">{status}</p>}
            </form>
          </Glass>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {announce}
      </p>
    </section>
  );
}
