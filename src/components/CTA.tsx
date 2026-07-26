import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="bg-primary text-white py-24 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-secondary font-bold text-sm mb-4 tracking-wider uppercase">
          LET'S BUILD THE FUTURE TOGETHER
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to make an impact?
        </h2>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Whether you're launching a new venture, expanding internationally or
          transforming your organisation, we're here to help.
        </p>
        <Button className="h-12 bg-secondary hover:bg-secondary/90 text-white rounded-md px-8 text-sm font-bold">
          CONTACT US TODAY <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};
