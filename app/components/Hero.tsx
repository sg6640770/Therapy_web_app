'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const rotatingPhrases = [
  '💫 Greater Purpose in Your Life Direction',
  '🧠 Clarity in Emotional Wellbeing',
  '💖 Deeper, Healthier Relationships',
  '🌱 Personal and Spiritual Growth',
  '⚖️ Balance in Work and Life',
];

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white bg-black overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-base md:text-lg text-blue-100 mb-3">
          Christian Counseling Services in Maplewood Drive, Los Angeles
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
          Find Peace, Purpose, and Healing with Dr. Serena Blake
        </h1>

        <p className="text-lg md:text-xl text-blue-200 mb-6 leading-relaxed">
          Begin your journey toward emotional clarity, spiritual alignment, and stronger relationships—starting today.
        </p>

        <p className="font-semibold text-lg text-white mb-2">
          I want to work with you for...
        </p>

        <p className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6 animate-pulse transition duration-500">
          {rotatingPhrases[currentPhraseIndex]}
        </p>

        <div className="text-sm md:text-base font-medium mb-8 space-x-3 text-yellow-300">
          <span>⭐ Top Rated</span>
          <span className="text-white">• 8+ Years Experience</span>
          <span className="text-white underline">• Testimonials</span>
          <span className="text-white underline">• Media Mentions</span>
        </div>

        <div className="flex justify-center">
          <a href="#contact">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-indigo-700 hover:to-teal-600 text-white rounded-full text-lg font-semibold shadow-xl transition duration-300">
              <Sparkles className="w-5 h-5" />
              Book a Free Consult
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
