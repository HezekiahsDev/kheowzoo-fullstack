import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<
    "faq" | "leaveMessage" | "subscribe"
  >("faq");

  return (
    <section className="py-8" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Contact Us
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "faq" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            FAQs
          </button>
          <button
            onClick={() => setActiveTab("leaveMessage")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "leaveMessage"
                ? "text-color-primary"
                : "text-gray-600"
            }`}
          >
            Leave a Message
          </button>
          <button
            onClick={() => setActiveTab("subscribe")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "subscribe" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Subscribe
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* FAQ Card 1 */}
              <div className="bg-gradient-to-t from-blue-500 to-blue-700 text-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  What is Kheowzoo?
                </h4>
                <p>
                  KheowZoo is an innovative Web3 project combining blockchain
                  technology with wildlife conservation. It serves as a digital
                  platform to showcase conservation efforts, engage communities,
                  and support wildlife preservation using decentralized tools
                  and technologies.
                </p>
              </div>

              {/* FAQ Card 2 */}
              <div className="bg-gradient-to-t from-green-500 to-green-700 text-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  How can I participate in the KheowZoo community?
                </h4>
                <p>
                  You can participate by connecting your wallet and engaging
                  with our platform features, such as exploring the material
                  library, staying updated with community news, and supporting
                  our initiatives. Simply click the &quot;Join the
                  Movement&quot; button on the homepage to get started.
                </p>
              </div>

              {/* FAQ Card 3 */}
              <div className="bg-gradient-to-t from-orange-500 to-orange-700 text-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  What does the CA address on the homepage represent?
                </h4>
                <p>
                  The CA (Contract Address) displayed on our homepage represents
                  KheowZoo&apos;s unique blockchain identity. It allows users to
                  verify and interact with the project&apos;s smart contract
                  securely through platforms like Solscan, CoinMarketCap, and
                  Dextools.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "leaveMessage" && (
            <motion.div
              key="leaveMessage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Leave a Message</h3>
              <form className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Type your message here"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-color-primary text-white py-2 px-6 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          )}

          {activeTab === "subscribe" && (
            <motion.div
              key="subscribe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-8">
                Stay updated with the latest news and offers by subscribing to
                our newsletter.
              </p>
              <form className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="subscribeEmail" className="block text-lg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="subscribeEmail"
                    name="subscribeEmail"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-color-primary text-white py-2 px-6 rounded-lg"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
