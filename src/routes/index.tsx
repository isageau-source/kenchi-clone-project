import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/HeroSlider";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-serif italic text-4xl mb-6">Request a Call Back</h1>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks — Ken will be in touch."); }}>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Firstname *</label>
              <input required className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Surname</label>
              <input className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Phone Number *</label>
              <input required type="tel" className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" /> I agree to have my details saved
            </label>
            <button className="bg-foreground text-background px-6 py-2 rounded-sm hover:opacity-90 transition">Submit</button>
          </form>
        </div>
        <div>
          <h2 className="font-serif italic text-4xl mb-6">Keep in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Kenchi Lifestyle Gardens has been creating beautiful outdoor spaces on the Gold Coast for over two decades. From feature stone walls and paving to bespoke decking and lighting, every project is delivered with the craftsmanship and care your home deserves.
          </p>
          <div className="space-y-2 text-sm">
            <p><span className="text-muted-foreground">Phone:</span> <a className="underline" href="tel:0412730370">0412 730 370</a></p>
            <p><span className="text-muted-foreground">Service area:</span> Gold Coast &amp; surrounds</p>
            <p><Link to="/portfolio" className="underline">Browse our portfolio →</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
