import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Type definitions
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
};

type TabData = {
  events: EventItem[];
  news: NewsItem[];
  analytics: AnalyticsItem[];
};

// Sample data
const data: TabData = {
  events: [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "/WebGallery/img29.jpg",
      link: "/rsvp/tech-conference-2024",
    },
    {
      id: 2,
      title: "Tech Fest 2024",
      description: "Discover emerging trends and network with top innovators.",
      image: "/WebGallery/img4.jpg",
      link: "/rsvp/tech-fest-2024",
    },
    {
      id: 3,
      title: "Blockchain Expo",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/img9.jpg",
      link: "/news/community-highlights",
    },
  ],
  news: [
    {
      id: 1,
      title: "Tech Industry Insights",
      description: "Explore the latest news in the tech world.",
      image: "/WebGallery/img12.jpg",
      link: "/news/tech-insights",
    },
    {
      id: 2,
      title: "Community Highlights",
      description: "Celebrating the achievements of our tech community.",
      image: "/WebGallery/img18.jpg",
      link: "/news/community-highlights",
    },
    {
      id: 3,
      title: "Industry Updates",
      description: "Stay informed about industry developments.",
      image: "/WebGallery/img14.jpg",
      link: "/news/industry-updates",
    },
  ],
  analytics: [
    {
      id: 1,
      title: "Token Price Chart 1",
      description: "Live updates from Coin Gecko.",
    },
    {
      id: 2,
      title: "Token Price Chart 2",
      description: "Live updates from Dex Screener.",
    },
    {
      id: 3,
      title: "Token Price Chart 3",
      description: "Live updates from Dex Tool.",
    },
  ],
};

// Type guard to differentiate between items
const hasImageAndLink = (
  item: EventItem | NewsItem | AnalyticsItem
): item is EventItem | NewsItem => {
  return (item as EventItem | NewsItem).image !== undefined;
};

export default function EventsAndNews() {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "analytics">(
    "news"
  );

  return (
    <section id="events" className="mt-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
        Events and News
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        {["news", "events", "analytics"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "news" | "events" | "analytics")}
            className={`px-6 py-2 font-semibold capitalize ${
              activeTab === tab ? "text-color-primary" : "text-gray-600"
            }`}
          >
            {tab === "news"
              ? "News"
              : tab === "events"
              ? "Events"
              : "Analytics"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data[activeTab].map((item) =>
          hasImageAndLink(item) ? (
            <div
              key={item.id}
              className="relative bg-[#964B00] shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-sm text-white">{item.description}</p>
                <div className="mt-4 text-center">
                  <Link href={item.link} passHref>
                    <button className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all">
                      {activeTab === "events" ? "RSVP" : "Read More"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              className="relative bg-[#964B00] shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4 text-center"
            >
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-sm text-white">{item.description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
