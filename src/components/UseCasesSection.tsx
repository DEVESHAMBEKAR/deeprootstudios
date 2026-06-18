import { ArrowRight } from 'lucide-react';

const UseCasesSection = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="md:pr-12 md:pt-2">
          <p className="text-black/60 text-sm mb-2">How Teams Use Our Data</p>
          <h2
            className="text-5xl md:text-6xl font-medium leading-none mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Use cases
          </h2>
          <p className="text-black/60 text-base leading-relaxed max-w-sm">
            From cold outreach to market research — our datasets power real
            business workflows across sales, marketing, and operations.
          </p>
        </div>

        {/* Right Column: Dark Card */}
        <div
          className="group relative rounded-3xl overflow-hidden min-h-[720px]"
          style={{ backgroundColor: '#2B2644' }}
        >
          {/* Content */}
          <div className="relative z-10 p-10 md:p-12">
            <h3
              className="text-white text-4xl md:text-5xl font-medium leading-tight mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Sales Outreach
            </h3>
            <p className="text-white/70 text-base max-w-md mb-8">
              Equip your sales team with verified decision-maker contacts —
              filtered by industry, role, and location — ready for outreach on
              day one.
            </p>

            {/* Talk to our team Link */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-white font-medium text-base"
            >
              <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
              Talk to our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
