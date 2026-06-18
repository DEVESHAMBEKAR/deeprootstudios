const reasons = [
  'Multi-industry coverage',
  'Custom project support',
  'Structured and usable datasets',
  'Business-focused delivery',
  'Built for outreach, research, and partnerships',
];

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading */}
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Why teams choose us
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm">
              We help businesses access structured, relevant, and usable
              business data across multiple industries for outreach, research,
              partnerships, and market expansion.
            </p>
          </div>

          {/* Right: Bullet list */}
          <div className="flex flex-col gap-5 md:pt-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 border-b border-black/10 pb-5"
              >
                <span className="text-black/30 text-lg mt-0.5">·</span>
                <span className="text-black/70 text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
