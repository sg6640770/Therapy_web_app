'use client'

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#193f42] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Logo & Contact Info */}
        <div>
          <Image
            src="/images/final_logo.png"
            alt="Serena Blake Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <p className="text-yellow-300 font-semibold">⭐ Top Rated</p>

          <div className="mt-2 space-x-3 text-sm text-blue-200 underline">
            <a href="#">Testimonials</a>
            <a href="#">Media Mentions</a>
          </div>

          <div className="mt-4 text-sm text-gray-300 space-y-2">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              1287 Maplewood Drive,<br />Los Angeles, CA 90026
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> (323) 555-0192
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> serena@blakepsychology.com
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-1">Quick Links</h3>
          <ul className="text-sm text-gray-200 space-y-2">
            <li><a href="#contact" className="hover:underline">Get In Touch</a></li>
            <li><a href="#about" className="hover:underline">About Me</a></li>
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Therapies</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Areas Served */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-1">Areas Served</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            {[
              "Los Angeles, CA", "Ashland, CA", "Mechanicsville, CA", "Lakeside, CA",
              "East Highland Park, CA", "Short Pump, CA", "Highland Springs, CA",
              "Glen Allen, CA", "Sandston, CA", "Bon Air, CA", "Chester, CA", "Midlothian, CA"
            ].map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-1">Therapy Services</h3>
          <ul className="text-sm text-gray-300 space-y-4">
            <li>
              Christian Individual <br /> Counseling in Los Angeles, CA
            </li>
            <li>
              Christian Couples <br /> Counseling in Los Angeles, CA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} Serena Blake Therapy. All rights reserved.
      </div>
    </footer>
  );
}
