import Image from "next/image";
import ScrollIndicator from "./common/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
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
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center
       gap-8 px-6 pt-24 text-white md:flex-row md:justify-between">
        {/* left: text */}
        <div className="flex flex-col gap-2 text-center md:text-left pb-30">
          <h3 className="text-2xl text-yellow-600">Hello,</h3>
          <p className="text-2xl text-yellow-600">________ I&apos;m</p>
          <p className="text-8xl section-title font-bold italic pb-5">Saiful Islam <span className="text-white/40">Bappi</span></p>

          <div className="bg-linear-to-r from-black py-1">
            <h1 className="text-2xl text-gray-400 pl-5 pb-1">Professional <span className=" text-shimmer">Web Developer</span></h1>
            <p className="text-xl pl-5 text-gray-400"> <span className="animate-pulse text-white">Frontend</span> Specialist</p>
          </div>
        </div>

        {/* right: image */}
        <Image
          src="/saiful.jpeg"
          alt="Saiful Islam"
          width={400}
          height={400}
          className="h-48 w-48 animate-hero object-cover sm:h-64 sm:w-64 md:h-96 md:w-96"
        />
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ScrollIndicator />
      </div>
      
    </section>
  );
}