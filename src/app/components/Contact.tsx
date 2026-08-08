"use client";
import { useState } from "react";
import { Icon, Reveal, SectionLabel } from "./ui";
import { Icons } from "../lib/data";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  consent: boolean;
};

const EMPTY: FormState = { firstName: "", lastName: "", email: "", message: "", consent: false };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSending(true);
    setError(null);
    try {
      const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (key) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: key,
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            message: form.message,
            subject: `New inquiry from ${form.firstName} ${form.lastName}`,
          }),
        });
        if (!res.ok) throw new Error("Submit failed");
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      setSent(true);
      setForm(EMPTY);
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const field = (name: keyof FormState, label: string, type = "text", full = false) => (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-semibold">{label}</label>
      <input
        type={type}
        required
        value={form[name] as string}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="w-full bg-obsidian/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-crimson transition-colors"
        placeholder={label}
      />
    </div>
  );

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-[22vw] font-extrabold tighter leading-none" style={{ WebkitTextStroke: "1px #1a1a1a", color: "transparent" }}>
          CONTACT
        </div>
      </div>
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-14">
          <div className="mb-4 flex justify-center">
            <SectionLabel>Let&apos;s Talk</SectionLabel>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tighter leading-[1.05] mb-6">Have a project in mind?</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Whether it&apos;s a funnel that isn&apos;t converting, an inbox that stopped delivering, or a system that needs building from scratch — drop a line.
          </p>
        </Reveal>
        <Reveal>
          <form onSubmit={submit} className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-3xl p-6 lg:p-10">
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {field("firstName", "First name")}
              {field("lastName", "Last name")}
              {field("email", "Email", "email", true)}
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-semibold">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-obsidian/60 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-crimson transition-colors resize-none"
                  placeholder="Tell me about the project, timeline, and what success looks like."
                />
              </div>
            </div>
            <label className="flex items-start gap-3 mb-6 cursor-pointer group">
              <div className={`relative w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${form.consent ? "bg-crimson border-crimson" : "border-neutral-700 group-hover:border-neutral-500"}`}>
                <input type="checkbox" required checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="sr-only" />
                {form.consent && <Icon path={Icons.check} className="w-3 h-3 text-white absolute inset-0 m-auto" stroke={3} />}
              </div>
              <span className="text-sm text-neutral-400 leading-relaxed">
                I agree to be contacted about my inquiry and consent to the storage of the submitted information.
              </span>
            </label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Icon path={Icons.mail} className="w-4 h-4 text-crimson" />
                <a href="mailto:hello@roxyel.com" className="hover:text-white transition-colors">hello@roxyel.com</a>
              </div>
              <button
                type="submit"
                disabled={sending || !form.consent}
                className="inline-flex items-center gap-2 bg-crimson text-white font-semibold px-8 py-3.5 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-500 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,46,46,0.45)]"
              >
                {sent ? (
                  <>
                    <Icon path={Icons.check} className="w-4 h-4" stroke={3} /> Message sent
                  </>
                ) : sending ? (
                  "Sending…"
                ) : (
                  <>
                    Send Message <Icon path={Icons.arrow} className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {error && <p className="text-sm text-red-400 mt-4">{error}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
