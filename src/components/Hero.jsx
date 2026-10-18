import Image from "next/image";
import ScrollIndicator from "./common/ScrollIndicator";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-svh w-full overflow-x-clip md:h-screen">
      {/* background image */}
      <Image
        src="/hero.webp"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center
       gap-6 px-6 pb-24 pt-28 text-white md:h-full md:min-h-0 md:flex-row md:justify-between md:gap-8 md:pb-0 md:pt-24">
        {/* left: text */}
        <div className="flex flex-col gap-2 text-center md:text-left md:pb-30">
          <h3 className="text-lg text-yellow-600 sm:text-2xl">Hello,</h3>
          <p className="text-lg text-yellow-600 sm:text-2xl">________ I&apos;m</p>
          <p className="text-4xl min-[400px]:text-5xl sm:text-6xl md:text-8xl section-title font-bold italic pb-3 md:pb-5">Saiful Islam <span className="text-white/40">Bappi</span></p>

          <div className="bg-linear-to-r from-black py-1">
            <h1 className="text-base text-gray-400 pl-5 pb-1 sm:text-xl md:text-2xl">Professional <span className=" text-shimmer">Web Developer</span></h1>
            <p className="text-sm pl-5 text-gray-400 sm:text-lg md:text-xl"> <span className="animate-pulse text-white">Frontend</span> Specialist</p>
          </div>
        </div>

        {/* right: image */}
        <Image
          src="/saiful.jpeg"
          alt="Saiful Islam"
          width={400}
          height={400}
          className="h-40 w-40 animate-hero object-cover min-[400px]:h-48 min-[400px]:w-48 sm:h-64 sm:w-64 md:h-96 md:w-96"
        />
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ScrollIndicator />
      </div>
      
    </section>
  );
}
