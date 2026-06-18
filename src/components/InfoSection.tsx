import { ArrowRight } from 'lucide-react';

const InfoSection = () => {
  return (
    <section id="services" className="bg-[#F5F5F5] px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1: 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left: Heading + Button */}
          <div>
            <h2
              className="text-black text-3xl sm:text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 md:mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              What We Do
            </h2>
            <button className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              View All Services
              <span className="bg-white rounded-full p-2">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </button>
          </div>

          {/* Right: Paragraph */}
          <p className="text-black/70 text-xl sm:text-2xl md:text-3xl leading-relaxed">
            We provide structured, verified business data — contacts,
            directories, and custom datasets — built for teams that need
            reliable information for outreach and growth.
          </p>
        </div>

        {/* Row 2: 4-col card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Dark, spans 2 cols */}
          <div
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#2B2644' }}
          >
            <div className="p-7 min-h-80 flex flex-col justify-between">
              <h3
                className="text-white text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                B2B Contact Data
              </h3>
              <p className="text-white/60 text-base max-w-xs">
                Verified contacts across multiple industries — names, titles,
                emails, phone numbers, and company details for your outreach
                campaigns.
              </p>
            </div>
          </div>

          {/* Card 2: Solid dark */}
          <div
            className="rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            style={{ backgroundColor: '#2B2644' }}
          >
            <h3
              className="text-white text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Industry
              <br />
              Directories
            </h3>
            <p className="text-white/60 text-base">
              Structured directory data for specific sectors — IT, BFSI,
              healthcare, construction, and more.
            </p>
          </div>

          {/* Card 3: Solid dark */}
          <div
            className="rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            style={{ backgroundColor: '#2B2644' }}
          >
            <h3
              className="text-white text-2xl font-medium leading-snug"
              style={{ letterSpacing: '-0.02em' }}
            >
              Custom Data
              <br />
              Collection
            </h3>
            <p className="text-white/60 text-base">
              Tell us what you need. We scope, collect, organize, and deliver
              datasets tailored to your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
