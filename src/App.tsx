import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { MintSection } from "./components/MintSection";
import { Gallery } from "./components/Gallery";
import { Roadmap } from "./components/Roadmap";
import { Team } from "./components/Team";
import { Faq } from "./components/Faq";
import { BuiltWith } from "./components/BuiltWith";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <MintSection />
        <Gallery />
        <Roadmap />
        <Team />
        <Faq />
        <BuiltWith />
      </main>
      <Footer />
    </div>
  );
}
