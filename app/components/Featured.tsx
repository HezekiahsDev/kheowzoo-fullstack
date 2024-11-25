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

const videoLink = "https://www.youtube.com/embed/owZx70FfmSo?autoplay=1";

export default function Featured() {
  const [activeTab, setActiveTab] = useState<"tweets" | "blog" | "watch">(
    "tweets"
  );
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "tweets" &&
              tweets.slice(0, 3).map((tweet) => (
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
                    <motion.a className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all">
                      View on Twitter
                    </motion.a>
                  </Link>
                </div>
              ))}

            {activeTab === "blog" &&
              blogPosts.map((post) => (
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
                    <motion.a className="bg-color-primary text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-all">
                      Read More
                    </motion.a>
                  </Link>
                </div>
              ))}

            {activeTab === "watch" &&
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#8B5C29] shadow-lg rounded-lg p-4 flex flex-col"
                  >
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <iframe
                        src={
                          index === 0
                            ? `${videoLink}&autoplay=1`
                            : videoLink.replace("?autoplay=1", "")
                        }
                        title={`YouTube Video ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg w-full h-full"
                      ></iframe>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      Watch Conservation in Action #{index + 1}
                    </h3>
                  </div>
                ))}
          </div>

          {/* Tab-Specific Links */}
          <div className="mt-8 flex justify-center">
            {activeTab === "tweets" && (
              <Link href="https://twitter.com/kheowzoo_CTO" passHref>
                <motion.a
                  whileHover={{ textDecoration: "underline" }}
                  className="text-color-primary font-semibold text-lg transition-all cursor-pointer"
                  target="_blank"
                >
                  Visit our Twitter page
                </motion.a>
              </Link>
            )}
            {activeTab === "blog" && (
              <Link href="/blog" passHref>
                <motion.a
                  whileHover={{ textDecoration: "underline" }}
                  className="text-color-primary font-semibold text-lg transition-all cursor-pointer"
                  target="_blank"
                >
                  Visit our Blog
                </motion.a>
              </Link>
            )}
            {activeTab === "watch" && (
              <Link href="https://youtube.com/channel/your_channel" passHref>
                <motion.a
                  whileHover={{ textDecoration: "underline" }}
                  className="text-color-primary font-semibold text-lg transition-all cursor-pointer"
                  target="_blank"
                >
                  Visit our YouTube Channel
                </motion.a>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
