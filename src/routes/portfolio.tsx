import { createFileRoute, Link } from "@tanstack/react-router";
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

const categories = [
  { slug: "paving", img: hero4, title: "Paving", blurb: "Driveways, pathways and entertaining areas." },
  { slug: "decking", img: hero3, title: "Decking", blurb: "Custom hardwood and composite decks." },
  { slug: "feature-stone", img: hero2, title: "Feature Stone", blurb: "Statement walls and natural stone work." },
  { slug: "artificial-turf", img: hero5, title: "Artificial Turf", blurb: "Lush, low-maintenance synthetic lawns." },
  { slug: "concreting-driveways", img: hero6, title: "Concreting & Driveways", blurb: "Durable concrete finishes and custom driveways." },
  { slug: "daycares-playgrounds", img: hero7, title: "Daycares & Playgrounds", blurb: "Safe, vibrant outdoor play spaces." },
  { slug: "concrete-spraying", img: hero1, title: "Concrete Spraying", blurb: "Decorative spray-on concrete for pools, paths and patios." },
  { slug: "fire-pits", img: hero8, title: "Fire Pits", blurb: "Custom-built fire features for year-round outdoor living." },
  { slug: "garden-edging", img: hero2, title: "Garden Edging", blurb: "Defined borders that keep garden beds neat and tidy." },
  { slug: "gazebos", img: hero3, title: "Gazebos", blurb: "Elegant outdoor structures for shade and entertaining." },
  { slug: "herb-veggie-beds", img: hero1, title: "Herb & Veggie Garden Beds", blurb: "Raised planter boxes for productive home gardens." },
  { slug: "lighting", img: hero5, title: "Lighting", blurb: "Atmospheric outdoor lighting and garden feature lights." },
  { slug: "outdoor-showers", img: hero6, title: "Outdoor Showers", blurb: "Stylish poolside and garden showers for coastal living." },
  { slug: "pathways", img: hero4, title: "Pathways", blurb: "Stepping stone and paved garden walkways." },
  { slug: "pool-surrounds", img: hero7, title: "Pool Surrounds", blurb: "Non-slip paving and decking around pools." },
  { slug: "pots", img: hero8, title: "Pots", blurb: "Statement planters and decorative garden pots." },
];

const extras = [
  { img: hero1, title: "Garden Design" },
  { img: hero8, title: "Lighting & Features" },
];

function Portfolio() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-10">Our Portfolio</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">Browse our featured categories or scroll for more work from across the Gold Coast.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to="/portfolio/$category"
            params={{ category: c.slug }}
            className="group relative block overflow-hidden rounded-sm border border-border"
          >
            <img src={c.img} alt={c.title} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-4">
              <p className="font-serif italic text-2xl">{c.title}</p>
              <p className="text-sm text-muted-foreground">{c.blurb}</p>
              <p className="text-xs uppercase tracking-wider mt-2 opacity-80 group-hover:opacity-100">View gallery →</p>
            </div>
          </Link>
        ))}
      </div>
      <h2 className="font-serif italic text-3xl mb-6">More of our work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {extras.map((it) => (
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