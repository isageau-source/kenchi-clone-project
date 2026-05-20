import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/quote")({
  component: Quote,
  head: () => ({
    meta: [
      { title: "Request A Quote | Kenchi Lifestyle Gardens" },
      { name: "description", content: "Request a free, no-obligation landscaping quote from Kenchi Lifestyle Gardens on the Gold Coast." },
    ],
  }),
});

function Quote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [suburb, setSuburb] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      toast.error("Please fill in your name, email and phone number.");
      return;
    }
    if (trimmedName.length > 100 || trimmedEmail.length > 255 || trimmedPhone.length > 30 || suburb.length > 100 || message.length > 2000) {
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
      suburb: suburb.trim() || null,
      message: message.trim() || null,
      source: "quote_form",
    });
    setSubmitting(false);

    if (error) {
      toast.error("Sorry — couldn't submit. Please try again or call us.");
      return;
    }
    toast.success("Thanks — Ken will be in touch within 48 hours.");
    setName(""); setEmail(""); setPhone(""); setSuburb(""); setMessage("");
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-serif italic text-5xl mb-4">Request A Quote</h1>
      <p className="text-muted-foreground mb-8">Tell us a bit about your project and Ken will be in touch within 48 hours.</p>
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
          <label className="block text-sm text-muted-foreground mb-1">Suburb</label>
          <input maxLength={100} type="text" value={suburb} onChange={(e) => setSuburb(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
        </div>
        <div>
          <label className="block text-sm text-muted-foreground mb-1">Tell us about your project *</label>
          <textarea required maxLength={2000} rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-muted border border-border px-3 py-2 rounded-sm text-foreground" />
        </div>
        <button disabled={submitting} className="bg-foreground text-background px-6 py-2 rounded-sm hover:opacity-90 transition disabled:opacity-50">
          {submitting ? "Submitting…" : "Send Request"}
        </button>
      </form>
    </section>
  );
}
