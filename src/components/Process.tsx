import { Search, LineChart, Target, Settings, Rocket, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We understand your business, challenges and opportunities.",
  },
  {
    icon: LineChart,
    title: "Analyse",
    description: "We analyse, research and identify the best path forward.",
  },
  {
    icon: Target,
    title: "Strategise",
    description: "We create a clear strategy and roadmap.",
  },
  {
    icon: Settings,
    title: "Develop",
    description: "We design solutions, innovations and business models.",
  },
  {
    icon: Rocket,
    title: "Implement",
    description: "We support implementation, partnerships and market entry.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "We help you achieve sustainable growth and long-term success.",
    isLast: true,
  },
];

export const Process = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary font-bold text-sm mb-2 tracking-wider uppercase">
          HOW WE CREATE VALUE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-20">
          A collaborative approach. Measurable results.
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-12 left-10 right-10 h-[2px] bg-gray-300 border-t-2 border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative z-10 w-full md:w-1/6 mb-12 md:mb-0"
            >
              <div
                className={`w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm ${
                  step.isLast ? "border-2 border-secondary" : ""
                }`}
              >
                <step.icon
                  className="text-secondary w-12 h-12"
                  strokeWidth={1.5}
                />
              </div>
              
              {!step.isLast && (
                <div className="hidden md:flex absolute top-12 right-0 translate-x-1/2 -translate-y-1/2 text-gray-400 bg-gray-50 z-10 px-2">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}

              <h4 className="font-bold text-primary mb-3">{step.title}</h4>
              <p className="text-sm text-gray-600 px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
