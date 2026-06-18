const steps = [
  {
    number: '01',
    title: 'Share Your Requirement',
    body: 'Tell us the industry, roles, geography, and data fields you need.',
  },
  {
    number: '02',
    title: 'We Define Scope',
    body: 'We confirm the dataset structure, volume, and delivery timeline.',
  },
  {
    number: '03',
    title: 'We Collect & Organize',
    body: 'Our team collects, verifies, and structures the data.',
  },
  {
    number: '04',
    title: 'Review & Delivery',
    body: 'You receive the final dataset in your preferred format.',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: '-0.03em' }}
        >
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-7 min-h-52 flex flex-col justify-between"
            >
              <span
                className="text-black/20 text-4xl font-medium"
                style={{ letterSpacing: '-0.02em' }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="text-black text-xl font-medium mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {step.title}
                </h3>
                <p className="text-black/60 text-base leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
