import React, { useState } from "react";
import "animate.css";

export default function Hero() {
  const contractAddress = "AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump";
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000); // Clear toast after 5 seconds
  };

  return (
    <div
      className="hero-section bg-cover bg-center text-white flex flex-col justify-center items-center h-[100vh] md:h-[100vh] relative"
      style={{ backgroundImage: `url('/bg-banner.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="z-10 px-4 max-w-4xl text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Kheowzoo
        </h1>

        <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Explore the cutting edge of blockchain-powered conservation. Join a
          community redefining the future of wildlife and Web3 technology.
        </p>

        {/* <a
          href="#featured"
          className="inline-block bg-color-primary text-color-bg py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
        >
          Explore More
        </a> */}
      </div>

      <div className="z-10 px-4 max-w-4xl  text-center mt-8">
        <h2 className="text-lg md:text-xl font-bold text-color-primary animate__animated animate__fadeIn animate__delay-3s">
          Contract Address
        </h2>
        <p
          className="text-base md:text-lg  text-blue-500 underline cursor-pointer mt-2 animate__animated animate__fadeIn animate__delay-3s"
          onClick={copyToClipboard}
        >
          {contractAddress}
        </p>
        <a
          href={`https://solscan.io/token/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 underline animate__animated animate__fadeIn animate__delay-3s"
        >
          View on Solscan
        </a>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md animate__animated animate__fadeInUp">
          Contract Address copied to clipboard!
        </div>
      )}

      <div className="absolute bottom-10 flex justify-center w-full">
        <a
          href="#about"
          className="text-color-primary text-xl animate-bounce animate__animated animate__fadeIn animate__delay-4s"
        >
          ↓ Scroll Down
        </a>
      </div>
    </div>
  );
}
