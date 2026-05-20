import { useEffect, useState } from "react";

export interface GallerySlide {
  src: string;
  caption: string;
}

export function GallerySlider({ slides, autoPlayMs = 5000 }: { slides: GallerySlide[]; autoPlayMs?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), autoPlayMs);
    return () => clearInterval(t);
  }, [slides.length, autoPlayMs]);
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
        {slides.length > 1 && (
          <>
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
          </>
        )}
      </div>
      {slides.length > 1 && (
        <div className="bg-secondary border-y border-border">
          <div className="mx-auto max-w-6xl px-2 py-2 grid grid-cols-4 md:grid-cols-8 gap-2">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show ${s.caption}`}
                className={`relative aspect-video overflow-hidden rounded-sm border-2 transition ${idx === i ? "border-foreground" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <img src={s.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}