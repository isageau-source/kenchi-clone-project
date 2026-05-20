import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/HeroSlider";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstname.trim() || !phone.trim()) {
      toast.error("Please enter your first name and phone number.");
      return;
    }
    if (firstname.length > 100 || (surname && surname.length > 100) || phone.length > 30) {
      toast.error("One of the fields is too long.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      firstname: firstname.trim(),
      surname: surname.trim() || null,
      phone: phone.trim(),
      source: "call_back_form",
    });
    setSubmitting(false);
    if (error) {
      toast.error("Sorry — couldn't submit. Please try again or call us.");
      return;
    }
    toast.success("Thanks — Ken will be in touch shortly.");
    setFirstname(""); setSurname(""); setPhone(""); setAgree(false);
  };

  return (
    <>
      <HeroSlider />
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-serif italic text-4xl mb-6">Request a Call Back</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Firstname *</label>
              <input required maxLength={100} value={firstname} onChange={(e) => setFirstname(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Surname</label>
              <input maxLength={100} value={surname} onChange={(e) => setSurname(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Phone Number *</label>
              <input required type="tel" maxLength={30} value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} /> I agree to have my details saved
            </label>
            <button disabled={submitting} className="bg-foreground text-background px-6 py-2 rounded-sm hover:opacity-90 transition disabled:opacity-50">{submitting ? "Submitting…" : "Submit"}</button>
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
