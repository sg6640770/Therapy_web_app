'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#fff0ec] text-[#1a1a1a] text-darkMain1 py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 px-4 md:px-[10%] text-sm border-b border-darkMain1">
        {/* Phone */}
        <a href="tel:(323) 555-0192" className="inline-block">
          <p className="text-darkMain1 hover:text-neutral-900 flex gap-2 items-center whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone-call"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
              <path d="M14.05 6A5 5 0 0 1 18 10"></path>
            </svg>
            (323) 555-0192
          </p>
        </a>

        {/* Location */}
        <a className="flex gap-2 items-center hover:underline" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
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
          <span className="line-clamp-1">1287 Maplewood Drive, Los Angeles, CA 90026</span>
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-800 shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/flogo.png"
              alt="Grow My Therapy Logo"
              width={60}
              height={60}
              className="bg-white rounded-full p-1"
            />
            <span className="text-xl md:text-2xl font-bold text-white">
              Dr. Serena Blake
            </span>
          </Link>

          {/* Mobile Toggle */}
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
            className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-gray-800 w-full md:w-auto left-0 px-6 md:px-0 pt-6 md:pt-0 top-full transition-all duration-300 ease-in-out ${
              isOpen ? 'flex' : 'hidden md:flex'
            } text-base font-medium text-white`}
          >
            <li>
              <a href="#services" className="hover:text-blue-300 transition duration-200">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-300 transition duration-200">About</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-300 transition duration-200">FAQ</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300 transition duration-200">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
