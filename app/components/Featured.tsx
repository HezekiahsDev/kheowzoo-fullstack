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
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring Blockchain in Conservation",
    image: "https://picsum.photos/400/300?random=10",
    link: "/blog/blockchain-conservation",
  },
  {
    id: 2,
    title: "Tech Trends for Wildlife Protection",
    image: "https://picsum.photos/400/300?random=11",
    link: "/blog/tech-trends-wildlife",
  },
  {
    id: 3,
    title: "Community Contributions to Conservation",
    image: "https://picsum.photos/400/300?random=12",
    link: "/blog/community-conservation",
  },
];

export default function Featured() {
  const [activeTab, setActiveTab] = useState<"tweets" | "blog">("tweets");
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fetchTweets = async (username: string): Promise<Tweet[]> => {
    const response = await fetch(`/api/twitter?username=${username}`);
    if (!response.ok) {
      throw new Error("Failed to fetch tweets");
    }
    return response.json();
  };

  useEffect(() => {
    if (activeTab === "tweets") {
      fetchTweets("kheowzoo_CTO")
        .then((data) => setTweets(data))
        .catch((err) => console.error(err));
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
          {["tweets", "blog"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "tweets" | "blog")}
              className={`px-6 py-2 font-semibold capitalize ${
                activeTab === tab ? "text-color-primary" : "text-gray-600"
              }`}
            >
              {tab === "tweets" ? "Latest Tweets" : "Blog"}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "tweets"
              ? tweets.slice(0, 3).map((tweet) => (
                  <div
                    key={tweet.id}
                    className="bg-[#8B5C29] shadow-lg rounded-lg p-4 flex flex-col"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">
                      {tweet.text}
                    </h3>
                    {tweet.attachments?.media_keys && (
                      <Image
                        src={`https://via.placeholder.com/400x300`}
                        alt="Tweet Media"
                        width={400}
                        height={300}
                        className="mb-4"
                      />
                    )}
                    <Link
                      href={`https://twitter.com/kheowzoo_CTO/status/${tweet.id}`}
                      passHref
                    >
                      <button className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all">
                        View on Twitter
                      </button>
                    </Link>
                  </div>
                ))
              : blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-[#8B5C29] shadow-lg rounded-lg p-4 flex flex-col"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="mb-4 rounded"
                    />
                    <h3 className="text-lg font-bold text-white mb-2">
                      {post.title}
                    </h3>
                    <Link href={post.link} passHref>
                      <button className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all">
                        Read More
                      </button>
                    </Link>
                  </div>
                ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
