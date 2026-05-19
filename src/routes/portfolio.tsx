import { createFileRoute } from "@tanstack/react-router";
import hero1 from "@/assets/kenchi/hero1.jpg";
import hero2 from "@/assets/kenchi/hero2.jpg";
import hero3 from "@/assets/kenchi/hero3.jpg";
import hero4 from "@/assets/kenchi/hero4.jpg";
import hero5 from "@/assets/kenchi/hero5.jpg";
import hero6 from "@/assets/kenchi/hero6.jpg";
import hero7 from "@/assets/kenchi/hero7.jpg";
import hero8 from "@/assets/kenchi/hero8.jpg";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({ meta: [{ title: "Our Portfolio | Kenchi Lifestyle Gardens" }, { name: "description", content: "Explore our gallery of paving, feature stone, decking, lighting and complete garden transformations." }] }),
});

const items = [
  { img: hero1, title: "Paving Gallery" },
  { img: hero2, title: "Feature Stone" },
  { img: hero3, title: "Decking" },
  { img: hero4, title: "Garden Design" },
  { img: hero5, title: "Lighting & Features" },
  { img: hero6, title: "Privacy Screens" },
  { img: hero7, title: "Pool Surrounds" },
  { img: hero8, title: "Outdoor Living" },
];

function Portfolio() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-10">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <figure key={it.title} className="group relative overflow-hidden rounded-sm border border-border">
            <img src={it.img} alt={it.title} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 font-serif italic text-xl">
              {it.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}