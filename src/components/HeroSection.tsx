import { ArrowRight } from 'lucide-react';

const industries = [
  {
    name: 'IT Services',
    style: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '15px',
    },
  },
  {
    name: 'BFSI',
    style: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 900,
      letterSpacing: '0.08em',
      fontSize: '13px',
      textTransform: 'uppercase' as const,
    },
  },
  {
    name: 'Healthcare',
    style: {
      fontFamily: "'Trebuchet MS', sans-serif",
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontSize: '15px',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Construction',
    style: {
      fontFamily: "'Courier New', monospace",
      fontWeight: 700,
      letterSpacing: '0.12em',
      fontSize: '13px',
      textTransform: 'uppercase' as const,
    },
  },
  {
    name: 'E-commerce',
    style: {
      fontFamily: "Palatino, 'Book Antiqua', serif",
      fontWeight: 400,
      letterSpacing: '-0.01em',
      fontSize: '16px',
    },
  },
  {
    name: 'Manufacturing',
    style: {
      fontFamily: "Impact, 'Arial Narrow', sans-serif",
      fontWeight: 400,
      letterSpacing: '0.04em',
      fontSize: '14px',
    },
  },
  {
    name: 'Education',
    style: {
      fontFamily: 'Verdana, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontSize: '13px',
    },
  },
];

const HeroSection = () => {
  return (
    <div className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          height: 'calc(100vh - 96px)',
          background:
            'linear-gradient(135deg, #e8e0f0 0%, #f0ece4 50%, #e4ecf0 100%)',
        }}
      >
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Data Collection
            <br />
            Services
          </h1>
          <p className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed">
            Verified B2B contacts, industry directories, and custom data
            collection services for outreach, research, and growth.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
            Request a Quote
            <span className="bg-white rounded-full p-2">
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
          </button>
          <p className="text-black/50 text-xs mt-3">
            We typically respond within 24 hours.
          </p>

          {/* Industry Marquee */}
          <div className="mt-24 w-full max-w-md overflow-hidden">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee 22s linear infinite;
              }
            `}</style>
            <div className="marquee-track">
              {[...industries, ...industries].map((industry, i) => (
                <span
                  key={i}
                  className="mx-7 shrink-0 text-black/60 whitespace-nowrap"
                  style={industry.style}
                >
                  {industry.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
