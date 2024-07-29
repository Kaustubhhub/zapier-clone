import { Appbar } from "@/components/Appbar";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  return (
    <main>
      <Appbar />
      <div className="pt-20">
        <Hero />
      </div>
      <div className="pt-6">
        <HeroVideo />
      </div>
    </main>
  );
}
