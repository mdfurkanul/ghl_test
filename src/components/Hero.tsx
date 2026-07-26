import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-white pt-24 pb-32 overflow-hidden flex items-center min-h-[85vh]">
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white z-10"></div>
        <img
          src="https://vibe.filesafe.space/1784999580437419881/assets/02dd014b-ed29-4276-9f21-581a86373df5.png"
          alt="Sustainable Growth Globe"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="container mx-auto px-4 pt-10 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight mb-6 tracking-tight">
            Connecting <br />
            Opportunities. <br />
            <span className="text-secondary font-normal text-4xl md:text-5xl">
              Creating Sustainable <br />
              Growth.
            </span>
          </h1>
          
          <p className="text-lg text-gray-800 mb-8 max-w-xl leading-relaxed font-medium">
            Strategic Ventures is an international management and innovation
            consultancy helping organisations transform ideas into sustainable
            commercial success through strategy, innovation, partnerships and
            international growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="h-12 bg-primary hover:bg-primary/90 text-white rounded-md px-8 text-sm font-bold">
              EXPLORE OUR SERVICES <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="h-12 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-md px-8 text-sm font-bold bg-white/50 backdrop-blur-sm"
            >
              BOOK A CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
