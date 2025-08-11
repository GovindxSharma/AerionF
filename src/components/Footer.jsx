import React, { useState } from "react";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#1F2F5A] text-white pt-12 pb-6 px-6 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-[#F5DEB3] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#72512E] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#72512E] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#72512E] transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#72512E] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#F5DEB3] mb-4">
              Connect With Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@aerionmedtech.com"
                  className="hover:text-[#72512E] transition"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aerionmedtech/"
                  className="hover:text-[#72512E] transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aerionmedtech"
                  className="hover:text-[#72512E] transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/15wHuJBbeK"
                  className="hover:text-[#72512E] transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#F5DEB3] mb-4">
              Locations
            </h3>
            <ul className="space-y-2 text-sm">
              <li>India</li>
              <li>Operations Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-center border-t border-[#72512E]/30 pt-6">
          <p className="text-gray-300">
            © 2025 Aerion Medtech. All rights reserved. |{" "}
            <span
              onClick={() => openModal("privacy")}
              className="underline cursor-pointer text-[#F5DEB3]"
            >
              Privacy Policy
            </span>{" "}
            |{" "}
            <span
              onClick={() => openModal("terms")}
              className="underline cursor-pointer text-[#F5DEB3]"
            >
              Terms of Use
            </span>
          </p>
        </div>
      </footer>

      {/* Reusable Modal */}
      {activeModal && (
        <div
          onClick={(e) => e.target.id === "modal-overlay" && closeModal()}
          id="modal-overlay"
          className="fixed inset-0 backdrop-blur-md bg-black/10 flex items-center justify-center z-50 transition-all duration-300"
        >
          <div
            className="bg-white max-w-2xl w-full rounded-xl shadow-2xl relative p-6 sm:p-8 overflow-hidden border border-gray-200"
            style={{
              animation: "fadeInUp 0.3s ease-out",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-black transition text-2xl"
            >
              &times;
            </button>

            <div
              className="overflow-y-auto pr-3"
              style={{
                maxHeight: "75vh",
                scrollbarWidth: "thin",
                scrollbarColor: "#72512E #f0f0f0",
              }}
            >
              {activeModal === "privacy" && (
                <>
                  <h2 className="text-2xl font-bold text-[#1F2F5A] mb-3">
                    Privacy Policy
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">
                    <strong>Effective Date:</strong> 25 July 2025
                  </p>
                  <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                    <p>
                      Welcome to Aerion Medtech. We are committed to protecting
                      your privacy and safeguarding your personal information.
                      This policy explains how we collect, use, share, and
                      protect your data when you use our site or services.
                    </p>
                    <p>
                      <strong>1. Information We Collect</strong>
                      <br />• Personal info (via forms): Name, email, phone
                      <br />• Usage data: IP, browser type, device info
                      <br />• Cookies: For user experience improvements
                    </p>
                    <p>
                      <strong>2. How We Use Your Information</strong>
                      <br />• To respond and support you
                      <br />• To send updates (if opted in)
                      <br />• To enhance site functionality and for compliance
                    </p>
                    <p>
                      <strong>3. Data Sharing & Security</strong>
                      <br />• No selling of data
                      <br />• Shared only with trusted service providers
                      <br />• Secured via industry-standard safeguards
                    </p>
                    <p>
                      <strong>4. Your Rights</strong>
                      <br />• Access, edit, delete your data
                      <br />• Withdraw consent anytime
                      <br />• Request usage details
                    </p>
                    <p>
                      <strong>5. Third-Party Links</strong>
                      <br />• We’re not responsible for external sites’ privacy
                      practices.
                    </p>
                    <p>
                      <strong>6. Updates</strong>
                      <br />• This policy may be updated. For any queries, email:{" "}
                      <a
                        href="mailto:info@aerionmedtech.com"
                        className="text-[#1F2F5A] underline"
                      >
                        info@aerionmedtech.com
                      </a>
                    </p>
                  </div>
                </>
              )}

              {activeModal === "terms" && (
                <>
                  <h2 className="text-2xl font-bold text-[#1F2F5A] mb-4">
                    Terms of Use
                  </h2>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Effective Date:</strong> 25 July 2025
                  </p>
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                    <p>
                      <strong>1. Permitted Use</strong>
                      <br />• This website is provided for informational
                      purposes only.
                      <br />• You agree not to use the website or its content
                      for any unlawful, harmful, or unauthorized purposes.
                    </p>
                    <p>
                      <strong>2. Intellectual Property (IP)</strong>
                      <br />• All website content, including text, graphics,
                      logos, and other materials, is the exclusive property of
                      Aerion Medtech.
                      <br />• No content may be copied, reused, or distributed
                      without our prior written consent.
                    </p>
                    <p>
                      <strong>3. Disclaimer</strong>
                      <br />• The information provided on this website is made
                      available on an "as is" and "as available" basis.
                      <br />• We make no warranties or representations about
                      the accuracy, reliability, or completeness of the
                      content.
                    </p>
                    <p>
                      <strong>4. Limitations of Liability</strong>
                      <br />• Aerion Medtech shall not be liable for any direct,
                      indirect, incidental, or consequential damages arising
                      from your use or inability to use the website or its
                      content.
                    </p>
                    <p>
                      <strong>5. Third-Party Links</strong>
                      <br />• This website may contain links to external
                      websites or resources.
                      <br />• We are not responsible for the content or
                      practices of any third-party sites.
                    </p>
                    <p>
                      <strong>6. Changes to Terms</strong>
                      <br />• We reserve the right to modify these Terms of Use
                      at any time, without prior notice.
                      <br />• Continued use of the site implies acceptance of
                      the current version of these Terms.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal fade-in animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          /* Custom scrollbar */
          div::-webkit-scrollbar {
            width: 6px;
          }
          div::-webkit-scrollbar-track {
            background: #f0f0f0;
            border-radius: 3px;
          }
          div::-webkit-scrollbar-thumb {
            background: #72512E;
            border-radius: 3px;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
