"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { section } from "framer-motion/client";

const data = {
  events: [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "https://picsum.photos/400/300?random=1",
      link: "/rsvp/tech-conference-2024",
    },
    {
      id: 2,
      title: "Tech Fest 2024",
      description: "Discover emerging trends and network with top innovators.",
      image: "https://picsum.photos/400/300?random=2",
      link: "/rsvp/tech-fest-2024",
    },
    {
      id: 3,
      title: "Blockchain Expo",
      description: "Celebrating the achievements of our tech community.",
      image: "https://picsum.photos/400/300?random=6",
      link: "/news/community-highlights",
    },
  ],
  news: [
    {
      id: 1,
      title: "Tech Industry Insights",
      description: "Explore the latest news in the tech world.",
      image: "https://picsum.photos/400/300?random=3",
      link: "/news/tech-insights",
    },
    {
      id: 2,
      title: "Community Highlights",
      description: "Celebrating the achievements of our tech community.",
      image: "https://picsum.photos/400/300?random=4",
      link: "/news/community-highlights",
    },
    {
      id: 3,
      title: "Community Highlights",
      description: "Celebrating the achievements of our tech community.",
      image: "https://picsum.photos/400/300?random=5",
      link: "/news/community-highlights",
    },
  ],
};

export default function EventsAndNews() {
  const [activeTab, setActiveTab] = useState<"events" | "news">("events");

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="events">
      <motion.section
        ref={ref}
        id="events-news"
        className="py-8"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-color-primary">
            Events and News
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            {["events", "news"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "events" | "news")}
                className={`px-6 py-2 font-semibold capitalize ${
                  activeTab === tab ? "text-color-primary" : "text-gray-600"
                }`}
              >
                {tab === "events" ? "Events" : "Community News"}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data[activeTab].map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-[#964B00] shadow-lg rounded-lg overflow-hidden border border-gray-200"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white">{item.description}</p>
                  <div className="mt-4 text-center">
                    <Link href={item.link} passHref>
                      <button className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all">
                        {activeTab === "events" ? "RSVP" : "Read More"}
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}
