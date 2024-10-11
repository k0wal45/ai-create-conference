import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Quotes from "@/components/Quotes/Quotes";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Quotes />
      <div className="h-screen"></div>
    </main>
  );
}
