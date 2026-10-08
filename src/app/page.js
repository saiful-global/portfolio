import Hero from "@/components/Hero";

export default function Home() {

  return (
    <>
    <Hero></Hero>
      <p>Mobile: +88015300-76509 (<span className="text-green-600">Whatsapp</span> / <span className="text-blue-400">imo</span>)</p>
      <p className="text-gray-400 hover:text-white transition-all duration-300">Mobile: +88019145-92970</p>
      <br />
      <p className="font-bold">Github: <a href="https://github.com/saiful-global" className="text-blue-500">https://github.com/saiful-global</a></p>
      <p className="font-bold opacity-50">Linkedin: <a href="https://www.linkedin.com/in/saiful-global" className="text-blue-600">https://www.linkedin.com/in/saiful-global</a></p>
      <br />
      <p>Email: saifulislambappi01@gmail.com</p>
      <p className="text-gray-400 hover:text-white transition-all duration-300">Email: saifulislambappi02@gmail.com</p>

    </>
  );
}
