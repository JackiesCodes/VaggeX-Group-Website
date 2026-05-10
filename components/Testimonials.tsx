import { Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

// Replace these with real client testimonials when available
const testimonials = [
  {
    quote:
      "The technical expertise and attention to detail on our water infrastructure project was outstanding. Every milestone was met on schedule and the quality of work exceeded our expectations.",
    name: "James Mokobi",
    title: "Infrastructure Director",
    company: "Water Utilities Corporation",
    initials: "JM",
  },
  {
    quote:
      "From the initial consultation to final handover, Vaggex Group demonstrated a level of professionalism and deep knowledge of large-scale civil works that made them an invaluable partner.",
    name: "Sarah Dipheko",
    title: "Senior Project Manager",
    company: "Ministry of Infrastructure",
    initials: "SD",
  },
  {
    quote:
      "We needed a contractor who understood both the engineering demands and the community impact of our project. Vaggex Group delivered on every front — safely, on time, and within budget.",
    name: "Tebogo Selato",
    title: "Managing Director",
    company: "Selato Developments",
    initials: "TS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Client Feedback
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Trusted by government bodies, developers, and infrastructure leaders
            across Botswana.
          </p>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col border border-gray-100 hover:border-[#FF8C42]/30 hover:shadow-xl transition-all duration-300">
                {/* Quote icon */}
                <Quote
                  size={32}
                  aria-hidden="true"
                  className="text-[#FF8C42] mb-5 shrink-0"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden="true" className="text-[#FF8C42] text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed italic flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="brand-gradient w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">
                      {t.title} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
