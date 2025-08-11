import React from "react";
import founder from "../assets/founder.jpg";

const Services = () => {
  return (
    <section
      id="OurServices"
      className="bg-white py-24 px-6 sm:px-12 lg:px-24 text-[#1F2F5A] space-y-24"
    >
      {/* FOUNDER'S NOTE */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* TEXT */}
        <div className="flex-1 space-y-6">
          <h4 className="text-3xl sm:text-4xl font-bold border-l-4 border-[#72512E] pl-4">
            Founder’s Note
          </h4>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Aerion Medtech was founded with a clear purpose: to bring
              innovative, intelligent, and forward-looking solutions to the
              healthcare ecosystem. Our mission is to introduce what has not yet
              been done, and to rethink what already exists in ways that are
              smarter, more robust, and more accessible for both patients and
              healthcare professionals.
            </p>
            <p>
              We are driven by the belief that true healthcare innovation is not
              just about technology, but about relevance, usability, and trust.
              Every solution we offer is guided by this mindset. We design with
              intention, rooted in real-world needs and shaped by a commitment
              to meaningful impact.
            </p>
            <p>
              At Aerion Medtech, we are not defined by a single product or
              category. If a solution improves healthcare, simplifies delivery,
              or strengthens outcomes, it belongs within our vision. We are here
              to create systems that are thoughtful, adaptable, and capable of
              shaping a better future for care.
            </p>
            <p className="font-semibold">
              We do not wait for transformation. We lead it with responsibility,
              precision, and a clear long-term vision.
            </p>
            <p className="italic text-[#72512E] font-medium">
              — Aarya Lekhadia
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <img
              src={founder}
              alt="Aarya Lekhadia - Founder"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] border-4 border-[#1F2F5A]"
            />
          </div>
        </div>
      </div>

      {/* ABOUT THE FOUNDER */}
      <div className="max-w-5xl mx-auto bg-[#f9f9f9] rounded-xl border border-gray-200 shadow-md p-6 sm:p-10 space-y-6">
        <h4 className="text-3xl sm:text-4xl font-bold border-l-4 border-[#72512E] pl-4">
          About the Founder
        </h4>
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            Aarya Lekhadia, the founder of Aerion Medtech and a Biomedical
            Engineer by profession, brings a distinctive combination of
            technical mastery and entrepreneurial leadership to the field of
            healthcare innovation. Educated at the University of Pennsylvania
            and The Pennsylvania State University, he has built a robust
            multidisciplinary foundation that integrates engineering excellence
            with strategic insight.
          </p>
          <p>
            With deep expertise in biomedical devices, healthcare systems, and
            product development, Aarya operates at the intersection of
            innovation and real-world impact. His approach is grounded in
            addressing critical healthcare challenges through purposeful,
            scalable solutions.
          </p>
          <p>
            Drawing from the legacy of a third-generation business family and
            guided by a strong commitment to responsible innovation, he leads
            Aerion Medtech with clarity, precision, and vision. His leadership
            reflects a rare blend of technical depth, strategic insight, and
            unwavering drive to create meaningful change. He believes that true
            healthcare innovation must be globally capable and locally relevant,
            built to serve where it matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
