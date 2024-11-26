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
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      {/* Featured Section */}
      <section id="featured" className="scroll-mt-24">
        <Featured />
      </section>

      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>
      <section id="events" className="scroll-mt-24">
        <Events />
      </section>
      <section id="about" className="scroll-mt-24">
        <AboutKheowzoo />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </>
  );
}
