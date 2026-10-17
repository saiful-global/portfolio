import Image from "next/image";

// A small, quiet info section: for people who want to know, not meant to grab attention.
// To add another entry, just add an object to the list below.
//
// logo: put the institution's logo in public/education/ and set the path,
//       e.g. "/education/creative-it.png" (square, 64x64px or larger, lowercase file name).
//       If it is empty, no logo is shown.
// href: clicking the institution name opens this website in a new tab.
//       If it is not set, the name is plain text.
const items = [
  {
    label: "Course",
    title: "Frontend Development with React",
    place: "Creative IT Institute",
    href: "https://www.creativeitinstitute.com/",
    logo: "/educationAndTraining/Creative It Institute Logo.png",
    note: "8 months",
  },
  {
    label: "Education",
    title: "Business Studies",
    place: "Government Shaheed Suhrawardy College, Dhaka",
    href: "https://gssc.college.gov.bd/",
    logo: "/educationAndTraining/Govt Shahid Suhrawardi College Logo.png",
    faint: "HSC-2024",
  },
  {
    label: "Learning",
    title: "Self-taught",
    place: "I learn by myself, and can pick up new things when a project needs them.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 bg-neutral-950/70 px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Same heading font as the other sections, just smaller */}
        <h2
          className="mb-6 text-center text-3xl font-light tracking-tight text-white/80 sm:text-4xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Education &amp; Certification
        </h2>

        {/* Small glass container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
          />

          <ul className="relative grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {items.map(({ label, title, place, href, logo, note, faint }) => (
              <li key={label} className="px-5 py-4">
                <p className="text-[11px] text-white/35">{label}</p>
                <p className="mt-1 text-sm text-white/85">
                  {title}
                  {note && <span className="text-white/45"> · {note}</span>}
                </p>

                {/* Institution: logo + name (the name links to their website) */}
                <div className="mt-1 flex items-start gap-2">
                  {logo && (
                    <Image
                      src={logo}
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                      className="mt-px h-5 w-5 shrink-0 rounded bg-white/90 object-contain p-0.5"
                    />
                  )}
                  <p className="text-xs leading-relaxed text-white/50">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${place} website (opens in a new tab)`}
                        className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {place}
                      </a>
                    ) : (
                      place
                    )}
                    {faint && <span className="ml-1.5 text-[11px] text-white/25">{faint}</span>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
