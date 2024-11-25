"use client";
import React, { useState } from "react";

export default function AboutKheowzoo() {
  const [activeTab, setActiveTab] = useState<"who" | "why" | "vision">("who");

  return (
    <section className="py-8 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Kheowzoo
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("who")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "who" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Who We Are
          </button>
          <button
            onClick={() => setActiveTab("why")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "why" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "vision" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Vision and Mission
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "who" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="max-w-2xl mx-auto">
                KheowZoo is a trailblazing initiative at the intersection of
                blockchain technology and wildlife conservation. Our mission is
                to connect the digital world with real-world impact, leveraging
                Web3 tools to preserve wildlife, support communities, and
                inspire collective action. We are a global community of
                innovators, conservationists, and blockchain enthusiasts working
                together to make a difference, one block at a time.
              </p>
            </div>
          )}

          {activeTab === "why" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Us</h3>
              <p className="max-w-2xl mx-auto">
                - <strong>Innovation Meets Purpose:</strong> At KheowZoo, we
                merge cutting-edge blockchain technology with meaningful
                conservation efforts, ensuring transparency, security, and
                scalability in all we do.
                <br />- <strong>Community-Centric:</strong> Our platform fosters
                collaboration and engagement, empowering individuals and
                organizations to contribute to wildlife preservation.
                <br />- <strong>Trust and Transparency:</strong> With verifiable
                smart contracts and a focus on decentralized interactions, we
                ensure every contribution and initiative is accountable and
                impactful.
                <br />- <strong>Future-Focused:</strong> By integrating Web3, we
                are building a sustainable model for conservation that adapts to
                the needs of tomorrow.
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="px-8">
              <h3 className="text-2xl font-bold mb-4">Vision and Mission</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Vision
                  </h4>
                  <p>
                    To create a world where technology and nature coexist
                    harmoniously, ensuring a thriving future for wildlife and
                    humanity.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Mission
                  </h4>
                  <p>
                    - Empower conservation through innovative blockchain
                    solutions.
                    <br />
                    - Build a global network of individuals and organizations
                    committed to wildlife preservation.
                    <br />- Provide a transparent, decentralized platform that
                    inspires action and drives meaningful change.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
