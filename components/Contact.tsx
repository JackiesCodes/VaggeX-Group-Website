"use client";

import { useState } from "react";
import { Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic mailto fallback
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:vaggexgroup@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white"
              style={{
                background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
              }}
            >
              <Phone size={32} />
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
                icon: <Phone size={24} />,
                title: "Phone",
                content: "+267 76 449 256 / 77814198 & 76 345 055",
              },
              {
                icon: <Mail size={24} />,
                title: "Email",
                content: "vaggexgroup@gmail.com",
              },
              {
                icon: <Globe size={24} />,
                title: "Website",
                content: "Coming Soon",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-5"
              >
                <div
                  className="rounded-lg flex items-center justify-center text-white shrink-0"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
                  }}
                >
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
              <h3 className="text-xl font-semibold text-gray-800 italic">
                &quot;Building Africa&apos;s Future, One Project at a Time.&quot;
              </h3>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h4>
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✓</div>
                <p className="text-gray-700 text-lg font-medium">
                  Thank you! Your message is being sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
