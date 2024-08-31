

import Image from "next/image";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import { StickyScrollRevealDemo } from "@/components/demos/sticky-scroll-reveal-demo";
import Footer from "@/components/footer";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";


type Work = {
  background: string;
  imageUrl: string;
  title: string;
  link: string;
};


const newWorks: Work[] = [
  {
    background: "bg-blue-200",
    imageUrl: "/images/homepage-seo.png",
    title: "Odoo Accounting software",
    link: "https://www.odoo.com/app/accounting?utm_source=google&utm_medium=cpc&utm_campaign=NA-EN-Accounting_Accounting-Competitor-Broad&gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aNWDOjyfgQBd2ZFJ5_wcS3SHwMukpZjID-jBGbCr5ueJLaCSiFsO1BoCD6gQAvD_BwE",
  },
  {
    background: "bg-red-200",
    imageUrl: "/images/videoframe_5574.png",
    title: "Watch Odoo Accounting Demo",
    link: "https://youtu.be/7bgMGWQFlAA?si=wJCzFVmy21LVxdpa",
  },
  // Add more items as needed
];

const services = [
  {
    icon: "/images/0_4.jpeg",
    title: "Expertise and Experience",
    description: "With years of experience in implementing and managing Odoo solutions, our team of experts is equipped with the skills and knowledge to deliver top-notch services. We understand the complexities of different industries and tailor our solutions to meet your specific needs",
  },
  {
    icon: "/images/o_5.jpeg",
    title: "Customized Solutions",
    description: "We believe that one size does not fit all. Our team works closely with you to understand your business processes and customize Odoo modules to fit perfectly. This ensures you get the most out of the software, leading to a more efficient and effective business operation.",
  },
  {
    icon: "/images/o_6.jpeg",
    title: "Ongoing Support and Training",
    description: "We are committed to your success. Our support team is always ready to assist you with any issues or questions you may have. Additionally, we offer comprehensive training programs to ensure your team can effectively use and manage Odoo",
  },
  {
    icon: "/images/o_7.jpeg",
    title: "Proven Results",
    description: "Our clients have seen significant improvements in their business operations after partnering with us. For example, one of our clients experienced a 40% reduction in operational costs and a 35% increase in sales within the first year of implementing our customized Odoo solution.",
  },
];

const Showcase = () => {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <ShowcaseNavbar />

      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20"
            words="Pivot Aide Consultants: Your Trusted Odoo Solutions Partner"
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          Welcome to Pivot Aide Consulting, your trusted partner for comprehensive Odoo solutions. We specialize in providing tailored Odoo products and services to help businesses streamline their operations, improve efficiency, and achieve their goals.
        </p>

        <BlurFadeDemo works={newWorks} />


        <TypingAnimation text={"Why Choose Odoo? "} />

        <div>
          <StickyScrollRevealDemo />
        </div>

        <WordFadeIn words={"The Benefits of Partnering with Pivot Aide Consultants"} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
            >
              <Image
                src={service.icon}
                width={10000}
                height={10000}
                className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                alt="image"
              />
              <h1 className="text-xl font-medium">{service.title}</h1>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>

        <TypingAnimation text={"Our Odoo Services "} />

        <div className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
      {/* Text Content */}
      <div className="md:w-2/3 space-y-12">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold mb-4">1. Odoo Implementation</h3>
          <p className="text-lg font-medium">
            We offer full Odoo implementation services, ensuring a seamless transition from your current systems to Odoo. Our team will work closely with you to understand your business requirements and configure Odoo to meet your specific needs.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold mb-4">2. Odoo Customization</h3>
          <p className="text-lg font-medium">
            Every business is unique, and so are its needs. Our experts will customize Odoo modules to fit your business processes perfectly, ensuring you get the most out of the software.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold mb-4">3. Odoo Integration</h3>
          <p className="text-lg font-medium">
            We provide integration services to connect Odoo with other business systems, such as ERP, CRM, eCommerce, and more. This ensures all your business tools work together harmoniously.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold mb-4">4. Odoo Training</h3>
          <p className="text-lg font-medium">
            Empower your team with the knowledge they need to make the most of Odoo. We offer comprehensive training programs for users at all levels, from beginners to advanced users.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-extrabold mb-4">5. Odoo Support and Maintenance</h3>
          <p className="text-lg font-medium">
            Our support team is always ready to assist you with any issues or questions you may have. We offer ongoing maintenance services to ensure your Odoo system runs smoothly and efficiently.
          </p>
        </div>
      </div>

      {/* Image on the Right */}
      <div className="md:w-1/3">
        <img 
          src="/images/1.jpg" 
          alt="Descriptive alt text" 
          className="w-full h-63 h-auto object-cover"
        />
      </div>
    </div>
  </div>
</div>


        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}

export default Showcase;