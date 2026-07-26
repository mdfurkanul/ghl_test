import { ArrowRight } from "lucide-react";

const insights = [
  {
    category: "INNOVATION",
    title: "Commercialising Innovation Successfully",
    description: "Key steps to transform innovative ideas into sustainable businesses.",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/35089212-5009-48b5-8437-ab2b09579709.jpg",
  },
  {
    category: "FUNDING",
    title: "Securing Innovation Funding",
    description: "How to improve your chances of obtaining grants and investment for your projects.",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/0739962f-e78a-4bd4-a7b2-acea08b836c9.jpg",
  },
  {
    category: "SUSTAINABILITY",
    title: "The Future of Sustainable Business",
    description: "Building resilient organisations through innovation and responsible leadership.",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/cb9c6bed-1b7a-4fbc-9434-cdebf2be5a48.jpg",
  },
];

export const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-secondary font-bold text-sm mb-2 tracking-wider uppercase">
              LATEST INSIGHTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Knowledge that inspires growth
            </h2>
          </div>
          <a
            href="#insights"
            className="text-secondary font-bold text-sm flex items-center hover:underline mt-4 md:mt-0"
          >
            VIEW ALL INSIGHTS <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-bold text-gray-400 mb-2 tracking-wider">
                  {insight.category}
                </p>
                <h3 className="font-bold text-primary text-xl mb-3 group-hover:text-secondary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {insight.description}
                </p>
                <a
                  href="#insights"
                  className="text-secondary font-bold text-sm flex items-center hover:underline mt-auto"
                >
                  READ MORE <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
