"use client";
import React, { useState } from "react";
//import Image from "next/image";
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
      image: "/WebGallery/photos/img18.jpg",
      link: "/rsvp/tech-fest-2024",
    },
    {
      id: 3,
      title: "Blockchain Expo",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/photos/img15.jpg",
      link: "/news/community-highlights",
    },
  ],
  news: [
    {
      id: 1,
      title: "Tech Industry Insights",
      description: "Explore the latest news in the tech world.",
      image: "/WebGallery/photos/img11.jpg",
      link: "/news/tech-insights",
    },
    {
      id: 2,
      title: "Community Highlights",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/photos/img24.jpg",
      link: "/news/community-highlights",
    },
    {
      id: 3,
      title: "Community Highlights",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/photos/img43.jpg",
      link: "/news/community-highlights",
    },
  ],
  analytics: [
    {
      id: 1,
      title: "Coin Gecko",
      description: "Live updates from Coin Gecko.",
      link: "https://www.geckoterminal.com/solana/pools/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG",
    },
    {
      id: 2,
      title: "Dex Screener",
      description: "Live updates from Dex Screener.",
      link: "https://dexscreener.com/solana/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG",
    },
    {
      id: 3,
      title: "Dex Tool",
      description: "Live updates from Dex Tool.",
      link: "https://www.dextools.io/app/en/solana/pair-explorer/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG",
    },
  ],
};

export default function EventsAndNews() {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "analytics">("news");

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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data[activeTab].slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#964B01] shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition-all hover:scale-105"
            >
              {/* Render iframe for specific analytics items */}
              {activeTab === "analytics" && item.id === 3 && (
                <div className="flex justify-center p-4">
                  <iframe
                    id="dextools-widget"
                    title="DEXTools Trading Chart"
                    width="400"
                    height="200"
                    src="https://www.dextools.io/widget-chart/en/solana/pe-light/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
                  ></iframe>
                </div>
              )}
              {activeTab === "analytics" && item.id === 2 && (
                <div className="flex justify-center p-4">
                  <iframe
                    id="dextswap-aggregator-widget"
                    title="DEXTswap Aggregator"
                    width="400"
                    height="200"
                    src="https://www.dextools.io/widget-aggregator/en/swap/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump"
                  ></iframe>
                </div>
              )}

              {/* Render other analytics items */}
              {(activeTab !== "analytics" || (item.id !== 2 && item.id !== 3)) && (
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{item.description}</p>
                  <div className="mt-4 text-center">
                    <Link href={item.link} passHref>
                      <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-400 transition-all">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
