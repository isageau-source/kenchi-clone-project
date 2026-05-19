import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quote")({
  component: Quote,
  head: () => ({ meta: [{ title: "Request A Quote | Kenchi Lifestyle Gardens" }, { name: "description", content: "Request a free, no-obligation landscaping quote from Kenchi Lifestyle Gardens on the Gold Coast." }] }),
});

function Quote() {
  const fields = [
    { l: "Name *", t: "text", r: true },
    { l: "Email *", t: "email", r: true },
    { l: "Phone *", t: "tel", r: true },
    { l: "Suburb", t: "text", r: false },
  ];
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-4">Request A Quote</h1>
      <p className="text-muted-foreground mb-8">Tell us a bit about your project and Ken will be in touch within 48 hours.</p>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch shortly."); }}>
        {fields.map((f) => (
          <div key={f.l}>
            <label className="block text-sm text-muted-foreground mb-1">{f.l}</label>
            <input required={f.r} type={f.t} className="w-full bg-muted border border-border px-3 py-2 rounded-sm" />
          </div>
        ))}
        <div>
          <label className="block text-sm text-muted-foreground mb-1">Tell us about your project *</label>
          <textarea required rows={5} className="w-full bg-muted border border-border px-3 py-2 rounded-sm" />
        </div>
        <button className="bg-foreground text-background px-6 py-2 rounded-sm hover:opacity-90 transition">Send Request</button>
      </form>
    </section>
  );
}