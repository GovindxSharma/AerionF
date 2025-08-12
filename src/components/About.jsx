import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-[#f9f9f9] scroll-mt-20  py-20 px-4 sm:px-8 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-[#1F2F5A] space-y-20">
        {/* ABOUT THE COMPANY */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-[#72512E] pl-4">
            About the Company
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              Aerion Medtech is a healthcare innovation company committed to
              connecting healthcare professionals and medical institutions with
              advanced, certified medical technologies from around the world. We
              specialise in custom procurement, working closely with hospitals,
              clinics, and providers to deliver solutions that are precise,
              reliable, and tailored to specific clinical needs.
            </p>
            <p>
              While our current focus is on sourcing and supplying trusted
              technologies through strategic global and local partnerships with
              leading OEMs, suppliers, and distributors, we also envision
              expanding into manufacturing in the future. Every solution we
              offer is carefully selected based on international certifications,
              clinical relevance, and real-world performance. This includes
              FDA-approved, CE-marked, and ISO-compliant technologies that meet
              the highest standards of safety and effectiveness.
            </p>
            <p>
              At Aerion Medtech, we prioritise long-term partnerships built on
              trust, transparency, and measurable results. From initial
              consultation to implementation and post-purchase support, our team
              works closely with clients to ensure seamless integration and
              lasting value.
            </p>
          </div>
        </div>

        {/* OUR MISSION */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-[#72512E] pl-4">
            Our Mission
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              Our mission is simple yet powerful: to make healthcare more
              efficient, innovative, and accessible through thoughtful
              procurement today and responsible manufacturing in the future. We
              are committed to delivering advanced, reliable solutions while
              ensuring that quality healthcare is within reach for everyone,
              from all walks of life, so that no one is left out.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#faq"
              className="inline-block px-6 sm:px-8 py-3 text-sm sm:text-base bg-[#1F2F5A] text-white font-semibold rounded-md hover:bg-[#72512E] transition duration-200 shadow"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
