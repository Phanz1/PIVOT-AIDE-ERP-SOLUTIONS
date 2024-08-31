"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const ShowcaseNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="overflow-hidden p-10 rounded-[6px] top-5 sticky md:mx-auto transform z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="pivot aide Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg ">
            <Link href={"/about"} className="hover:text-blue-500">
              About us
            </Link>
            <Link href={"/showcase"} className="hover:text-blue-500">
              PIVOT AIDE ERP SOLUTION.
            </Link>
            
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:5193191562" className="hidden xl:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3 ">
              (519)-319-1562
            </button>
          </a>

          <Link
            href={"/meeting"}
            className="py-3 px-6 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book a call
          </Link>

          {/* Menu Icon for smaller screens */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Side Navbar */}
      <div
        ref={sideNavRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-5">
          <button onClick={toggleMenu} className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-y-4">
            <Link href={"/about"} className="hover:text-blue-500">
              About us
            </Link>
            <Link href={"/showcase"} className="hover:text-blue-500">
              PIVOT AIDE ERP SOLUTION.
            </Link>
            <Link href="/" className="hover:text-blue-500">
              Services
            </Link>
            <a href="tel:5193191562" className="hover:text-blue-500">
              (519)-319-1562
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowcaseNavbar;
