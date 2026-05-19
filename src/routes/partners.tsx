import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  component: Partners,
  head: () => ({ meta: [{ title: "Our Partners | Kenchi Lifestyle Gardens" }, { name: "description", content: "The trusted suppliers and trade partners we work with on every Kenchi project." }] }),
});

const partners = ["National Tiles", "Boral", "Adbri Masonry", "Austral Bricks", "Modak Stone", "Eco Outdoor", "Beacon Lighting", "Somerset College"];

function Partners() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-4">Our Partners</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">We're proud to work alongside a network of quality suppliers and trade partners across the Gold Coast.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((p) => (
          <div key={p} className="aspect-[3/2] grid place-items-center border border-border bg-secondary rounded-sm text-center px-3 font-serif italic">
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}