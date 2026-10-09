export default function ScrollIndicator() {
  return (
    <a
      href="#about"
      aria-label="Scroll down"
      className="flex flex-col items-center gap-2"
    >
      <span className="flex h-9 w-[22px] justify-center rounded-[11px] border-[1.5px] border-white pt-1.5">
        <span
          className="scroll-dot h-2 w-[3px] rounded-sm bg-yellow-400"
          style={{ animation: "scroll-dot 2s ease-in-out infinite" }}
        />
      </span>
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-white">
        Scroll
      </span>
    </a>
  );
}