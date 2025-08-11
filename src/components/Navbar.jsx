import { useState } from "react";
import logo from "../assets/aerionstick.PNG"; // update path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Aerion Logo" className="h-16 sm:h-20" />
        </div>

        {/* Hamburger (visible on mobile only) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1F2F5A] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <a
              href="#"
              className="block text-[#1F2F5A] hover:text-[#72512E] transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-[#1F2F5A] hover:text-[#72512E] transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="block text-[#1F2F5A] hover:text-[#72512E] transition"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-[#1F2F5A] hover:text-[#72512E] transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="sm:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#"
                className="block text-[#1F2F5A] hover:text-[#72512E] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-[#1F2F5A] hover:text-[#72512E] transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block text-[#1F2F5A] hover:text-[#72512E] transition"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-[#1F2F5A] hover:text-[#72512E] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
