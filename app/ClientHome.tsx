'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import WordPullUp from "@/components/magicui/word-pull-up";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import {IconStarFilled} from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { Boxes } from "@/components/ui/background-boxes";
import Footer from "@/components/footer";
import TypingAnimation from "@/components/magicui/typing-animation";
import { BlurFadeDemo} from "@/components/demos/blur-fade-demo";
import { BentoGridDemo } from "@/components/demos/bento-grid-demo";


type Work = {
  background: string;
  imageUrl: string;
  title: string;
  description: string;
}

const newWorks: Work[] = [
  {
    background: "bg-blue-200",
    imageUrl: "/images/new-image1.png",
    title: "Tailored Solutions for Your Industry",
    description: "A large retail business in the Maryland area was struggling with inventory management and missed sales opportunities. We implemented a customized Odoo ERP solution that created an ecosystem that streamlined their inventory processes, orders and accounting system, resulting in a 25% reduction in stockouts and a 15% increase in sales",
  },
  {
    background: "bg-red-200",
    imageUrl: "/images/new-image2.png",
    title: "Expertise and Experience:",
    description: "With over a decade of experience in ERP implementation, we&apos;ve helped numerous businesses across various industries achieve their growth goals. For instance, a manufacturing company was able to improve production efficiency by 30% after our team optimized their operations with a tailored specialized ERP setup",
  },
  {
    background: "bg-red-500",
    imageUrl: "/images/new-image2.png",
    title: "Expertise and Experience:",
    description: "With over a decade of experience in ERP implementation, we&apos;ve helped numerous businesses across various industries achieve their growth goals. For instance, a manufacturing company was able to improve production efficiency by 30% after our team optimized their operations with a tailored specialized ERP setup",
  },
  {
    background: "bg-green-200",
    imageUrl: "/images/new-image2.png",
    title: "Expertise and Experience:",
    description: "With over a decade of experience in ERP implementation, we&apos;ve helped numerous businesses across various industries achieve their growth goals. For instance, a manufacturing company was able to improve production efficiency by 30% after our team optimized their operations with a tailored specialized ERP setup",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/new-image2.png",
    title: "Expertise and Experience:",
    description: "With over a decade of experience in ERP implementation, we’ve helped numerous businesses across various industries achieve their growth goals. For instance, a manufacturing company was able to improve production efficiency by 30% after our team optimized their operations with a tailored specialized ERP setup",
  },
  {
    background: "bg-red-200",
    imageUrl: "/images/new-image2.png",
    title: "Expertise and Experience:",
    description: "With over a decade of experience in ERP implementation, we&apos;ve helped numerous businesses across various industries achieve their growth goals. For instance, a manufacturing company was able to improve production efficiency by 30% after our team optimized their operations with a tailored specialized ERP setup",
  },
  // Add more items as needed
];


const services = [
  {
    icon: "/images/3.jpg",
    title: "BRANDING AND MARKETING",
    description:"LOGO & BRAND DESIGN (TYPOGRAPHY/FONT DESIGN) WEBSITE DESIGN DIGITAL DESIGN/PRODUCT PACKAGING",
  },
  {
    icon: "/images/s_2.jpeg",
    title: "TAX & ACCOUNTING",
    description:
      "PERSONAL TAX FILING,	BUSINESS TAX FILING, TAX CONSULTANCY, BOOK KEEPING, PAYROLL SERVICES",
  },
  {
    icon: "/images/2.jpg",
    title: "BUSINESS FORMATION",
    description:
      "LC REGISTRATION, CORPRATION REGISTRATION, NON-PROFIT ORGANIZATION REGISTRATION, S-CORP ELECTION, ARTICLE OF AMENDMENT, ARTICLE OF ORGANIZATION, DBA REGISTRATION, DRAFTING OPERATING AGREEMENT",
  },
  {
    icon: "/images/4.jpg",
    title: "BUSINESS SOLUTION",
    description:
      "ODOO ERP IMPLEMENTATION ",
  },
];

const DynamicElement = dynamic(
  () => import("react-scroll").then((mod) => mod.Element as any),
  { ssr: false }
) as any;

const DynamicScrollLink = dynamic(
  () => import("react-scroll").then((mod) => mod.Link as any),
  { ssr: false }
) as any;

export default function ClientHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <DynamicElement
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={'/logo/logo.png'}
            alt="logo"
            width={160}
            height={50}
            className="w-28"
          />
        </Link>

  <div className="absolute right-1/2 translate-x-1/2 transform">
    <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
      <Link href={"/about"} className="hover:text-blue-500">
        About us
      </Link>

      <Link href={"/showcase"} className="hover:text-blue-500">
        PIVOT AIDE ERP SOLUTION.
      </Link>

      <DynamicScrollLink
        to='services'
        smooth={true}
        className="hover:text-blue-500"
      >
        Services
      </DynamicScrollLink>

      <DynamicScrollLink
        to='guarantees'
        smooth={true}
        className="hover:text-blue-500"
      >
        Guarantees
      </DynamicScrollLink>
    </div>
  </div>

  <div className="flex items-center gap-x-4">
    
    <Link 
      href={"/meeting"}
      className="py-3 px-6 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
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
</DynamicElement>


      
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
            <DynamicScrollLink
              to='services'
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </DynamicScrollLink>

            <DynamicScrollLink
              to='guarantees'
              smooth={true}
              className="hover:text-blue-500"
            >
              Guarantees
            </DynamicScrollLink>
            
            <a href="tel:5193191562" className="hover:text-blue-500">
              (519)-319-1562
            </a>
          </div>
        </div>
      </div>


      <main className="md:pb-10">
        <div className="md:px-0 xl:4/5 2xl:w-[68%] md:mx-auto mt-14">
            <AnimatedShinyTextDemo />

        
        <h1>
          <CoverDemo />
        </h1>
        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:4/5 mx-auto text-grey-500">
        At Pivot Aide Consulting, we build a cohesive ecosystem where the different elements of your business seamlessly interact and collaborate to achieve successful outcomes. We are your trusted Odoo partner, specializing in delivering customized ERP solutions designed to meet the unique needs of your industry.
        </p>

        <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              PIVOT AIDE ERP SOLUTION.
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md-justify-items-center md:mx-auto mt-10 md:mt-16">
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Business Solution
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Branding and Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Tax & Accounting
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Business Formation
              </p>
            </BoxReveal>

          </div>

          <div className="md:flex  items-center justify-between gap-y4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={20} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients

                    </p>

                  </h1>
                </div>
                <div className = "w-px bg-gray-300 self-stetch"></div>
                <div className="flex-1 minn-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl witespace-nowrap overflow-hidden">
                    <NumberTicker value={50} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects completed
                    </p>
                  </h1>
                </div> 
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos  
              speed="slow"
              direction="left"
              items={[
                {
                  logo:"/logo/logo.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_1.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_2.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_3.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_4.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_5.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_6.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_7.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_8.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l_9.png",
                  name:"Logos"
                },
                {
                  logo:"/logo/l-10.png",
                  name:"Logos"
                },
            ]}
            />
            </section>
          </div>
          </div>
      </main>

      <DynamicElement name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1 >
            <WordPullUpDemo /></h1>

          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          At Pivot Aide Consulting, we don&apos;t just provide software; we deliver powerful, custom-tailored Odoo ERP solutions that are crafted to elevate your business. As a trusted partner, we work closely with you to design and implement systems that align perfectly with your industry&apos;s needs, transforming your operations for peak efficiency and accelerated growth. Discover how our innovative solutions can unlock new potential and drive your business forward in today&apos;s dynamic marketplace. We also offer a wide range of services including branding and marketing, tax and accounting and business formation. Explore our services below to see how we can help your business thrive 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={160}
                  height={50}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
          
          </div>
          </DynamicElement>

          <section className="py-20">
            <ScrollBasedVelocityDemo/>

          </section>

          <DynamicElement name="process">
            <main className="md:px-0 mx-6  md:mx-auto">
            <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">

              Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/a_4.jpeg"}
                width={160}
                height={50}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.png"}
                width={160}
                height={50}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
              </h1>

              <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
              At Pivot Aide Consulting, we believe in a client-centric approach. This means that we take the time to understand your business, your goals, and your challenges. Our team of seasoned professionals brings a wealth of experience and a passion for problem-solving to every project. We are dedicated to providing solutions that are not only effective but also innovative and forward-thinking. 
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedBeamMultipleOutputDemo />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo />
          </div>
          </div>


        
            </main>
          </DynamicElement>

          <section>

          

          <TypingAnimation 
        text="Why Choose Us?"
        className="text-4xl font-bold text-blue-500 dark:text-white"
        
      />
      <BentoGridDemo />
          
          </section>


          <section>
          <TypingAnimation 
        text="TESTIMONIALS"
        className="text-4xl font-bold text-blue-500 dark:text-white"
        
      />
      <br/>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          
          <Image
            src={"/logo/l_11.png"}
            width={160}
            height={50}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We partnered with Pivot Aide Consulting for a complete rebranding, and the results were beyond our expectations. The logo and brand design they created perfectly capture the essence of our business, and their digital marketing campaigns have significantly increased our online visibility. They truly understand what it takes to make a brand stand out &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
            Dapo Komolafe  <br />
            Dapsyn Inc
            </span>
          </div>

          
        </main>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/l_12.png"}
            width={160}
            height={50}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;Pivot Aide Consulting has transformed our business operations with their custom Odoo ERP solutions. Their team took the time to understand our unique needs and delivered a system that has streamlined our processes and boosted our productivity. Their expertise and dedication to customer success are unmatched. Highly recommended! &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
            Isabella Algate  <br />
            Bricks & Haven
            </span>
          </div>

          
        </main>

        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/l_1.png"}
            width={160}
            height={50}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;Working with Pivot Aide Consulting was a game-changer for us. Their tailored Odoo ERP implementation has optimized our workflow, saving us both time and money. The team is incredibly professional and responsive, making the entire process smooth and stress-free. We couldn&apos;t be happier with the results!&quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
            David Martins  <br />
            Garden City Mall
            </span>
          </div>

          
        </main>
      </section>

      <DynamicElement name="guarantees">
        <ShootingStarsAndStarsBackgroundDemo />
      </DynamicElement>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">

      <LetsMakeThingsHappenSection />

      </section>
      <Footer />
    </div>
  );
}

        
