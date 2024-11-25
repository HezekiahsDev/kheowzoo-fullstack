"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image"; // Importing Image from Next.js
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Importing icons from Heroicons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Use the IntersectionObserver API to detect which section is currently in view
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this value to determine when a section is considered in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Collapse the menu when a link is clicked
  };

  return (
    <header className="bg-color-bg shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Logo.png" // Path to your image in the public folder
              alt="Kheowzoo Logo"
              width={40} // Adjust the width as needed
              height={40} // Adjust the height as needed
              className="mr-2"
            />
          </Link>
          <div className="text-color-primary font-bold text-xl">
            <Link href="/">Kheowzoo</Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-color-text">
          {["home", "featured", "gallery", "events", "about", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover:text-color-primary relative ${
                  activeSection === section ? "text-color-primary" : ""
                }`}
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* Active underline */}
                {activeSection === section && (
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-color-primary"></span>
                )}
              </a>
            )
          )}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-color-primary text-color-bg py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
            onClick={handleLinkClick}
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-color-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" /> // Show close icon when menu is open
          ) : (
            <Bars3Icon className="w-6 h-6" /> // Show hamburger icon when menu is closed
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-color-bg text-color-text space-y-4 py-4">
          {["home", "featured", "gallery", "event", "about", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block text-center hover:text-color-primary ${
                  activeSection === section ? "text-color-primary" : ""
                }`}
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}
          <a
            href="#contact"
            className="block text-center bg-color-primary text-color-bg py-2 px-4 rounded-lg hover:bg-opacity-90 mx-6 mt-2"
            onClick={handleLinkClick}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
