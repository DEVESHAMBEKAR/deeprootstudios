import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevX = useRef<number | null>(null);
  const targetTime = useRef<number>(0);
  const isSeeking = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile Autoplay Hook
    const checkMobilePlayback = () => {
      if (window.innerWidth < 1024) {
        video.autoplay = true;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    checkMobilePlayback();
    window.addEventListener('resize', checkMobilePlayback);

    // Desktop Mouse Scrubbing Hook
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !video.duration) {
        prevX.current = null;
        return;
      }

      if (prevX.current === null) {
        prevX.current = e.clientX;
        targetTime.current = video.currentTime;
        return;
      }

      const delta = e.clientX - prevX.current;
      prevX.current = e.clientX;

      targetTime.current += (delta / window.innerWidth) * 0.8 * video.duration;
      
      // Clamp the time between 0 and duration
      targetTime.current = Math.max(0, Math.min(video.duration, targetTime.current));

      if (!isSeeking.current) {
        isSeeking.current = true;
        video.currentTime = targetTime.current;
      }
    };

    const handleSeeked = () => {
      isSeeking.current = false;
      if (Math.abs(video.currentTime - targetTime.current) > 0.01) {
        isSeeking.current = true;
        video.currentTime = targetTime.current;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      window.removeEventListener('resize', checkMobilePlayback);
      window.removeEventListener('mousemove', handleMouseMove);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

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
        {/* Container element: Background Video */}
        <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-right lg:object-right-bottom"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4"
              type="video/mp4"
            />
          </video>
        </div>

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
