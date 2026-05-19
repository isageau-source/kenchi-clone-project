import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "About Us | Kenchi Lifestyle Gardens" }, { name: "description", content: "Meet Ken and the team behind Kenchi Lifestyle Gardens — Gold Coast landscapers with over 20 years of experience." }] }),
});

function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-8">About Us</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          Kenchi Lifestyle Gardens is a Gold Coast based landscaping company specialising in residential and commercial outdoor design and construction. Owned and operated by Ken, the business has built its reputation over more than two decades on craftsmanship, reliability and honest communication.
        </p>
        <p>
          Whether it's a complete backyard transformation, a feature stone wall, a timber deck or a driveway renovation, every project gets the same attention to detail. We work closely with each client from initial concept through to the final handover.
        </p>
        <p>
          Our team is fully qualified, insured and proudly local. We service the entire Gold Coast region and surrounds.
        </p>
      </div>
    </section>
  );
}