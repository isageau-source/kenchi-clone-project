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
  "artificial-turf": {
    title: "Artificial Turf",
    description:
      "Kenchi offers a variety of high quality Australian made and locally sourced artificial turf for all your landscaping needs. We use 25–40mm stitched pile for installations around pools and yards, and offer fine grade turf for custom putting green and cricket pitch solutions. Put your feet up and your mower away!",
    slides: [
      { src: "https://kenchi.com.au/static/uploads/images/dsc-0042-wfinfxuqrghd.JPG?mode=max&upscale=false&width=1400", caption: "25mm Artificial Pool Surrounds" },
      { src: "https://kenchi.com.au/static/uploads/images/dsc-0054-wfhqyxvuareo.JPG?mode=max&upscale=false&width=1400", caption: "Backyard Synthetic Lawn" },
      { src: "https://kenchi.com.au/static/uploads/images/dsc-0017-wfsnrhmusgnc.JPG?mode=max&upscale=false&width=1400", caption: "Premium Turf Install" },
      { src: "https://kenchi.com.au/static/uploads/images/dsc-0061-wftxqvftwftp.JPG?mode=max&upscale=false&width=1400", caption: "Pool Surround Turf" },
      { src: "https://kenchi.com.au/static/uploads/images/20180426-123311-wfdukbvmclfh.jpg?mode=max&upscale=false&width=1400", caption: "Custom Turf Area" },
      { src: "https://kenchi.com.au/static/uploads/images/wfujykcxbuwp-wfbvtwnkxbyy.jpg?mode=max&upscale=false&width=1400", caption: "Landscaped Turf" },
      { src: "https://kenchi.com.au/static/uploads/images/20171219-101821-wfyvmpxvgebq.jpg?mode=max&upscale=false&width=1400", caption: "Residential Turf" },
      { src: "https://kenchi.com.au/static/uploads/images/wferpmaybjpu-wfjocaxfrvmj.jpeg?mode=max&upscale=false&width=1400", caption: "Turf & Garden" },
      { src: "https://kenchi.com.au/static/uploads/images/wfevjrhykdwz-wfspjgfzfytl.jpg?mode=max&upscale=false&width=1400", caption: "Backyard Transformation" },
      { src: "https://kenchi.com.au/static/uploads/images/wfikzblaxhls-wfcyilascpeq.jpg?mode=max&upscale=false&width=1400", caption: "Turf & Paving Combo" },
      { src: "https://kenchi.com.au/static/uploads/images/wfpmauiskkut-wfprvpoacbql.jpg?mode=max&upscale=false&width=1400", caption: "Putting Green" },
      { src: "https://kenchi.com.au/static/uploads/images/wfqqoflvbwjt-wfxdihjkfrzf.jpg?mode=max&upscale=false&width=1400", caption: "Stitched Pile Turf" },
      { src: "https://kenchi.com.au/static/uploads/images/wfsmtmqkjwco-wfxrahnbtuse.jpg?mode=max&upscale=false&width=1400", caption: "Family Backyard Lawn" },
      { src: "https://kenchi.com.au/static/uploads/images/wftdmardpmvo-wfdcqwzhnkmw.jpg?mode=max&upscale=false&width=1400", caption: "Outdoor Living Turf" },
      { src: "https://kenchi.com.au/static/uploads/images/turf4-wfdlzwsdpyfc-wfkidlcszghu.jpg?mode=max&upscale=false&width=1400", caption: "Premium Synthetic Grass" },
      { src: "https://kenchi.com.au/static/uploads/images/wfpfaadplfiq-wfyhwasgzvcr.jpg?mode=max&upscale=false&width=1400", caption: "Turf Landscape Detail" },
      { src: "https://kenchi.com.au/static/uploads/images/wfyewnczrxkl-wfmhgcqvaehf.jpg?mode=max&upscale=false&width=1400", caption: "Lush Year-Round Lawn" },
    ],
  },
  "concreting-driveways": {
    title: "Concreting & Driveways",
    description:
      "Exposed aggregate, coloured and plain concrete driveways and slabs built to handle Gold Coast conditions and heavy daily use.",
    slides: [
      { src: hero6, caption: "Exposed Aggregate Driveway" },
      { src: hero4, caption: "Coloured Concrete Finish" },
      { src: hero7, caption: "Driveway & Pool Surround" },
      { src: hero2, caption: "Concrete Path Detail" },
    ],
  },
  "daycares-playgrounds": {
    title: "Daycares & Playgrounds",
    description:
      "Safe, compliant and vibrant outdoor play areas designed for schools, daycares and community spaces. Soft-fall, shade and durable surfaces included.",
    slides: [
      { src: hero7, caption: "Playground Surface" },
      { src: hero3, caption: "Shaded Play Area" },
      { src: hero5, caption: "Daycare Garden" },
      { src: hero8, caption: "Community Play Space" },
    ],
  },
  "concrete-spraying": {
    title: "Concrete Spraying",
    description:
      "Decorative spray-on concrete finishes for pool surrounds, pathways, patios and driveways. Slip-resistant, weatherproof and available in a wide range of colours and textures.",
    slides: [
      { src: hero1, caption: "Spray-on Pool Surround" },
      { src: hero4, caption: "Textured Pathway Finish" },
      { src: hero6, caption: "Decorative Patio Coating" },
      { src: hero2, caption: "Custom Colour Blend" },
    ],
  },
  "fire-pits": {
    title: "Fire Pits",
    description:
      "Custom-designed fire pits and outdoor fireplaces that become the natural gathering point of any garden. Built with quality materials for warmth, style and longevity.",
    slides: [
      { src: hero8, caption: "Modern Fire Pit Feature" },
      { src: hero5, caption: "Stone-Clad Fireplace" },
      { src: hero3, caption: "Deck-Integrated Fire Bowl" },
      { src: hero7, caption: "Evening Fire Feature" },
    ],
  },
  "garden-edging": {
    title: "Garden Edging",
    description:
      "Steel, concrete and natural stone edging that creates crisp, lasting boundaries between lawn, garden beds and pathways. Keeps mulch in and grass out.",
    slides: [
      { src: hero2, caption: "Steel Garden Edging" },
      { src: hero1, caption: "Stone Border Detail" },
      { src: hero4, caption: "Edging Along Pathway" },
      { src: hero7, caption: "Curved Lawn Edge" },
    ],
  },
  gazebos: {
    title: "Gazebos",
    description:
      "Freestanding and deck-integrated gazebos and pergolas designed for shade, shelter and style. Built with durable hardwoods and quality fixings for the Gold Coast climate.",
    slides: [
      { src: hero3, caption: "Hardwood Gazebo" },
      { src: hero8, caption: "Pergola Over Deck" },
      { src: hero6, caption: "Integrated Outdoor Room" },
      { src: hero5, caption: "Evening Gazebo Lighting" },
    ],
  },
  "herb-veggie-beds": {
    title: "Herb & Veggie Garden Beds",
    description:
      "Raised planter boxes and custom garden beds built for easy access and productive growing. Designed with proper drainage, quality soil and the right orientation for Gold Coast conditions.",
    slides: [
      { src: hero1, caption: "Raised Planter Boxes" },
      { src: hero4, caption: "Herb Garden Bed" },
      { src: hero2, caption: "Veggie Patch Border" },
      { src: hero6, caption: "Tiered Garden Beds" },
    ],
  },
  lighting: {
    title: "Lighting",
    description:
      "Atmospheric outdoor lighting that transforms gardens after dark. From subtle path lights to dramatic uplighting on feature trees and architectural elements.",
    slides: [
      { src: hero5, caption: "Garden Path Lighting" },
      { src: hero8, caption: "Feature Uplighting" },
      { src: hero3, caption: "Deck Lighting Detail" },
      { src: hero7, caption: "Pool & Garden Lights" },
    ],
  },
  "outdoor-showers": {
    title: "Outdoor Showers",
    description:
      "Stylish outdoor showers designed for poolside rinse-offs and garden retreats. Built with durable fittings and proper drainage for coastal Gold Coast conditions.",
    slides: [
      { src: hero6, caption: "Poolside Shower" },
      { src: hero7, caption: "Tropical Outdoor Shower" },
      { src: hero3, caption: "Timber Shower Enclosure" },
      { src: hero2, caption: "Stone Shower Feature" },
    ],
  },
  pathways: {
    title: "Pathways",
    description:
      "Stepping stone, paved and gravel garden walkways that connect spaces and invite exploration. Every pathway is laid on a compacted base for lasting stability.",
    slides: [
      { src: hero4, caption: "Stepping Stone Path" },
      { src: hero1, caption: "Garden Walkway" },
      { src: hero5, caption: "Curved Path Design" },
      { src: hero2, caption: "Path with Feature Stone" },
    ],
  },
  "pool-surrounds": {
    title: "Pool Surrounds",
    description:
      "Non-slip paving, timber decking and custom coping that frames your pool beautifully while staying safe underfoot. Designed for wet areas and harsh sun.",
    slides: [
      { src: hero7, caption: "Travertine Pool Deck" },
      { src: hero4, caption: "Timber Pool Surround" },
      { src: hero8, caption: "Paved Pool Edge" },
      { src: hero6, caption: "Pool Coping Detail" },
    ],
  },
  pots: {
    title: "Pots",
    description:
      "Statement planters and decorative garden pots that add instant structure, height and personality to outdoor spaces. Available in concrete, terracotta and glazed finishes.",
    slides: [
      { src: hero8, caption: "Large Feature Planter" },
      { src: hero5, caption: "Potted Garden Display" },
      { src: hero1, caption: "Terracotta Collection" },
      { src: hero3, caption: "Pots on Deck" },
    ],
  },
  "privacy-screens": {
    title: "Privacy Screens",
    description:
      "Timber, composite and aluminium privacy screens that block unwanted views without blocking airflow. Custom designs that complement your garden style.",
    slides: [
      { src: hero3, caption: "Timber Privacy Screen" },
      { src: hero6, caption: "Composite Screening" },
      { src: hero8, caption: "Screen with Feature Lighting" },
      { src: hero2, caption: "Slatted Privacy Wall" },
    ],
  },
  "retaining-walls": {
    title: "Retaining Walls",
    description:
      "Engineered concrete sleeper, stone and timber retaining walls built to hold back earth and create usable flat areas on sloped Gold Coast blocks.",
    slides: [
      { src: hero2, caption: "Stone Retaining Wall" },
      { src: hero4, caption: "Concrete Sleeper Wall" },
      { src: hero1, caption: "Terraced Garden Bed" },
      { src: hero6, caption: "Timber Retaining Wall" },
    ],
  },
  tiling: {
    title: "Tiling",
    description:
      "Outdoor tiling for patios, pool surrounds, feature walls and alfresco floors. Slip-resistant, weatherproof finishes in porcelain, natural stone and mosaic.",
    slides: [
      { src: hero1, caption: "Outdoor Feature Tiling" },
      { src: hero4, caption: "Pool Surround Tiles" },
      { src: hero7, caption: "Alfresco Floor Tiles" },
      { src: hero5, caption: "Mosaic Feature Wall" },
    ],
  },
  "water-features": {
    title: "Water Features",
    description:
      "Fountains, ponds, cascading waterfalls and bubbling rock features that bring sound, movement and serenity to outdoor spaces.",
    slides: [
      { src: hero5, caption: "Cascading Waterfall" },
      { src: hero7, caption: "Garden Pond Feature" },
      { src: hero3, caption: "Bubbling Rock Fountain" },
      { src: hero8, caption: "Poolside Water Wall" },
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
        ...(g ? [{ property: "og:image", content: g.slides[0].src }] : []),
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