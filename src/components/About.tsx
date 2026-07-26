import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://vibe.filesafe.space/1784999580437419881/assets/8cf7fd35-265d-4f75-ad83-b6af2093ad72.png"
              alt="Strategic Ventures Team"
              className="w-full h-auto rounded shadow-xl"
            />
          </div>
          <div>
            <p className="text-secondary font-bold text-sm mb-2 tracking-wider uppercase">
              ABOUT STRATEGIC VENTURES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Strategic Partner for Innovation and Growth
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Today's organisations need more than advice. They need a trusted
              partner capable of connecting strategy with implementation,
              innovation with commercial success and ambition with sustainable
              growth.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We work alongside businesses, universities, investors and public
              organisations to unlock opportunities, secure funding, build
              partnerships and expand into new markets.
            </p>
            <Button className="h-12 bg-secondary hover:bg-secondary/90 text-white rounded-md px-8 text-sm font-bold">
              DISCOVER MORE ABOUT US <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
