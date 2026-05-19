import { useEffect, useState } from "react";
import hero1 from "@/assets/kenchi/hero1.jpg";
import hero2 from "@/assets/kenchi/hero2.jpg";
import hero3 from "@/assets/kenchi/hero3.jpg";
import hero4 from "@/assets/kenchi/hero4.jpg";
import hero5 from "@/assets/kenchi/hero5.jpg";
import hero6 from "@/assets/kenchi/hero6.jpg";
import hero7 from "@/assets/kenchi/hero7.jpg";
import hero8 from "@/assets/kenchi/hero8.jpg";

const slides = [
  { src: hero1, caption: "Let Kenchi create your Lifestyle Garden" },
  { src: hero2, caption: "Feature Stone Walls" },
  { src: hero3, caption: "Custom Decking" },
  { src: hero4, caption: "Paving & Pathways" },
  { src: hero5, caption: "Lighting & Water Features" },
  { src: hero6, caption: "Privacy Screens" },
  { src: hero7, caption: "Pool Surrounds" },
  { src: hero8, caption: "Complete Outdoor Living" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((p) => (p + d + slides.length) % slides.length);

  return (
    <section className="relative bg-background">
      <div className="relative aspect-[16/7] w-full overflow-hidden">
        {slides.map((s, idx) => (
          <img
            key={idx}
            src={s.src}
            alt={s.caption}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-md">
          <p className="font-serif italic text-4xl md:text-6xl text-foreground drop-shadow-lg leading-tight">
            {slides[i].caption}
          </p>
        </div>
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-background/40 hover:bg-background/70 text-foreground text-2xl rounded-full"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-background/40 hover:bg-background/70 text-foreground text-2xl rounded-full"
        >
          ›
        </button>
      </div>
      <div className="bg-secondary border-y border-border">
        <div className="mx-auto max-w-6xl px-2 py-2 grid grid-cols-4 md:grid-cols-8 gap-2">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`relative aspect-video overflow-hidden rounded-sm border-2 transition ${idx === i ? "border-foreground" : "border-transparent opacity-70 hover:opacity-100"}`}
            >
              <img src={s.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}