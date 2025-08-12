import React, { useState } from "react";

const faqsVisible = [
  {
    q: "What does Aerion Medtech do?",
    a: "Aerion Medtech offers a curated portfolio of medical technologies and solutions that address key challenges in healthcare delivery."
  },
  {
    q: "Are your devices FDA/CE approved or certified?",
    a: "Yes, we only deal with FDA, CE, ISO, CDSCO, or BIS-approved medical technologies."
  },
  {
    q: "What clinical evidence supports your products?",
    a: "Our products are backed by peer-reviewed studies, whitepapers, and clinical trials. Documentation is available on request."
  },
  {
    q: "What is your delivery and logistics process?",
    a: "We handle end-to-end logistics with priority on safe, timely, and traceable delivery."
  },
  {
    q: "Do you offer post-sale support or training?",
    a: "Yes. We provide onboarding, virtual or on-site training, and after-sales support."
  },
  {
    q: "Are you open to partnerships or representation?",
    a: "Absolutely. We welcome inquiries from OEMs, channel partners, and healthcare networks."
  },
  {
    q: "Do you serve outside of India?",
    a: "We're India-focused but open to international collaborations where possible."
  },
  {
    q: "Can I request brochures or detailed documentation?",
    a: "Yes, we provide brochures, whitepapers, IFUs, and certificates upon request."
  }
];

const faqsHidden = [
  {
    q: "Do you maintain inventory or work on demand?",
    a: "We mainly work on-demand for precision procurement, but limited stock items are also available."
  },
  {
    q: "Do you work with both government and private hospitals?",
    a: "Yes, we collaborate with public institutions, large hospital chains, and small clinics alike."
  },
  {
    q: "Do you also deal in diagnostics and consumables?",
    a: "Yes, we provide diagnostic equipment, rapid test kits, and compatible consumables."
  },
  {
    q: "How can I contact Aerion Medtech?",
    a: "You can reach out via email, phone, or the contact form on our website."
  },
  {
    q: "Do you offer credit terms or financing?",
    a: "Depending on eligibility and order volume, we may offer limited credit options."
  },
  {
    q: "Can you assist in product customization?",
    a: "Yes, we work closely with OEMs to tailor products for specific clinical needs."
  },
  {
    q: "What makes Aerion Medtech different?",
    a: "We blend clinical precision with business agility, building long-term trust—not just transactions."
  }
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-box border border-gray-200 rounded-lg overflow-hidden">
      <div
        className="faq-header flex justify-between items-center bg-[#F6F6F6] px-6 py-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#1F2F5A]">{question}</span>
        <span className="faq-icon text-xl font-bold text-[#72512E]">
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <div className="faq-content px-6 py-4 text-gray-700 text-sm sm:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="bg-white scroll-mt-20  py-16 px-4 sm:px-8 lg:px-16"
      id="faq"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-[#1F2F5A] mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqsVisible.map((faq, idx) => (
          <FAQItem key={idx} question={faq.q} answer={faq.a} />
        ))}

        {showMore &&
          faqsHidden.map((faq, idx) => (
            <FAQItem key={`hidden-${idx}`} question={faq.q} answer={faq.a} />
          ))}

        <div className="text-center pt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#1F2F5A] border border-[#1F2F5A] px-6 py-2 rounded-full hover:bg-[#1F2F5A] hover:text-white transition-all duration-200"
          >
            {showMore ? "Show Less FAQs" : "See More FAQs"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
