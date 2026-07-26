import { ArrowRight, Briefcase, Leaf, Lightbulb, Utensils, Handshake, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Business Consultancy",
    description: "Develop resilient strategies, improve performance and unlock sustainable growth.",
    icon: Briefcase,
    color: "text-blue-500",
    hoverColor: "group-hover:text-blue-600",
    gradient: "from-blue-50/80",
  },
  {
    title: "Sustainability Consultancy",
    description: "Integrate sustainability into your strategy and create long-term value.",
    icon: Leaf,
    color: "text-emerald-500",
    hoverColor: "group-hover:text-emerald-600",
    gradient: "from-emerald-50/80",
  },
  {
    title: "Innovation & Commercialisation",
    description: "Transform ideas into successful products, services and business models.",
    icon: Lightbulb,
    color: "text-amber-500",
    hoverColor: "group-hover:text-amber-600",
    gradient: "from-amber-50/80",
  },
  {
    title: "Food Innovation & Development",
    description: "From concept to commercialisation for innovative and sustainable food solutions.",
    icon: Utensils,
    color: "text-orange-500",
    hoverColor: "group-hover:text-orange-600",
    gradient: "from-orange-50/80",
  },
  {
    title: "Funding & Partnerships",
    description: "Access funding, strategic partners, technology providers and new opportunities.",
    icon: Handshake,
    color: "text-purple-500",
    hoverColor: "group-hover:text-purple-600",
    gradient: "from-purple-50/80",
  },
  {
    title: "Executive Education & Development",
    description: "Build leadership capabilities through executive education, training and workshops.",
    icon: GraduationCap,
    color: "text-teal-500",
    hoverColor: "group-hover:text-teal-600",
    gradient: "from-teal-50/80",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary font-bold text-sm mb-2 tracking-wider uppercase">
          OUR EXPERTISE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">
          Solutions that drive real impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center rounded bg-white relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div
                className={`flex items-center justify-center ${service.color} mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative z-10`}
              >
                <service.icon className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <h3
                className={`font-bold text-primary mb-4 h-12 flex items-center justify-center relative z-10 ${service.hoverColor} transition-colors duration-300`}
              >
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow relative z-10">
                {service.description}
              </p>
              <a
                href="#services"
                className="text-secondary font-bold text-sm flex items-center hover:underline mt-auto relative z-10"
              >
                LEARN MORE{" "}
                <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
