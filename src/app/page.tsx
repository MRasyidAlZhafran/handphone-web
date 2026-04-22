import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { ScreenFeature } from "@/components/ScreenFeature";
import { GalaxyAI } from "@/components/GalaxyAI";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <ScreenFeature />
      <GalaxyAI />
      <Gallery />
      <Footer />
    </main>
  );
}
