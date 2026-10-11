import Image from "next/image";

/*
  1. logo is inside ---  public/skills/ folder (lowercase, e.g. - react.svg)
  2. write src like: "/skills/react.svg"
  3. name দিলে hover এ নাম দেখাবে। name আর src দুটোই ফাঁকা মানে খালি slot।
  4. if every slot full than convert ---  SHOW_EMPTY_SLOTS = false ।
*/
const SHOW_EMPTY_SLOTS = true;
const MAX_VISIBLE = 25; // এর বেশি দিলে শেষে "+N" দেখাবে

const skills = [
  { name: "React", src: "/skills/react.svg" },
  { name: "Next.js", src: "/skills/nextjs.svg" },
  { name: "Tailwind CSS", src: "/skills/tailwind.svg" },
  { name: "Figma", src: "/skills/figma.svg" },
  { name: "JavaScript", src: "/skills/javascript.svg" },
  { name: "HTML", src: "/skills/html.svg" },
  { name: "CSS", src: "/skills/css.svg" },
  { name: "Git", src: "/skills/git.svg" },
  { name: "GitHub", src: "/skills/github.svg" },
  { name: "Vercel", src: "/skills/vercel.svg" },
  { name: "Netlify", src: "/skills/netlify.svg" },
  { name: "Bootstrap", src: "/skills/bootstrap.svg" },
  { name: "Headless UI", src: "/skills/headless-ui.svg" },
  { name: "React Router", src: "/skills/react-router.svg" },
  { name: "Redux Toolkit", src: "/skills/redux.svg" },
  { name: "Zustand", src: "/skills/zustand.svg" },
  { name: "Swiper", src: "/skills/swiper.svg" },
  { name: "Firebase", src: "/skills/firebase.svg" },
  { name: "Vite", src: "/skills/vite.svg" },
  { name: "Node.js", src: "/skills/nodejs.svg" },
  { name: "npm", src: "/skills/npm.svg" },
  { name: "Axios", src: "/skills/axios.svg" },
  { name: "Font Awesome", src: "/skills/font-awesome.svg" },
  { name: "Google Fonts", src: "/skills/google-fonts.svg" },
  { name: "Canva", src: "/skills/canva.svg" },
  { name: "", src: "" },
  { name: "", src: "" },
  { name: "", src: "" },
  { name: "", src: "" },
  { name: "", src: "" },
];

const gradients = [
  "from-fuchsia-500 to-orange-400",
  "from-sky-400 to-indigo-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-rose-500",
  "from-violet-500 to-pink-500",
];

const size = "h-14 w-14 sm:h-16 sm:w-16";
const overlap = "-mr-3 sm:-mr-4";

function initials(name) {
  const words = name.split(/[\s.]+/).filter(Boolean);
  return (words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2)).toUpperCase();
}

function Tooltip({ children }) {
  return (
    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-xs font-medium text-black opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
      {children}
    </span>
  );
}

function Avatar({ skill, index }) {
  const base = `${size} ${overlap} rounded-full border-[3px] border-neutral-900`;

  // empty slot
  if (!skill.name && !skill.src) {
    return SHOW_EMPTY_SLOTS ? (
      <li aria-hidden="true" className={`${base} border-dashed border-white/20 bg-white/5`} />
    ) : null;
  }

  return (
    <li className={`group relative transition-transform duration-200 hover:z-20 hover:-translate-y-1.5 hover:scale-110 focus-within:z-20 focus-within:-translate-y-1.5 focus-within:scale-110 ${overlap}`}>
      <button
        type="button"
        aria-label={skill.name}
        className={`${size} block overflow-hidden rounded-full border-[3px] border-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
      >
        {skill.src ? (
          <Image
            src={skill.src}
            alt=""
            width={64}
            height={64}
            unoptimized
            className="h-full w-full bg-white object-contain p-2.5"
          />
        ) : (
          <span
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br text-lg font-bold text-white ${
              gradients[index % gradients.length]
            }`}
          >
            {initials(skill.name)}
          </span>
        )}
      </button>
      {skill.name && <Tooltip>{skill.name}</Tooltip>}
    </li>
  );
}

export default function Skills() {
  const visible = skills.slice(0, MAX_VISIBLE);
  const extra = skills.length - visible.length;

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 bg-neutral-950/70 px-6 py-28 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="text-5xl font-light tracking-tight text-white sm:text-6xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Tools I work with
        </h2>

        <ul className="mt-16 flex flex-wrap justify-center gap-y-5 pr-3 sm:pr-4">
          {visible.map((skill, i) => (
            <Avatar key={i} skill={skill} index={i} />
          ))}

          {extra > 0 && (
            <li
              className={`${size} ${overlap} flex items-center justify-center rounded-full border-[3px] border-neutral-900 bg-neutral-800 text-sm font-semibold text-white/80`}
            >
              +{extra}
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
