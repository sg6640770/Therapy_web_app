'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // menu icons
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-pink-100 text-gray-800 text-base px-4 py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-1 md:gap-0 font-medium">
        <div className="flex items-center gap-2 w-full md:w-auto truncate">
          <span aria-hidden="true">📞</span>
          <span className="truncate">(323) 555-0192</span>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto truncate">
          {/* Custom Location SVG */}
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#144133"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="truncate">
            1287 Maplewood Drive, Los Angeles, CA 90026
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-700 shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center space-x-3">
        <Image
  src="/images/flogo.png"
  alt="Grow My Therapy Logo"
  width={80}
  height={80}
  className="bg-white rounded-full p-1"
/>

            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Dr. Serena Blake
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-gray-700 w-full md:w-auto left-0 px-6 md:px-0 pt-6 md:pt-0 top-full transition-all duration-300 ease-in-out ${
              isOpen ? "flex" : "hidden md:flex"
            } text-sm font-medium text-white`}
          >
            <li>
              <a
                href="#services"
                className="hover:text-blue-300 text-lg transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-300 text-lg transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-blue-300 text-lg transition duration-200"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-300 text-lg transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
