'use client'

import { Sparkles } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section className="bg-[#1E4A4A] text-[#CDEDEE] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Column */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Schedule a Consultation
          </h2>
        </div>

        {/* Center Column */}
        <div className="md:w-1/2 space-y-3">
          <p className="text-lg font-medium">
            Dr. Serena Blake is currently accepting new clients.
          </p>
          <p className="text-lg font-medium">
            Available for both online and in-person sessions.
          </p>

          {/* Fees */}
          <div className="mt-4">
            <h3 className="font-semibold underline text-base mb-2">Session Fees:</h3>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1">
              <li>$200 / individual session</li>
              <li>$240 / couples session</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Button */}
        <div className="w-full md:w-auto">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-[#CDEDEE] text-[#CDEDEE] rounded-md hover:bg-[#2A5E5E] transition duration-200 font-semibold">
            <Sparkles className="w-5 h-5" />
            Start Healing
          </button>
        </div>
      </div>
    </section>
  );
}
