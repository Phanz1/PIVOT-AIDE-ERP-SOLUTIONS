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
import HeroSection from "@/components/ui/HeroSectionProps";
import RepeatedSection from "@/components/ui/our-approach";
import TestimonialComponent from "@/components/ui/TestimonialComponent";
import { HeroParallax } from "@/components/ui/hero-parallax";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { WobbleCard } from "@/components/ui/wobble-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LetterPullup from "@/components/ui/letter-pullup";
import CardSection from "@/components/CardSection";
import ImageSlider from "@/components/ui/image-slider";
import Services from "@/sevices";
import ContactUs from "@/components/ContactUs";



type Work = {
  background: string;
  imageUrl: string;
  title: string;
  description: string;
}

type ProjectWork = {  // Type for the second array
  background: string;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  
};

const newWorks: Work[] = [
  {
    background: "bg-blue-200",
    imageUrl: "/images/new-image1.png",
    title: "Experienced Team: ",
    description: "Certified tax professionals with extensive knowledge of local, state, and federal tax regulations.",
  },
  {
    background: "bg-red-200",
    imageUrl: "/images/new-image2.png",
    title: "Tailored Services: ",
    description: "We understand your unique tax situation and create solutions just for you.",
  },
  {
    background: "bg-red-500",
    imageUrl: "/images/new-image2.png",
    title: "Local Expertise: ",
    description: "Serving the DMV area, we have deep insight into the tax laws specific to Washington DC, Maryland, and Virginia.",
  },
  
];


const projectWorks: ProjectWork[] = [
  {
    background: "bg-blue-200",
    imageUrl: "/images/xx8.jpeg",
    title: "Corporate Tax Filing: ",
    description: "Accurate tax filing for LLCs, S-Corps, and C-Corps.",
    link: "",
   
  },
  {
    background: "bg-red-300",
    imageUrl: "/images/xx14.jpeg",
    title: "Small Business Tax Solutions: ",
    description: "Tailored tax strategies to help small businesses thrive.",
    link: "",
   
  },
  {
    background: "bg-green-400",
    imageUrl: "/images/xx4.jpeg",
    title: "Quarterly Tax Filings: ",
    description: "We help you stay compliant with regular filings for estimated taxes and other obligations.",
    link: "",
  },
];



const sectionsData = [
    {
      title: 'Client-Focused',
      description: 'We listen to your needs and tailor our services to ensure the best outcomes for your financial situation',
      imageUrl: '/images/gt2.jpeg',
    },
    {
      title: 'Proactive Solutions',
      description: 'Beyond tax filing, we offer strategic advice to reduce liabilities and help your business grow.',
      imageUrl: '/images/gt5.jpeg',
    },
    {
      title: 'Ethical & Transparent',
      description: 'No hidden fees, just honest pricing and ethical practices.',
      imageUrl: '/images/x1.jpeg',
    },
];



const services = [
  {
    icon: "/images/xx11.jpeg",
    title: "Tax Preparation & Filing: ",
    description:"Personal, business, and corporate tax filing with maximized deductions.",
  },
  {
    icon: "/images/xx13.jpeg",
    title: "Bookkeeping & Payroll: ",
    description:
      "Efficient, accurate financial tracking for your business.",
  },
  {
    icon: "/images/xx10.jpeg",
    title: "IRS Problem Solving & Representation: ",
    description:
      "We handle your tax issues directly with the IRS so you can focus on running your business.",
  },
  {
    icon: "/images/xx2.jpeg",
    title: "Business Advisory Services: ",
    description:
      "Grow your business with strategic insights and expert financial advice.",
  },
]


const products = [
  {
    title: "DMV Tax Pro",
    link: "",
    thumbnail:"/images/12.png",
  },
  {
    title: "Expert Tax Guidance",
    link: "",
    thumbnail:"/images/13.png",
  },
  {
    title: "Tax Preparation & Filing",
    link: "",
    thumbnail:"/images/14.png",
  },
 
  {
    title: "Bookkeeping & Payroll",
    link: "",
    thumbnail:"/images/15.png",
  },
  {
    title: "Experienced Team",
    link: "",
    thumbnail:"/images/16.png",
  },
  {
    title: "Tailored Services",
    link: "",
    thumbnail:"/images/12.png",
  },
 
  {
    title: "Local Expertise",
    link: "",
    thumbnail:"/images/13.png",
  },
  {
    title: "Individual Tax Preparation ",
    link: "",
    thumbnail:"/images/14.png",
  },
  {
    title: "Federal & State Tax Returns",
    link: "",
    thumbnail:"/images/15.png",
  },
  {
    title: "Business Tax Services",
    link: "",
    thumbnail:"/images/16.png",
  },
  {
    title: "Specialized IRS Support",
    link: "",
    thumbnail:"/images/12.png"
  },
 
  {
    title: "IRS Problem Resolution",
    link: "",
    thumbnail:"/images/13.png",
  },
  {
    title: "Corporate Tax Filing",
    link: "",
    thumbnail:"/images/16.png",
  },
  {
    title: "Small Business Tax Solutions",
    link: "",
    thumbnail:"/images/14.png",
  },
  {
    title: "Quarterly Tax Filings",
    link: "",
    thumbnail:"/images/15.png",
  },
];

const slides = [
  {
    imageUrl: "/images/xx5.jpeg",
    dear: "Accurate & Efficient Bookkeeping for Your Business",
    description:
      "Running a business means you’ve got a lot on your plate, and keeping your books in order is a big part of that. At DMV Tax Pro, we offer professional bookkeeping and accounting services designed to keep your business finances organized and compliant.",
  },
  {
    imageUrl: "/images/xx6.jpeg",
    dear: "Accurate & Efficient Bookkeeping for Your Business",
    description: "Running a business means you’ve got a lot on your plate, and keeping your books in order is a big part of that. At DMV Tax Pro, we offer professional bookkeeping and accounting services designed to keep your business finances organized and compliant.",
  },
  {
    imageUrl: "/images/xx9.jpeg",
    dear: "Accurate & Efficient Bookkeeping for Your Business",
    description: "Running a business means you’ve got a lot on your plate, and keeping your books in order is a big part of that. At DMV Tax Pro, we offer professional bookkeeping and accounting services designed to keep your business finances organized and compliant.",
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
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6 bg-opacity-50"
      >
        <Link href={"/"}>
          <Image
            src={'/logo/14.png'}
            alt="logo"
            width={300}
            height={100}
            className="w-28"
          />
        </Link>

  <div className="absolute right-1/2 translate-x-1/2 transform">
    <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
    <DynamicScrollLink to="home" smooth={true} className="hover:text-blue-500">
        Home
      </DynamicScrollLink>
      <DynamicScrollLink to="about" className="hover:text-blue-500">
        About us
      </DynamicScrollLink>

      <DynamicScrollLink to="services" className="hover:text-blue-500">
        Tax Services
      </DynamicScrollLink>

      <DynamicScrollLink
        to='contact'
        smooth={true}
        className="hover:text-blue-500"
      >
        Contact us
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
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      <div
        ref={sideNavRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 rounded-l-lg p-6 flex flex-col gap-y-4`}
      >
        <button onClick={toggleMenu} className="self-end mb-5 text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <DynamicScrollLink to="home" smooth={true} className="hover:text-blue-500 text-lg font-semibold">Home</DynamicScrollLink>
        <DynamicScrollLink to="about" smooth={true} className="hover:text-blue-500 text-lg font-semibold">About Us</DynamicScrollLink>
        <DynamicScrollLink to="services" smooth={true} className="hover:text-blue-500 text-lg font-semibold">Tax Services</DynamicScrollLink>
        <DynamicScrollLink to="contact" smooth={true} className="hover:text-blue-500 text-lg font-semibold">Contact Us</DynamicScrollLink>
        <a href="tel:5193191562" className="hover:text-blue-500 text-lg font-semibold">(519)-319-1562</a>
      </div>
      
      <main className="md:pb-10 flex justify-center px-4 md:px-0">
  <div className="md:px-0 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14 w-full">
  <DynamicElement name="home">
    <h1>
      <CoverDemo />
    </h1>
    <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 mx-auto text-gray-500 max-w-lg md:max-w-3xl">
      At DMV Tax Pro, we make taxes and accounting simple and stress-free for individuals and businesses in the Washington DC, Maryland, and Virginia areas. Whether you’re navigating complex tax laws or managing your business finances, our experienced team is here to provide expert guidance, every step of the way.
    </p>

    </DynamicElement>

    <div className="flex justify-center items-center gap-x-4">
      <Link
        href="/meeting"
        className="py-3 px-8 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-lg dark:shadow-lg"
      >
        Book a Call
      </Link>
      <DynamicScrollLink
        to='services'
        className="bg-blue-500 py-3 px-8 md:px-16 md:text-xl border-4 border-black rounded-[6px] hover:shadow-lg dark:shadow-lg"
      >
        Tax Services
      </DynamicScrollLink>
    </div>
    

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
          <PiCheckBold className="text-xl text-blue-500" />
          Individual Tax Preparation & Filing
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
          <PiCheckBold className="text-xl text-blue-500" />
          Business Tax Services
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
          Specialized IRS Support
        </p>
      </BoxReveal>
    </div>

    <div className="md:flex items-center justify-center gap-y-4 my-10 gap-x-16 mx-auto">
      <div className="md:w-2/5">
        <h1 className="text-2xl font-medium text-gray-600 text-center md:text-left">
          Trusted by fast-moving brands worldwide
        </h1>
        <div className="flex my-6 gap-x-5 justify-center md:justify-start w-full">
          <div>
            <h1 className="text-blue-500 text-3xl md:text-5xl">
              <NumberTicker value={20} /> +
              <p className="text-gray-500 text-sm md:text-md">Happy Clients</p>
            </h1>
          </div>
          <div className="w-px bg-gray-300 self-stretch"></div>
          <div className="flex-1 min-w-0">
            <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
              <NumberTicker value={50} /> +
              <p className="text-gray-500 text-sm md:text-md">Projects completed</p>
            </h1>
          </div>
        </div>
      </div>

      <section className="overflow-hidden mt-10 md:w-4/5">
        <InfiniteMovingLogos
          speed="slow"
          direction="left"
          items={[
            { logo: "/logo/logo.png", name: "Logos" },
            { logo: "/logo/l_1.png", name: "Logos" },
            { logo: "/logo/l_2.png", name: "Logos" },
            { logo: "/logo/l_3.png", name: "Logos" },
            { logo: "/logo/l_4.png", name: "Logos" },
            { logo: "/logo/l_5.png", name: "Logos" },
            { logo: "/logo/l_6.png", name: "Logos" },
            { logo: "/logo/l_7.png", name: "Logos" },
            { logo: "/logo/l_8.png", name: "Logos" },
            { logo: "/logo/l_9.png", name: "Logos" },
            { logo: "/logo/l-10.png", name: "Logos" },
          ]}
        />
      </section>
    </div>
  </div>
</main>


      <DynamicElement name="">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1 >
            <WordPullUpDemo /></h1>

        

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
                <h1 className="text-2xl font-medium text-blue-500">{service.title}</h1>
                <p className="text-gray-500 text-xl">{service.description}</p>
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

          <section  className="py-20 bg-blue-500">

          

          <TypingAnimation 
        text="Why Choose Us?"
        className="text-4xl font-bold text-white dark:text-white"
        
      />
      <BentoGridDemo />

      
          
          </section>

          <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
        Get Expert Help Today!
        </p>

        <p className="my-10 text-xl">
       Contact us at +1 (571) 470-3754 
        </p>

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
          Book a Consultation Online.
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/work.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>


    <DynamicElement name="about">
          <div className="relative z-10 w-full pt-20 md:pt-32 pb-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50">
  <div className="mx-auto p-4 px-6 md:px-12 text-center max-w-5xl">
    <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-green-800 via-green-700 to-blue-600 bg-opacity-70">
      About DMV Tax Pro
    </h1>
    
  </div>
</div>


                <HeroSection
                    backgroundImageUrl="/images/12.png"
                    headerText="Expert Tax Guidance, Every Step of the Way"
                    descriptionText="At DMV Tax Pro, we are more than just accountants and tax preparers. We are your financial partners, helping you navigate tax laws, manage business finances, and achieve financial success."
                    additionalText="With years of experience, our certified team of tax professionals understands the unique financial landscape of the DMV area."
                />

<RepeatedSection headerText="Our Approach" sections={sectionsData} />

</DynamicElement>

<DynamicElement name="services">

<div className="relative z-10 w-full pt-20 md:pt-32 pb-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50">
  <div className="mx-auto p-4 px-6 md:px-12 text-center max-w-5xl ">
    <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-green-800 via-green-700 to-blue-600 bg-opacity-100 ">
    Tax Services:
    </h1>
    
  </div>
</div>

              <HeroParallax products={products} />

              <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20 text-blue-500"
            words="Individual Tax Preparation & Filing:"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative"
        >
          <div className="max-w-xs relative z-10">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Federal & State Tax Returns
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200 text-xl">
              We handle tax filings for residents of Washington DC, Maryland, and Virginia.
            </p>
          </div>
          <Image
            src="/images/xx0.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] -bottom-10 w-[50%] sm:w-[40%] lg:w-[35%] xl:w-[30%] object-contain rounded-2xl z-0"
          />
        </WobbleCard>

        {/* Additional Cards */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
          <div className="relative z-10">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Maximized Deductions:
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200 text-xl">
              Our team ensures you take full advantage of every credit and deduction available to you.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
          <div className="max-w-sm relative z-10">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Tax Planning & Strategy:
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200 text-xl">
              Proactively plan for the future by minimizing tax liabilities and maximizing tax savings.
            </p>
          </div>
          <Image
            src="/images/xx3.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 w-[50%] sm:w-[40%] lg:w-[35%] xl:w-[30%] object-contain rounded-2xl z-0"
          />
        </WobbleCard>
      </div>


      <div className="relative z-10 w-full pt-20 md:pt-32 pb-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50">
  <div className="mx-auto p-4 px-6 md:px-12 text-center max-w-5xl">
    <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-green-800 via-green-700 to-blue-600 bg-opacity-70">
    Business Tax Services:
    </h1>
    
  </div>
</div> 
        <BlurFadeDemo works={projectWorks} />

              <LetterPullup words={"Specialized IRS Support:"} />
        
      <section className="flex justify-center items-center mt-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-black">IRS Problem Resolution:</AccordionTrigger>
            <AccordionContent className="text-black">
              We work directly with the IRS on your behalf to resolve tax issues, back taxes, and penalties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-black">Bookkeeping & Payroll:</AccordionTrigger>
            <AccordionContent className="text-black">
              Comprehensive bookkeeping and payroll services to streamline your business operations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      </DynamicElement>

      <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
        Need Help Filing Your Taxes? <br/>Get in Touch Today!
        </p>

        <p className="my-10 text-xl">
       Contact us at +1 (571) 470-3754 
        </p>

        
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/o_2.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>


      <div className="relative z-10 w-full pt-20 md:pt-32 pb-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50">
  <div className="mx-auto p-4 px-6 md:px-12 text-center max-w-5xl">
    <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-green-800 via-green-700 to-blue-600 bg-opacity-70">
    IRS Representation & Problem Resolution:
    </h1>
    
  </div>
</div>

      <HeroSection
                    backgroundImageUrl="/images/12.png"
                    headerText="Don’t Let IRS Problems Stress You Out"
                    descriptionText="At DMV Tax Pro, we specialize in helping clients resolve complex tax issues. From tax audits to payment plans, we take the stress out of dealing with the IRS by representing you every step of the way."
                    additionalText=""
                  
                />

                <CardSection/>

                <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
        Get IRS Help Today
        </p>

        <p className="my-10 text-xl">
        Donapos;&t wait until your tax problems get worse. <br/> Contact us at +1 (571) 470-3754 
        </p>

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
          schedule a consultation online.
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/o_3.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>


                <div className="relative z-10 w-full pt-20 md:pt-32 pb-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50">
  <div className="mx-auto p-4 px-6 md:px-12 text-center max-w-5xl">
    <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-green-800 via-green-700 to-blue-600 bg-opacity-70">
    Bookkeeping & Accounting:
    </h1>
    
  </div>
</div>

<ImageSlider slides={slides} interval={5000} />

<Services/>

<section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
        Want to Save Time on Bookkeeping?
        </p>

        <p className="my-10 text-xl">
        
        </p>

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
         Request a Free Consultation
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/img3.jpeg"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>

        <ShootingStarsAndStarsBackgroundDemo />
        
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">

<LetsMakeThingsHappenSection />


</section>

      <TestimonialComponent/>


      <DynamicElement name="contact">
      <ContactUs/>
      </DynamicElement>
      <Footer />
    </div>
  );
}

        
