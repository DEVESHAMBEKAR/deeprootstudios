const CTABannerSection = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 pb-24">
      <div className="max-w-[88rem] mx-auto">
        <div
          className="rounded-2xl p-12 md:p-16 text-center"
          style={{ backgroundColor: '#2B2644' }}
        >
          <h2
            className="text-white text-4xl md:text-5xl font-medium leading-tight mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Ready to get started?
          </h2>
          <p className="text-white/60 text-base mb-10 max-w-md mx-auto">
            Tell us what you need — we'll scope it and get back to you within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black rounded-full px-8 py-3 font-medium text-base hover:bg-gray-100 transition-colors duration-200">
              Request a Quote
            </button>
            <button className="border border-white/30 text-white rounded-full px-8 py-3 font-medium text-base hover:border-white/60 transition-colors duration-200">
              Talk to Us
            </button>
          </div>
          <p className="text-white/40 text-xs mt-6">
            For partnerships, integrations, and enterprise data plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
