import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a className="flex items-center gap-3" href="/">
          <img
            src="https://assets.cdn.filesafe.space/3qGjzvsCX7HfrREIBPKS/media/6a651434666f9dc90b0c19f1.png"
            alt="Strategic Ventures Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <div className="flex flex-col text-left">
            <span className="text-xl md:text-2xl font-bold text-primary tracking-wide uppercase font-serif leading-none">
              Strategic
            </span>
            <span className="text-xl md:text-2xl font-bold text-primary tracking-wide uppercase font-serif leading-none">
              Ventures
            </span>
            <span className="text-[8px] md:text-[9px] font-bold text-secondary uppercase mt-1 w-full [text-align-last:justify]">
              Connecting Opportunities.
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-primary">
          <a
            className="hover:text-secondary transition-colors border-b-2 border-secondary pb-1 text-secondary"
            href="/"
          >
            HOME
          </a>
          <a className="hover:text-secondary transition-colors" href="#about">
            ABOUT
          </a>
          <a className="hover:text-secondary transition-colors" href="#services">
            SERVICES
          </a>
          <a className="hover:text-secondary transition-colors" href="#industries">
            INDUSTRIES
          </a>
          <a className="hover:text-secondary transition-colors" href="#insights">
            INSIGHTS
          </a>
          <a className="hover:text-secondary transition-colors" href="#partnerships">
            PARTNERSHIPS
          </a>
          <a className="hover:text-secondary transition-colors" href="#contact">
            CONTACT
          </a>
        </nav>

        <Button className="hidden md:flex bg-secondary hover:bg-secondary/90 text-white rounded-md px-6">
          BOOK A CONSULTATION
        </Button>

        <button className="md:hidden text-primary p-2">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
};
