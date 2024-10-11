import About from "@/components/About/About";
import Agenda from "@/components/Agenda/Agenda";
import AllSpeakers from "@/components/AllSpeakers/AllSpeakers";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Quotes from "@/components/Quotes/Quotes";
import TopSpeakers from "@/components/TopSpeakers/TopSpeakers";
import Where from "@/components/Where/Where";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Quotes />
      <TopSpeakers />
      <AllSpeakers />
      <Agenda />
      <Pricing />
      <Where />
    </main>
  );
}
