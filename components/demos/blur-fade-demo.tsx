"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Image from 'next/image';

type Project = {
  background: string;
  imageUrl: string;
  title: string;
  description: string;  // Added description field
  link: string;
};

export function BlurFadeDemo({ works }: { works: Project[] }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-blue-500 p-4">
    <section id="photos" className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work, idx) => (
          <BlurFade key={work.imageUrl} delay={0.25 + idx * 0.05} inView>
            <div className={`${work.background} rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}>
              <Image
                className="w-full h-64 object-cover"
                src={work.imageUrl}
                alt={work.title}
                layout="responsive"
                width={500}
                height={256}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{work.title}</h2>
                <p className="text-gray-600 leading-relaxed text-xl">{work.description}</p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
      
    </section>
    </div>
    
  );
}