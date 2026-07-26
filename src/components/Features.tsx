import { Globe, Lightbulb, Leaf, Handshake, ShieldCheck } from "lucide-react";

export const Features = () => {
  return (
    <div className="bg-white border-b border-gray-100 relative z-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="flex items-center gap-3">
            <Globe className="text-secondary w-6 h-6" />
            <span className="font-bold text-sm text-primary">Strategy Experts</span>
          </div>
          <div className="flex items-center gap-3">
            <Lightbulb className="text-secondary w-6 h-6" />
            <span className="font-bold text-sm text-primary">Innovation Driven</span>
          </div>
          <div className="flex items-center gap-3">
            <Leaf className="text-secondary w-6 h-6" />
            <span className="font-bold text-sm text-primary">Sustainability Focused</span>
          </div>
          <div className="flex items-center gap-3">
            <Handshake className="text-secondary w-6 h-6" />
            <span className="font-bold text-sm text-primary">Global Partnerships</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-secondary w-6 h-6" />
            <span className="font-bold text-sm text-primary">Impact Oriented</span>
          </div>
        </div>
      </div>
    </div>
  );
};
