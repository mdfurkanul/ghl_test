import { Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white pt-20 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-0 lg:divide-x lg:divide-gray-800 mb-16">
          <div className="lg:pr-8">
            <a className="flex items-center gap-3 mb-6" href="/">
              <img
                src="https://assets.cdn.filesafe.space/3qGjzvsCX7HfrREIBPKS/media/6a651434666f9dc90b0c19f1.png"
                alt="Strategic Ventures Logo"
                className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col text-left">
                <span className="text-xl md:text-2xl font-bold tracking-wide uppercase font-serif leading-none">
                  Strategic
                </span>
                <span className="text-xl md:text-2xl font-bold tracking-wide uppercase font-serif leading-none">
                  Ventures
                </span>
                <span className="text-[8px] md:text-[9px] font-bold text-secondary uppercase mt-1 w-full [text-align-last:justify]">
                  Connecting Opportunities.
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              An international management and innovation consultancy helping
              organisations innovate, grow and create sustainable success.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:px-8">
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">
              SERVICES
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Business Consultancy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Sustainability Consultancy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Innovation & Commercialisation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Food Innovation & Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Funding, Partnerships & Business Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Executive Education & Professional Development
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:px-8">
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  News & Media
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:px-8">
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">
              RESOURCES
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase">
              CONTACT US
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:info@strategicventures.co.uk"
                  className="hover:text-white transition-colors"
                >
                  info@strategicventures.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+44 (0) 7707 153 711</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Cambridge, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Strategic Ventures. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
