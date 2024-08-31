"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  
  {
    title: "Comprehensive and Modular",
    description:
      "Odoo offers a wide range of integrated business applications, covering all your company needs. From CRM, eCommerce, accounting, inventory, project management, and POS, to manufacturing, Odoo is a one-stop solution. With over 30 core modules and more than 16,000 third-party apps, you can customize your system to fit your exact requirements.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/cropped-Odoo-O.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cost-Effective",
    description:
      "Odoo is an open-source solution, which significantly reduces software costs. Studies have shown that businesses can save up to 80% on IT costs by switching to Odoo compared to traditional ERP systems",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/o_2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "User-Friendly Interface",
    description:
      "Odoo's modern and intuitive interface is designed for a seamless user experience. According to user feedback, 89% of users find Odoo easier to use compared to other ERP systems.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/odoo_icons.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Scalability",
    description:
      "Odoo grows with your business. Whether you are a small startup or a large enterprise, Odoo's scalable solutions ensure that you have the tools you need at every stage of your business growth.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/o_1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Integrated Information",
    description:
      "With Odoo, all your business information is integrated into one platform, eliminating the need for multiple systems and reducing the risk of data silos. This integration can lead to a 30% increase in data accuracy and a 20% improvement in operational efficiency.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/odoo-apps.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Enhanced Productivity",
    description:
      "Odoo's automation capabilities streamline repetitive tasks, freeing up your team to focus on more strategic activities. Businesses report a 25% increase in productivity after implementing Odoo solutions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/o_3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
