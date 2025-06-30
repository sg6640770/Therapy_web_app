"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from 'lucide-react';


const rotatingPhrases = [
  "💫 Greater Purpose in Your Life Direction",
  "🧠 Clarity in Emotional Wellbeing",
  "💖 Deeper, Healthier Relationships",
  "🌱 Personal and Spiritual Growth",
  "⚖️ Balance in Work and Life"
];

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/bg-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-sm md:text-base mb-2">
          Christian Counseling Services in Maplewood Drive, Los Angeles
        </p>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
          Professional Counseling for Christian Healing and Growth
        </h1>
        <p className="text-md md:text-lg mb-4">
          Begin your journey today towards spiritual growth, deeper relationships,
          <br className="hidden md:block" /> and lasting inner peace.
        </p>
        <p className="font-semibold text-md md:text-lg mb-2">I want to work with you for..</p>

        {/* Dynamic phrase */}
        <p className="text-blue-200 font-semibold mb-4 text-lg md:text-xl transition duration-500 ease-in-out">
          {rotatingPhrases[currentPhraseIndex]}
        </p>

        <div className="text-sm md:text-base font-medium mb-6 space-x-3 text-yellow-300">
          <span>⭐ Top Rated</span>
          <span className="text-white">• 8+ Years Experience</span>
          <span className="text-white">• <u>Testimonials</u></span>
          <span className="text-white">• <u>Media Mentions</u></span>
        </div>
<div className="flex justify-center mt-6">

        <button className="flex items-center gap-2  px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold shadow-lg transition duration-300">
         
          <Sparkles className="w-5 h-5" /> Start Healing Today
         
        </button>
        </div>
      </div>
    </div>
  );
}
