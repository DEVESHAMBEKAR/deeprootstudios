import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What industries do you cover?',
    answer:
      "We cover IT services, BFSI, healthcare, education, construction, electrical, plumbing, e-commerce, manufacturing, retail, and more. If you need data for a specific sector, reach out and we'll confirm coverage.",
  },
  {
    question: 'Do you provide custom data collection?',
    answer:
      'Yes. If you have a specific data requirement — by industry, role, geography, or company type — we can scope and deliver a custom dataset for your project.',
  },
  {
    question: 'Can you collect role-based business contacts?',
    answer:
      'Yes. We provide contacts filtered by job title, seniority, and function — including decision-makers, department heads, and team leads across industries.',
  },
  {
    question: 'Do you support one-time and ongoing projects?',
    answer:
      'Both. We handle one-time data collection requests as well as recurring projects with scheduled deliveries.',
  },
  {
    question: 'How can we request a quote?',
    answer:
      'Click "Request a Quote" anywhere on this page, or email us directly at founders@deeprootstudios.in. We typically respond within 24 hours.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[42rem] mx-auto">
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: '-0.03em' }}
        >
          Common Questions
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/10">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
              >
                <span className="text-black text-lg font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-black/40 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${openIndex === index
                    ? 'max-h-40 pb-5'
                    : 'max-h-0'
                  }`}
              >
                <p className="text-black/70 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
