import { useState, useEffect } from "react";
import bgImage from "../assets/bg4.jpg";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  // Auto-open modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
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
          <p className="text-base sm:text-lg mb-8 leading-relaxed">
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

      {/* Floating Button */}
      {!showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 left-6 bg-[#ae7e4b] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#95683d] transition"
        >
          Discover
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false);
                window.dispatchEvent(new Event("aboutClosed")); // 🚀 Notify chatbot
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold text-[#1F2F5A] mb-3">
              Discover Aerion Medtech
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              At{" "}
              <span className="font-semibold text-[#ae7e4b]">
                Aerion Medtech
              </span>
              , we specialize in sourcing and supplying everything a medical
              institution needs-from advanced diagnostic equipment and surgical
              tools to everyday clinical essentials. We aim to work closely with
              hospitals, clinics, and healthcare professionals to provide
              reliable access to high-quality, innovative medical technologies.
              Our mission is to be the most trusted partner in medical
              procurement by staying ahead of the curve in discovering and
              delivering the latest advancements in medical technology and
              healthcare equipment.
            </p>
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
