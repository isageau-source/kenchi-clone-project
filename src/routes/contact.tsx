import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us | Kenchi Lifestyle Gardens" },
      { name: "description", content: "Get in touch with Kenchi Lifestyle Gardens — Gold Coast landscaping specialists." },
    ],
  }),
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedMessage) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (trimmedName.length > 100 || trimmedEmail.length > 255 || trimmedPhone.length > 30 || trimmedMessage.length > 2000) {
      toast.error("One of the fields is too long.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      firstname: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      message: trimmedMessage,
      source: "contact_form",
    });
    setSubmitting(false);

    if (error) {
      toast.error("Sorry — couldn't submit. Please try again or call us.");
      return;
    }
    toast.success("Message sent — Ken will be in touch shortly.");
    setName(""); setEmail(""); setPhone(""); setMessage("");
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-10 text-lg mb-12">
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

      <div className="border-t border-border pt-10">
        <h2 className="font-serif italic text-3xl mb-4">Send a Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Name *</label>
            <input required maxLength={100} type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Email *</label>
            <input required maxLength={255} type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Phone *</label>
            <input required maxLength={30} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Message *</label>
            <textarea required maxLength={2000} rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
          </div>
          <button disabled={submitting} className="bg-foreground text-background px-6 py-2 rounded-sm hover:opacity-90 transition disabled:opacity-50">
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
