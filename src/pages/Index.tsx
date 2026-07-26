import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { Insights } from "@/components/Insights";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Services />
        <Stats />
        <Process />
        <Industries />
        <Insights />
        <CTA />
      </main>
      <Footer />
      
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white border border-border shadow-lg rounded-lg p-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-bold text-primary text-sm mb-1">We value your privacy</h3>
            <p className="text-xs text-gray-600 mb-3">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors shrink-0" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          </button>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 w-full bg-secondary hover:bg-secondary/90 text-white">
            Accept
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
