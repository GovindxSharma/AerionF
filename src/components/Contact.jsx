import React, { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xkgbegry", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus({ ok: true, msg: "✅ Inquiry submitted successfully!" });
    } else {
      setStatus({ ok: false, msg: "❌ Something went wrong. Try again later." });
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20  scroll-mt-20 px-6 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1F2F5A]">
            Start the Conversation
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Let’s build something remarkable. Whether you're a hospital, partner, or innovator — we’re listening.
          </p>
          <div className="space-y-2 text-[#72512E] text-sm sm:text-base">
            <p>
              <i className="fas fa-envelope mr-2 text-[#1F2F5A]"></i>
              info@aerionmedtech.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-[#1F2F5A]"></i>
              Ahmedabad, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#72512E] focus:border-[#72512E] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#72512E] focus:border-[#72512E] outline-none"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-800">
                  Organisation
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Hospital"
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#72512E] focus:border-[#72512E] outline-none"
                />
              </div>
              <div>
                <label htmlFor="designation" className="block text-sm font-semibold text-gray-800">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="Procurement Head"
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#72512E] focus:border-[#72512E] outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-800">
                Nature of Your Inquiry
              </label>
              <select
              id="inquiry"
              name="inquiry"
              required
              defaultValue=""
              className="mt-1 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#72512E] focus:border-[#72512E] outline-none"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Medical Product Enquiry</option>
              <option>Custom Procurement Request</option>
              <option>Distributorship or Sales Partnership</option>
              <option>Manufacturer/Supplier Collaboration</option>
              <option>Healthcare Institution Collaboration</option>
              <option>Technical Support or Documentation</option>
              <option>General or Other Enquiry</option>
            </select>
            
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell us how we can help..."
                className="mt-1 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#72512E] focus:border-[#72512E] outline-none"
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <div className="text-right">
              <button
                type="submit"
                className="bg-[#72512E] hover:bg-[#5b3f22] transition px-6 py-3 rounded-md text-white font-semibold"
              >
                Submit Inquiry
              </button>
            </div>
          </form>

          {status && (
            <div
              className={`mt-4 text-center text-sm font-medium ${
                status.ok ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.msg}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
