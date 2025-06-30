import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#193f42] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* Logo & Contact Info */}
        <div>
          <Image
  src="/images/final_logo.png"
  alt="Serena Blake Logo"
  width={112}
  height={112}
  className="mb-4"
/>

          <div className="text-yellow-300 font-semibold mb-2">⭐ Top Rated</div>
          <div className="space-x-2">
            <a href="#" className="underline">Testimonials</a>
            <a href="#" className="underline">Media Mentions</a>
          </div>
          <p className="mt-4">1287 Maplewood Drive,<br />Los Angeles, CA 90026</p>
          <p className="flex items-center mt-2">
            <Phone className="w-4 h-4 mr-2" />
            (323) 555-0192
          </p>
           <p className="flex items-center gap-1">
  <Mail className="w-5 h-5" />
  serena@blakepsychology.com
</p>
          
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#contact">Get In Touch</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#faq">FAQ's</a></li>
            <li><a href="#">Therapies</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Areas Served */}
        <div>
          <h3 className="text-lg font-semibold mb-3">AREAS SERVED</h3>
          <ul className="space-y-2">
            {[
              "Los Angeles, CA", "Ashland, CA", "Mechanicsville, CA", "Lakeside, CA",
              "East Highland Park, CA", "Short Pump, CA", "Highland Springs, CA",
              "Glen Allen, CA", "Sandston, CA", "Bon Air, CA", "Chester, CA",
              "Midlothian, CA"
            ].map((area, i) => (
              <li key={i}>{area}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SERVICES</h3>
          <ul className="space-y-3">
            <li>
              Christian Individual <br /> Counseling in Los Angeles, CA
            </li>
            <li>
              Christian Couples <br /> Counseling in Los Angeles, CA
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Serena Blake Therapy. All rights reserved.
      </div>
    </footer>
  );
}
