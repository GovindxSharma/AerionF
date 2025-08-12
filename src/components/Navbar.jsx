import { useState, useEffect, useRef } from "react";
import logo from "../assets/aerionstick.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Aerion Logo" className="h-16 sm:h-20" />
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

        {/* Hamburger (mobile only) */}
        <div className="sm:hidden relative">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-[#1F2F5A] focus:outline-none z-50 relative p-2 rounded-md hover:bg-[#ae7e4b]/20 transition"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <title>Close menu</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <title>Open menu</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Subtle blurred and slightly darkened backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 backdrop-blur-sm bg-black bg-opacity-10 transition-opacity duration-300
              ${isOpen ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"} z-40`}
          />

          {/* Sliding mobile menu */}
          <aside
            ref={menuRef}
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl rounded-l-3xl
              transform transition-transform duration-300 ease-in-out z-50
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Close X inside the menu */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#ae7e4b]/20 transition"
            >
              <svg
                className="w-7 h-7 text-[#1F2F5A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col p-8 space-y-8 mt-20 font-semibold text-[#1F2F5A]">
              {["Home", "About", "Resources", "Contact"].map((item) => {
                const href = item === "Resources" ? "#faq" : `#${item.toLowerCase()}`;
                return (
                  <a
                    key={item}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-[#ae7e4b] transition transform hover:scale-105"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
          </aside>
        </div>
      </div>
    </nav>
  );
}
