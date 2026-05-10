"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

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
    window.location.href = `mailto:vaggexgroup@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", company: "", email: "", message: "" });
    setErrors({});
  };

  const fieldClass = (name: keyof FormErrors) =>
    `w-full px-4 py-3 border-2 rounded-lg text-base transition-colors ${
      errors[name] ? "border-red-400 bg-red-50" : "border-gray-200"
    }`;

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Phone size={32} aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            OUR
            <br />
            CONTACT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: <Phone size={24} aria-hidden="true" />,
                title: "Phone",
                content: "+267 76 449 256 / 77814198 & 76 345 055",
              },
              {
                icon: <Mail size={24} aria-hidden="true" />,
                title: "Email",
                content: "vaggexgroup@gmail.com",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-5"
              >
                <div className="brand-gradient w-[50px] h-[50px] rounded-lg flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}

            {/* Tagline */}
            <div className="text-center py-6">
              <p className="text-xl font-semibold text-gray-800 italic">
                &quot;Building Africa&apos;s Future, One Project at a Time.&quot;
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="text-center py-10"
              >
                <div aria-hidden="true" className="text-5xl mb-4 text-green-500">✓</div>
                <p className="text-gray-700 text-lg font-medium mb-6">
                  Thank you! Your enquiry email is ready to send.
                </p>
                <button
                  onClick={handleReset}
                  className="brand-gradient px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="name">
                    Name <span aria-hidden="true">*</span>
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
                    <p id="name-error" role="alert" className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="email">
                    Email <span aria-hidden="true">*</span>
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
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="message">
                    Message <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    className={`${fieldClass("message")} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brand-gradient w-full py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
