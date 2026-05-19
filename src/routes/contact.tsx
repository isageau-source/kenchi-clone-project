import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact Us | Kenchi Lifestyle Gardens" }, { name: "description", content: "Get in touch with Kenchi Lifestyle Gardens — Gold Coast landscaping specialists." }] }),
});

function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-10 text-lg">
        <div className="space-y-3">
          <p className="text-muted-foreground">Phone</p>
          <a className="block text-2xl underline" href="tel:0412730370">0412 730 370</a>
          <p className="text-muted-foreground mt-6">Service Area</p>
          <p>Gold Coast &amp; surrounds, QLD</p>
          <p className="text-muted-foreground mt-6">Hours</p>
          <p>Mon–Fri 7am–5pm · Sat by appointment</p>
        </div>
        <div className="space-y-3">
          <p className="text-muted-foreground">Specialising In</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Paving &amp; driveways</li>
            <li>Feature stone walls</li>
            <li>Decking</li>
            <li>Lighting &amp; water features</li>
            <li>Privacy screens</li>
            <li>Pool surrounds</li>
            <li>Complete garden makeovers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}