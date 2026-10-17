import Image from "next/image";

// A small, quiet work-history section (server component, no JavaScript needed).
// To add another job, just add an object to the list below (newest first).
//
// logo:   path of the company logo inside the public folder, e.g. "/Experience/Pusti Logo.png".
//         The path must match the real folder and file name exactly (including capital letters
//         and spaces), because the live site (Linux) is case-sensitive.
//         If it is empty, no logo is shown.
// href:   clicking the company name opens this website in a new tab.
//         If it is not set, the name is plain text.
// brand:  optional product/brand name shown faintly after the company name.
const experiences = [
  {
    role: "Jr. Clerk",
    company: "T.K Group of Industries",
    brand: "PUSTI",
    href: "https://tkgroupbd.com/",
    logo: "/Experience/pusti-logo.png",
    period: "2023 – 2025",
    duration: "2 years",
    summary:
      "Operated a large, computer-operated 50-ton weighbridge using TS Work weighing software, where the weighing data was kept. Did the calculations in MS Excel.",
    skills: ["TS Work (weighing software)", "MS Excel"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 bg-neutral-950/70 px-6 py-12 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Same heading style as the Education section */}
        <h2
          className="mb-6 text-center text-3xl font-light tracking-tight text-white/80 sm:text-4xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Experience
        </h2>

        {/* Small glass container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
          />

          <ul className="relative divide-y divide-white/10">
            {experiences.map(
              ({ role, company, brand, href, logo, period, duration, summary, skills }) => (
                <li key={`${company}-${period}`} className="px-4 py-3.5 sm:px-5">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <p className="text-sm text-white/90">{role}</p>

                      {/* Company: logo + name (the name links to their website) */}
                      <div className="mt-0.5 flex items-center gap-1.5">
                        {logo && (
                          <Image
                            // Spaces in the file name are encoded so the browser always finds the file
                            src={logo.replaceAll(" ", "%20")}
                            alt=""
                            width={20}
                            height={20}
                            unoptimized
                            className="h-5 w-5 shrink-0 rounded bg-white/90 object-contain p-0.5"
                          />
                        )}
                        <p className="text-xs text-white/55">
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${company} website (opens in a new tab)`}
                              className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                              {company}
                            </a>
                          ) : (
                            company
                          )}
                          {brand && <span className="text-white/35"> · {brand}</span>}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-white/45 sm:text-right">
                      {period}
                      {duration && <span className="text-white/30"> · {duration}</span>}
                    </p>
                  </div>

                  <p className="mt-2 max-w-3xl text-xs leading-relaxed text-white/60">{summary}</p>

                  {skills?.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/60"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
