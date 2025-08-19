import { useState, useEffect, useRef } from "react";
import logo from "../assets/aerionstick.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Enquire", href: "#enquire", id: "enquire" },
    { name: "Resources", href: "#faq", id: "faq" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "about" || entry.target.id === "OurServices") {
              setActiveSection("about");
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        threshold: 0.5, // trigger when 50% of section is visible
        rootMargin: "-80px 0px -80px 0px", // offset for fixed navbar
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Smooth scroll with offset & immediate active update
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // height of navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveSection(id); // ensure activeSection updates immediately
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center transition-all duration-300">
          <img
            src={logo}
            alt="Aerion Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "h-12 sm:h-16" : "h-16 sm:h-20"
            }`}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative block px-3 py-1 rounded-lg transition duration-300 ${
                  activeSection === link.id
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#1F2F5A] to-[#ae7e4b] shadow-[0_4px_12px_rgba(174,126,75,0.35)] scale-105"
                    : "text-[#1F2F5A] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1F2F5A] hover:to-[#ae7e4b] hover:shadow-[0_4px_12px_rgba(174,126,75,0.35)] hover:scale-105"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 backdrop-blur-sm bg-black bg-opacity-10 transition-opacity duration-300
              ${isOpen ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"} z-40`}
          />

          <aside
            ref={menuRef}
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl rounded-l-3xl
              transform transition-transform duration-300 ease-in-out z-50
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
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
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-lg px-3 py-1 rounded-lg transition duration-300 ${
                    activeSection === link.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#1F2F5A] to-[#ae7e4b] shadow-[0_4px_12px_rgba(174,126,75,0.35)] scale-105"
                      : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1F2F5A] hover:to-[#ae7e4b] hover:shadow-[0_4px_12px_rgba(174,126,75,0.35)] hover:scale-105"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </nav>
  );
}


