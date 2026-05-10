import Image from "next/image";
import { Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const leaders = [
  {
    name: "Vehonga Kangotui",
    title: "Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Mr. Kangotui is an accomplished construction professional with over 30 years of experience in civil works, water infrastructure, and building projects. He has served as a General Foreman and Foreman on major projects including the Palapye-Mmamashia Water Transfer Project, Selebi Phikwe-Serule Water Transfer Scheme, and multiple rehabilitation and infrastructure upgrades across Botswana.",
  },
  {
    name: "Albin Mashabe",
    title: "Head of Management",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Mr. Mashabe holds a Bachelor of Commerce (BCom) in Entrepreneurship and has a strong foundation in business development, financial management, and strategic planning. His entrepreneurial drive, combined with administrative and project management skills, complements the technical leadership of the group.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Users size={32} aria-hidden="true" />
            </div>
          </div>
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Meet the Team
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Leadership{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <StaggerItem key={leader.name}>
              <article className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start border border-gray-100 h-full">
                <div className="shrink-0">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#FF8C42]/20">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {leader.name}
                  </h3>
                  <p className="font-semibold text-[#FF8C42] mb-4 text-sm uppercase tracking-wide">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">{leader.bio}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
