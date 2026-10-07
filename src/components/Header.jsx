import Image from "next/image";
import Link from "next/link";

const projects = ["Uomo", "Agenc", "CoreWave", "Nexcent"];

export default function Header() {
  return (
    <header className="pointer-events-none fixed top-4 left-0 z-50 flex w-full justify-center px-4">
      <nav className="pointer-events-auto flex items-center gap-15 rounded-full border border-white/10 bg-white/10 px-6 py-2 text-white shadow-lg backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full"
        >
          <Image src="/saiful.jpeg" alt="Logo" width={36} height={36} className="rounded-full"></Image>
        </Link>

        {/* Dropdown */}
        <div className="group relative">
          <button className="relative overflow-hidden rounded-full px-6 py-2 transition group-hover:text-white">
            {/* sliding background */}
            <span className="absolute inset-x-0 bottom-0 h-0 bg-white/30 transition-all duration-500 group-hover:h-full" />
            <span className="relative">Projects</span>
          </button>

          <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
            <ul className="w-48 rounded-2xl border border-white/10 bg-neutral-900/80 p-2 backdrop-blur-xl">
              {projects.map((name) => (
                <li key={name}>
                  <Link
                    href="/projects"
                    className="block rounded-xl px-4 py-2 transition hover:bg-white/10 hover:text-sky-400"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li className="mt-1 border-t border-white/10 pt-1">
                <Link
                  href="/projects"
                  className="block rounded-xl px-4 py-2 transition hover:bg-white/10 hover:text-sky-400"
                >
                  All Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <a href="#about" className="group relative overflow-hidden rounded-full px-6 py-2 transition hover:text-white">
          <span className="absolute inset-x-0 bottom-0 h-0 bg-white/30 transition-all duration-500 group-hover:h-full" />
          <span className="relative">About</span>
        </a>
        
        <a href="#contact" className="group relative overflow-hidden rounded-full px-6 py-2 transition hover:text-white">
          <span className="absolute inset-x-0 bottom-0 h-0 bg-white/30 transition-all duration-500 group-hover:h-full" />
          <span className="relative">Contact</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/saiful-global"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition hover:text-sky-400"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
      </nav>
    </header>
  );
}