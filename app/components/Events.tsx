"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type EventItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

type AnalyticsItem = {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string; // Make the image field optional for AnalyticsItem
};

type TabData = {
  events: EventItem[];
  news: NewsItem[];
  analytics: AnalyticsItem[];
};

const data: TabData = {
  events: [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "/WebGallery/photos/img3.jpg",
      link: "/rsvp/tech-conference-2024",
    },
    {
      id: 2,
      title: "Tech Fest 2024",
      description: "Discover emerging trends and network with top innovators.",
      image: "/WebGallery/photos/img3.jpg",
      link: "/rsvp/tech-fest-2024",
    },
    {
      id: 3,
      title: "Blockchain Expo",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/photos/img3.jpg",
      link: "/news/community-highlights",
    },
  ],
  news: [
    {
      id: 1,
      title: "Tech Industry Insights",
      description: "Explore the latest news in the tech world.",
      image: "/WebGallery/photos/img3.jpg",
      link: "/news/tech-insights",
    },
    {
      id: 2,
      title: "Community Highlights",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/photos/img3.jpg",
      link: "/news/community-highlights",
    },
    {
      id: 3,
      title: "Community Highlights",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/photos/img3.jpg",
      link: "/news/community-highlights",
    },
  ],
  analytics: [
    {
      id: 1,
      title: "Token Price Chart 1",
      description: "Live updates from Coin Gecko.",
      link: "https://www.geckoterminal.com/solana/pools/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults",
    },
    {
      id: 2,
      title: "Token Price Chart 2",
      description: "Live updates from Dex Screener.",
      link: "https://dexscreener.com/solana/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG",
    },
    {
      id: 3,
      title: "Token Price Chart 3",
      description: "Live updates from Dex Tool.",
      link: "https://www.dextools.io/app/en/solana/pair-explorer/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG",
    },
  ],
};

export default function EventsAndNews() {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "analytics">(
    "news"
  );

  return (
    <section className="py-8 bg-black" id="events">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-500">
          News & Events
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {["news", "events", "analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab as "news" | "events" | "analytics")
              }
              className={`px-6 py-2 font-semibold text-lg capitalize ${
                activeTab === tab ? "text-green-500" : "text-gray-400"
              } hover:text-green-400 transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data[activeTab].slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-[#964B00] shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition-all hover:scale-105"
            >
              {/* Conditionally render Image for events and news only */}
              {activeTab !== "analytics" && item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{item.description}</p>
                <div className="mt-4 text-center">
                  <Link href={item.link} passHref>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-400 transition-all">
                      {activeTab === "events" ? "RSVP" : "Read More"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" Link */}
        <div className="mt-6 text-center">
          <Link
            href={`/${activeTab}`}
            className="text-green-400 hover:underline"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
