import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GallerySlider, type GallerySlide } from "@/components/GallerySlider";
import hero1 from "@/assets/kenchi/hero1.jpg";
import hero2 from "@/assets/kenchi/hero2.jpg";
import hero3 from "@/assets/kenchi/hero3.jpg";
import hero4 from "@/assets/kenchi/hero4.jpg";
import hero5 from "@/assets/kenchi/hero5.jpg";
import hero6 from "@/assets/kenchi/hero6.jpg";
import hero7 from "@/assets/kenchi/hero7.jpg";
import hero8 from "@/assets/kenchi/hero8.jpg";

interface Gallery {
  title: string;
  description: string;
  slides: GallerySlide[];
}

const GALLERIES: Record<string, Gallery> = {
  paving: {
    title: "Paving",
    description:
      "From sandstone driveways to travertine entertaining areas, every Kenchi paving job is set on a properly engineered base for a finish that lasts.",
    slides: [
      { src: hero4, caption: "Driveways & Pathways" },
      { src: hero7, caption: "Pool Surround Paving" },
      { src: hero8, caption: "Entertaining Areas" },
      { src: hero1, caption: "Garden Path Detail" },
    ],
  },
  decking: {
    title: "Decking",
    description:
      "Custom-built hardwood and composite decks, designed to blend seamlessly with your home and the way you live outdoors.",
    slides: [
      { src: hero3, caption: "Custom Hardwood Decking" },
      { src: hero8, caption: "Multi-level Outdoor Living" },
      { src: hero6, caption: "Privacy Screens & Deck" },
      { src: hero5, caption: "Lit Deck Feature" },
    ],
  },
  "feature-stone": {
    title: "Feature Stone",
    description:
      "Statement stone walls, cladding and natural stone features that anchor a garden and give it real presence.",
    slides: [
      { src: hero2, caption: "Feature Stone Wall" },
      { src: hero1, caption: "Stone in Landscape" },
      { src: hero5, caption: "Stone with Lighting" },
      { src: hero7, caption: "Pool & Stone Surround" },
    ],
  },
};

export const Route = createFileRoute("/portfolio/$category")({
  beforeLoad: ({ params }) => {
    if (!GALLERIES[params.category]) throw notFound();
  },
  component: GalleryPage,
  head: ({ params }) => {
    const g = params && GALLERIES[params.category];
    const title = g ? `${g.title} Gallery | Kenchi Lifestyle Gardens` : "Gallery | Kenchi Lifestyle Gardens";
    const description = g?.description ?? "Browse our landscaping gallery.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(g ? [{ property: "og:image", content: g.slides[0].src as unknown as string }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif italic text-4xl mb-4">Gallery not found</h1>
      <p className="text-muted-foreground mb-6">That portfolio category doesn't exist.</p>
      <Link to="/portfolio" className="underline">Back to Portfolio</Link>
    </section>
  ),
});

function GalleryPage() {
  const { category } = Route.useParams();
  const gallery = GALLERIES[category];

  return (
    <>
      <GallerySlider slides={gallery.slides} />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <span className="mx-2">/</span>
          <span>{gallery.title}</span>
        </p>
        <h1 className="font-serif italic text-5xl mb-6">{gallery.title}</h1>
        <p className="text-muted-foreground leading-relaxed mb-10">{gallery.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gallery.slides.map((s, idx) => (
            <figure key={idx} className="overflow-hidden rounded-sm border border-border">
              <img src={s.src} alt={s.caption} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="px-3 py-2 text-sm text-muted-foreground">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/quote" className="inline-block bg-foreground text-background px-6 py-3 rounded-sm hover:opacity-90 transition">Get a quote for your {gallery.title.toLowerCase()} project</Link>
        </div>
      </section>
    </>
  );
}