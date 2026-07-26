import { Briefcase, Globe, Users, Target, ShieldCheck } from "lucide-react";

export const Stats = () => {
  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between items-center gap-6 gap-y-10">
          <div className="flex items-center gap-4">
            <div className="text-secondary">
              <Briefcase className="w-10 h-10" />
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm font-semibold">
                Projects Delivered
                <br />
                Worldwide
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-600"></div>

          <div className="flex items-center gap-4">
            <div className="text-secondary">
              <Target className="w-10 h-10" />
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">20+</div>
              <div className="text-sm font-semibold">Years of Experience</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-600"></div>

          <div className="flex items-center gap-4">
            <div className="text-secondary">
              <Globe className="w-10 h-10" />
            </div>
            <div>
              <div className="text-lg font-bold">
                Global
                <br />
                Network
              </div>
              <div className="text-sm text-gray-400">Across 5 Continents</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-600"></div>

          <div className="flex items-center gap-4">
            <div className="text-secondary">
              <Users className="w-10 h-10" />
            </div>
            <div>
              <div className="text-lg font-bold">Multi-disciplinary</div>
              <div className="text-sm text-gray-400">Expert Team</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-600"></div>

          <div className="flex items-center gap-4">
            <div className="text-secondary">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <div className="text-lg font-bold">Proven Track Record</div>
              <div className="text-sm text-gray-400">of Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
