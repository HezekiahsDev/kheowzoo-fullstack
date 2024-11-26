"use client";
import React from "react";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import AboutKheowzoo from "./components/AboutKheowzoo";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="scroll-mt-24 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <Hero />
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="scroll-mt-24 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <Featured />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="scroll-mt-24 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <Gallery />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="scroll-mt-24 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <Events />
        </div>
      </section>

      {/* About Kheowzoo Section */}
      <section id="about" className="scroll-mt-24 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <AboutKheowzoo />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg">
          <Contact />
        </div>
      </section>
    </>
  );
}
