"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fallbackMailto, setFallbackMailto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setEmailSubmitted(false);
    setFallbackMailto("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        const payload = await response.json().catch(() => ({}));

        if (payload.code === "EMAIL_NOT_CONFIGURED") {
          const subject = encodeURIComponent(data.subject);
          const body = encodeURIComponent(`From: ${data.email}\n\n${data.message}`);
          setFallbackMailto(
            `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
          );
        }

        setErrorMessage(payload.error || "Unable to send message right now.");
      }
    } catch {
      setErrorMessage("Unable to send message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect about engineering opportunities, products, or collaboration."
            description="Recruiters, hiring teams, and collaborators can reach out directly using the contact details below or the message form."
          />

          <div className="grid gap-4">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="glass-panel rounded-[2rem] p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</p>
              <p className="mt-3 text-lg font-semibold text-white">{personalInfo.email}</p>
            </motion.a>

            <motion.a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="glass-panel rounded-[2rem] p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Phone</p>
              <p className="mt-3 text-lg font-semibold text-white">{personalInfo.phone}</p>
            </motion.a>

            <div className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-6">
              <p className="text-sm leading-7 text-slate-200">
                Full Stack Software Engineer focused on Next.js, React, TypeScript, Node.js, .NET, Python, APIs, and database-driven systems.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30"
                placeholder="Hiring opportunity"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/30"
                placeholder="Tell me about the role, team, or product."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(59,130,246,0.95)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {emailSubmitted ? (
              <p className="text-sm text-emerald-300">Message sent successfully.</p>
            ) : null}
            {errorMessage ? <p className="text-sm text-rose-300">{errorMessage}</p> : null}
            {fallbackMailto ? (
              <a
                href={fallbackMailto}
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15 hover:text-white"
              >
                Email me directly
              </a>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
