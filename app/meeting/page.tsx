"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Element, Link as ScrollLink } from "react-scroll";
import Calendly from "./calendly";
import Footer from "@/components/footer";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

// Animation Variants
const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// Main Component
const Meeting = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  // Toggle Side Menu
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Close menu if clicking outside
  const closeMenuOnOutsideClick = useCallback((e: MouseEvent) => {
    if (sideNavRef.current && !sideNavRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", closeMenuOnOutsideClick);
    }
    return () => document.removeEventListener("mousedown", closeMenuOnOutsideClick);
  }, [isMenuOpen, closeMenuOnOutsideClick]);

  return (
    <div className="flex flex-col w-full overflow-clip inset-0 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* Top Navigation */}
      <Element
        name="top"
        className="sticky top-5 z-50 md:mx-auto xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6 rounded-[6px] bg-opacity-50"
      >
        <Link href="/">
          <Image src="/logo/14.png" alt="logo" width={300} height={100} className="w-28" />
        </Link>

        <nav className="absolute right-1/2 translate-x-1/2 hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
          {["Home", "About us", "Tax Services", "Contact us"].map((item, index) => (
            <Link href="/" key={index} className="hover:text-blue-500">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-x-4">
          <Link
            href="/meeting"
            className="py-3 px-6 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200"
          >
            Book a call
          </Link>
          <button className="md:hidden" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Element>

      {/* Side Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} aria-hidden="true"></div>
      )}
      <aside
        ref={sideNavRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 rounded-l-lg p-6 flex flex-col gap-y-4`}
      >
        <button onClick={toggleMenu} className="self-end mb-5 text-gray-600 hover:text-gray-900" aria-label="Close Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {["Home", "About Us", "Tax Services", "Contact Us"].map((item, index) => (
          <Link href="/" key={index} className="hover:text-blue-500 text-lg font-semibold">
            {item}
          </Link>
        ))}
        <a href="tel:5193191562" className="hover:text-blue-500 text-lg font-semibold">(519)-319-1562</a>
      </aside>

      {/* Main Content */}
      <main className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] md:mt-14 md:flex mx-auto">
        <section className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects. Please feel free to book a meeting with us.
          </p>
          {[
            {
              title: "Comprehensive Tax Services",
              description: "Federal & State Tax Returns, Maximized Deductions, Tax Planning & Strategy, Corporate Tax Filing, Small Business Tax Solutions, Quarterly Tax Filings",
            },
            {
              title: "Free Consultation",
              description: "Get expert advice on how to improve your business and make taxes easy and stress-free. Whether you’re a first-time filer or need expert assistance with a complex tax issue",
            },
            {
              title: "Technical Support",
              description: "Call or Book a meeting online and get free consultation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.3 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className="text-[#3d80d7] text-2xl" />
              <div>
                <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </section>
        <section className="md:w-1/2">
          <Calendly />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Meeting;
