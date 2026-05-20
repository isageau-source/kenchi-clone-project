import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  component: Partners,
  head: () => ({ meta: [{ title: "Our Partners | Kenchi Lifestyle Gardens" }, { name: "description", content: "The trusted suppliers and trade partners we work with on every Kenchi project." }] }),
});

const partners: { name: string; url: string; img: string }[] = [
  { name: "A1 Rubber", url: "http://a1rubber.com/", img: "https://kenchi.com.au/static/uploads/images/a1-rubber-wfriieipzrfa.png?mode=max&upscale=false&width=311" },
  { name: "All Turf Solutions", url: "http://www.allturfsolutions.com.au/", img: "https://kenchi.com.au/static/uploads/images/all-turf-wfkuydimqsfx.png?mode=max&upscale=false&width=311" },
  { name: "Amgrow", url: "http://www.amgrow.com.au/", img: "https://kenchi.com.au/static/uploads/images/amgrow-logo-hi-res-wffllpyruhye.jpg?mode=max&upscale=false&width=300" },
  { name: "Apex Masonry", url: "https://www.apexmasonry.com.au/", img: "https://kenchi.com.au/static/uploads/images/apex-wfghdkuhwitu.png?mode=max&upscale=false&width=300" },
  { name: "Bamboo Down Under", url: "https://www.bamboodownunder.com.au/", img: "https://kenchi.com.au/static/uploads/images/bdu-thin-h-wfqkmedtvvrq.jpg?mode=max&upscale=false&width=300" },
  { name: "Haymans Surfers", url: "https://surfers.haymans.mmem.com.au/", img: "https://kenchi.com.au/static/uploads/images/haymans-wfczketxqpxt.png?mode=max&upscale=false&width=300" },
  { name: "Gooding Timber", url: "http://www.goodingtimber.com.au/", img: "https://kenchi.com.au/static/uploads/images/gooding-timber-wfbcwmvbivcm.png?mode=max&upscale=false&width=300" },
  { name: "Neo Rox Concepts", url: "http://neorox.com.au/", img: "https://kenchi.com.au/static/uploads/images/neo-rox-wfwjcqpzblgr.png?mode=max&upscale=false&width=310" },
  { name: "Nerang Tiles", url: "https://www.nerangtiles.com.au/", img: "https://kenchi.com.au/static/uploads/images/nerangtiles-logo-wftsisesbqku.png?mode=max&upscale=false&width=301" },
  { name: "Piccolini Creations", url: "https://www.piccolinicreations.com.au/", img: "https://kenchi.com.au/static/uploads/images/piccolini-wfxgschtzuqt.png?mode=max&upscale=false&width=311" },
  { name: "Plantmark Merrimac", url: "http://www.plantmark.com.au/", img: "https://kenchi.com.au/static/uploads/images/plantmark-small-logo-wfnisnxkrqqc.jpg?mode=max&upscale=false&width=300" },
  { name: "Slate and Stone", url: "http://slatestone.com.au/", img: "https://kenchi.com.au/static/uploads/images/slate-and-stone-wfnhymxoaosh.png?mode=max&upscale=false&width=310" },
  { name: "Stile Tiling", url: "http://www.stileedge.com/", img: "https://kenchi.com.au/static/uploads/images/stiletiling-wfjzcmxzyyro.png?mode=max&upscale=false&width=299" },
  { name: "Swimart Nerang", url: "https://swimart.com.au/store/qld/nerang-4211/", img: "https://kenchi.com.au/static/uploads/images/swimart-wfyfzrhaolrn.jpg?mode=max&upscale=false&width=300" },
];

function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-4">Our Partners</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">We're proud to work alongside a trusted network of quality suppliers and trade partners.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-[3/1] flex items-center justify-center border border-border bg-background rounded-sm p-4 transition hover:shadow-md hover:border-foreground/30"
            aria-label={p.name}
          >
            <img src={p.img} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" />
          </a>
        ))}
      </div>
    </section>
  );
}