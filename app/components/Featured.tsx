"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface Tweet {
  id: string;
  text: string;
  created_at?: string;
  attachments?: {
    media_keys?: string[];
  };
  media?: { url: string }[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring Blockchain in Conservation",
    image: "/WebGallery/photos/img40.jpg",
    link: "/blog/blockchain-conservation",
  },
  {
    id: 2,
    title: "Technology Trends for Wildlife Protection",
    image: "/WebGallery/photos/img38.jpg",
    link: "/blog/tech-trends-wildlife",
  },
  {
    id: 3,
    title: "Community Contributions to Conservation",
    image: "/WebGallery/photos/img29.jpg",
    link: "/blog/community-conservation",
  },
];

const videoLinks = [
  {
    url: "https://www.youtube.com/embed/owZx70FfmSo?autoplay=1",
    description: "Kheowzoo - The best coin in 2024💫",
  },
  {
    url: "https://www.youtube.com/embed/4Z9b_v8sUPI",
    description: "Learn how technology is reshaping conservation efforts.",
  },
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
  },
];

export default function Featured() {
  const [activeTab, setActiveTab] = useState<"tweets" | "blog" | "watch">("tweets");
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fetchTweets = async (username: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/twitter?username=${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch tweets");
      }
      const data = await response.json();
      const tweetsData = data.data.map((tweet: Tweet) => ({
        ...tweet,
        media: data.includes?.media || [],
      }));
      setTweets(tweetsData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchTweets("kheowzooFROMSOL");
  };

  useEffect(() => {
    if (activeTab === "tweets") {
      fetchTweets("kheowzooFROMSOL");
    }
  }, [activeTab]);

  return (
    <section id="featured" className="mt-8 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Featured Content
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {["tweets", "blog", "watch"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "tweets" | "blog" | "watch")}
              className={`px-6 py-2 font-semibold capitalize ${
                activeTab === tab ? "text-color-primary" : "text-gray-600"
              }`}
            >
              {tab === "tweets" ? "Tweets" : tab === "blog" ? "Blog" : "Watch"}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
            transition: { duration: 1.2 },
          }}
        >
          <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "tweets" &&
              (loading ? (
                <p className="text-center justify-center text-color-primary">Loading tweets...</p>
              ) : error ? (
                <div className="text-center">
                  <p className="text-red-500">{error}</p>
                  <button
                    onClick={handleRefresh}
                    className="mt-4 bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all"
                  >
                    Refresh
                  </button>
                </div>
              ) : tweets.length > 0 ? (
                tweets.slice(0, 3).map((tweet) => (
                  <div
                    key={tweet.id}
                    className="bg-[#121212] shadow-lg rounded-lg p-4 flex flex-col"
                  >
                    <p className="text-white text-md mb-4">{tweet.text}</p>
                    {tweet.media &&
                      tweet.media.map((media, index) => (
                        <Image
                          key={index}
                          src={media.url}
                          alt="Tweet Media"
                          width={400}
                          height={300}
                          className="mb-4 rounded"
                        />
                      ))}
                    <Link
                      href={`https://twitter.com/kheowzooFROMSOL/status/${tweet.id}`}
                      target="_blank"
                      className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all text-center"
                    >
                      View on Twitter
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No tweets found.</p>
              ))}

            {/* Blog and Watch tabs remain unchanged */}
            {activeTab === "blog" &&
              blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#8B5C29] h-full justify-center items-center shadow-lg rounded-lg p-4 flex flex-col"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="mb-4 w-[300px] h-[200px] rounded"
                  />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {post.title}
                  </h3>
                  <Link
                    href={post.link}
                    className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all text-center"
                  >
                    Read More
                  </Link>
                </div>
              ))}

            {activeTab === "watch" &&
              videoLinks.map((video, index) => (
                <div
                  key={index}
                  className="bg-[#8B5C29] h-full shadow-lg rounded-lg p-4 flex flex-col"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={video.url + (index === 0 ? "&autoplay=1" : "")}
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-[200PX] rounded"
                    ></iframe>
                  </div>
                  <p className="text-sm text-white">{video.description}</p>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
