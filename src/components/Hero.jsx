import bgImage from "../assets/bg4.jpg"; // update path as needed

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 sm:px-12 md:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F2F5A]/80 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        {/* Main Heading */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Transforming Healthcare with Innovative Medical Solutions
        </h3>

        {/* Subheading */}
        <span className="block text-lg sm:text-xl font-medium mb-4 text-[#ae7e4b]">
          Smarter Solutions. Safer Clinics. Stronger Outcomes.
        </span>

        {/* Paragraph */}
        <p className="text-base sm:text-lg mb-8 leading-relaxed text-white">
          Aerion Medtech delivers certified, evidence-backed healthcare
          solutions designed to elevate safety, performance, and patient
          outcomes.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#ContactUs"
            className="bg-white text-[#1F2F5A] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            PARTNER WITH US
          </a>

          <div className="flex items-center gap-4 text-sm sm:text-base font-medium">
            <a href="#ContactUs" className="text-white hover:underline">
              Request a Demo
            </a>
            <span className="text-white/70">|</span>
            <a href="#about" className="text-white hover:underline">
              Innovate with Aerion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
