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
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <p className="text-sm md:text-base text-blue-100 mb-2">
          Christian Counseling Services in Maplewood Drive, Los Angeles
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
          Professional Counseling for Christian Healing and Growth
        </h1>

        <p className="text-md md:text-lg text-blue-200 mb-4 leading-relaxed">
          Begin your journey today towards spiritual growth, deeper relationships,<br className="hidden md:block" />
          and lasting inner peace.
        </p>

        <p className="font-semibold text-lg text-white mb-2">I want to work with you for...</p>

        <p className="text-xl md:text-2xl font-semibold text-blue-300 mb-4 animate-pulse transition duration-500">
          {rotatingPhrases[currentPhraseIndex]}
        </p>

        <div className="text-sm md:text-base font-medium mb-6 space-x-3 text-yellow-300">
          <span>⭐ Top Rated</span>
          <span className="text-white">• 8+ Years Experience</span>
          <span className="text-white">• <u>Testimonials</u></span>
          <span className="text-white">• <u>Media Mentions</u></span>
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg transition duration-300">
            <Sparkles className="w-5 h-5" />
            Start Healing Today
          </button>
        </div>
      </div>
    </section>
  );
}
