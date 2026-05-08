import Image from "next/image";
import { Users } from "lucide-react";

const leaders = [
  {
    name: "Vehonga Kangotui",
    title: "Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Mr. Kangotui is an accomplished construction professional with over 30 years of experience in civil works, water infrastructure, and building projects. He has served as a General Foreman and Foreman on major projects including the Palapye-Mmamashia Water Transfer Project, Selebi Phikwe-Serule Water Transfer Scheme, and multiple rehabilitation and infrastructure upgrades across Botswana. His technical background, hands-on management, and industry expertise form a strong foundation for Vaggex Group.",
  },
  {
    name: "Albin Mashabe",
    title: "Head of Management",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Mr. Mashabe holds a Bachelor of Commerce (BCom) in Entrepreneurship and has a strong foundation in business development, financial management, and strategic planning. He has assisted in managing financial operations for institutions such as St Kizito Senior Secondary School and has field experience supporting construction projects. His entrepreneurial drive, combined with administrative and project management skills, complements the technical leadership of the group.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-12 bg-white">
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
              <Users size={32} />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            LEADERSHIP
            <br />
            TEAM
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <div className="shrink-0">
                <div className="relative w-28 h-28 rounded-full overflow-hidden">
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
                <p className="font-semibold mb-4" style={{ color: "#FF8C42" }}>
                  {leader.title}
                </p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
