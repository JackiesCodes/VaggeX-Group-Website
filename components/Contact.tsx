"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { company } from "@/lib/company";

type FormFields = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function validateField(name: keyof FormFields, value: string): string {
  if (name === "name" && !value.trim()) return "Name is required";
  if (name === "email") {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
  }
  if (name === "message" && !value.trim()) return "Message is required";
  return "";
}

export default function Contact() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: keyof FormFields, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types once they've already triggered validation
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name: keyof FormFields) => {
    const error = validateField(name, form[name]);
    if (error) setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    // Remove empty error strings
    (Object.keys(newErrors) as (keyof FormErrors)[]).forEach((k) => {
      if (!newErrors[k]) delete newErrors[k];
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", company: "", email: "", message: "" });
    setErrors({});
  };

  const fieldClass = (name: keyof FormErrors) =>
    `w-full border-0 border-b-2 bg-transparent px-0 py-3 text-base text-white placeholder:text-white/35 transition-colors ${
      errors[name] ? "border-red-400" : "border-white/20"
    }`;

  const labelClass = "block text-xs font-semibold uppercase tracking-[0.2em] text-white/60";

  return (
    <section id="contact" className="bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="dark"
          index="08"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s talk about
              <br />
              <span className="text-brand">your project</span>
            </>
          }
          intro={
            <p>
              Tell us what you are planning — a new build, civil works, or
              maintenance of an existing facility. A director will respond to every
              enquiry personally.
            </p>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-12">
          {/* Contact Info */}
          <div className="flex flex-col bg-ink-800 p-8 lg:col-span-5 lg:p-12">
            <dl className="space-y-8">
              <div>
                <dt className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <Phone size={16} aria-hidden="true" />
                  Phone
                </dt>
                <dd className="space-y-1">
                  {company.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block font-display text-2xl font-semibold transition-colors hover:text-brand"
                    >
                      {p.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <Mail size={16} aria-hidden="true" />
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all font-display text-2xl font-semibold transition-colors hover:text-brand"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <MapPin size={16} aria-hidden="true" />
                  Based in
                </dt>
                <dd className="font-display text-2xl font-semibold">{company.location}</dd>
              </div>
            </dl>

            <p className="display mt-auto border-t border-white/10 pt-10 text-3xl text-white/80">
              &ldquo;{company.tagline}&rdquo;
            </p>
          </div>

          {/* Form */}
          <div className="bg-ink-800 p-8 lg:col-span-7 lg:p-12">
            <h3 className="display mb-8 text-4xl">Send an enquiry</h3>

            {submitted ? (
              <div role="status" aria-live="polite" className="py-10">
                <span className="mb-6 flex h-14 w-14 items-center justify-center bg-brand text-ink">
                  <Check size={28} aria-hidden="true" />
                </span>
                <p className="mb-8 text-lg text-white/80">
                  Thank you. Your email app should now be open with your enquiry ready
                  to send.
                </p>
                <button
                  onClick={handleReset}
                  className="border border-white/30 px-6 py-3 font-bold uppercase tracking-wider transition-colors hover:border-brand hover:text-brand"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2" noValidate>
                <div>
                  <label className={labelClass} htmlFor="name">
                    Name <span aria-hidden="true" className="text-brand">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className={fieldClass("name")}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full border-0 border-b-2 border-white/20 bg-transparent px-0 py-3 text-base text-white placeholder:text-white/35 transition-colors"
                    placeholder="Organisation (optional)"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="email">
                    Email <span aria-hidden="true" className="text-brand">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={fieldClass("email")}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Project details <span aria-hidden="true" className="text-brand">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    className={`${fieldClass("message")} resize-none`}
                    placeholder="Location, scope, timeline…"
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 bg-brand py-5 font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-12"
                  >
                    {isSubmitting ? "Sending…" : "Send Enquiry"}
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                  <p className="mt-4 text-xs text-white/40">
                    Submitting opens your email app with the enquiry pre-filled.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
