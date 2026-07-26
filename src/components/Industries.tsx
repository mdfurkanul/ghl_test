const industries = [
  {
    title: "Food &\nBeverage",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/d0160620-2c2c-44d9-9155-f393e06d5aa8.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: "Technology &\nDigital",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/b0cce3e8-dbeb-4080-a6d7-e276b2836a5a.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <rect width="16" height="16" x="4" y="4" rx="2" ry="2"></rect><rect width="6" height="6" x="9" y="9" rx="1" ry="1"></rect><path d="M9 15v2"></path><path d="M15 15v2"></path><path d="M9 7v2"></path><path d="M15 7v2"></path><path d="M7 9h2"></path><path d="M15 9h2"></path><path d="M7 15h2"></path><path d="M15 15h2"></path>
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/9800e14f-18f1-477e-b763-b140d02625d3.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
      </svg>
    ),
  },
  {
    title: "Universities &\nResearch",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/71ac5da4-b242-419f-bf7b-34accd7bd620.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="M21.42 10.922a2 2 0 0 1-.019 3.837l-8.5 1.518a2 2 0 0 1-.682 0l-8.5-1.518a2 2 0 0 1-.018-3.836l8.5-1.518a2 2 0 0 1 .681 0l8.5 1.517z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
      </svg>
    ),
  },
  {
    title: "Healthcare",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/d2224bfb-10b5-49d8-aaff-476cfcaa4cca.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
  },
  {
    title: "Public Sector",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/5029f861-ec2b-4b27-81c9-14947a8910f0.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M3 15h6"></path><path d="M3 18h6"></path>
      </svg>
    ),
  },
  {
    title: "Energy &\nEnvironment",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/7af2749b-78ca-4148-aac7-1527ed2953aa.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: "SMEs &\nStart-ups",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/258fe865-55e4-48e0-84e7-ee0a6ab01e97.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Investors",
    image: "https://vibe.filesafe.space/1784999580437419881/assets/3020b752-69e3-4df0-bb11-ded02d466f63.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-3">
        <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-secondary font-bold text-sm mb-2 tracking-wider uppercase">
          INDUSTRIES WE SERVE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">
          Expertise across sectors
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative h-64 group overflow-hidden rounded"
            >
              <img
                src={industry.image}
                alt={industry.title.replace("\n", " ")}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex flex-col items-center justify-end pb-8 opacity-90 transition-opacity group-hover:opacity-100">
                {industry.icon}
                <span className="text-white font-bold text-sm whitespace-pre-line leading-tight">
                  {industry.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
