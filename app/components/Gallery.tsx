"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // For animations

const videoPreviews = [
  { src: "/WebGallery/videos/vid1.mp4" }, // Replace with actual video filenames
  { src: "/WebGallery/videos/vid2.mp4" },
  { src: "/WebGallery/videos/vid1.mp4" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("images");

  // Array of image filenames (ensure all images are in the public/WebGallery folder)
  const images = useMemo(
    () => Array.from({ length: 57 }, (_, i) => `img${i + 1}.jpg`), // Generate img1.jpg to img57.jpg
    []
  );

  return (
    <section className="py-8 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Gallery
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-2 font-semibold text-lg ${
              activeTab === "images" ? "text-green-500" : "text-gray-400"
            } hover:text-green-400 transition`}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 font-semibold text-lg ${
              activeTab === "videos" ? "text-green-500" : "text-gray-400"
            } hover:text-green-400 transition`}
          >
            Videos
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTab === "videos" &&
            videoPreviews.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-[260px] overflow-hidden rounded-lg">
                  <video
                    src={video.src}
                    className="w-full h-full object-fill" // Use object-fill for full-size display
                    muted
                    loop
                    autoPlay
                  />
                </div>
              </motion.div>
            ))}

          {activeTab === "images" &&
            images.slice(0, 3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <Image
                    src={`/WebGallery/photos/${image}`} // Adjust path as needed
                    alt={`Gallery Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-lg" // Enforced height for uniformity
                  />
                </div>
              </motion.div>
            ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="#featured"
            className="inline-block bg-color-primary text-color-bg py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition"
          >
            View More In Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
