import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/hero.webp"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Hero text</h1>
      </div>
    </section>
  );
}