"use client";
import BlurFade from "@/components/magicui/blur-fade";

type Work = {
  background: string;
  imageUrl: string;
  title: string;
  link: string;
};

export function BlurFadeDemo({ works }: { works: Work[] }) {
  return (
    <section id="photos" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work, idx) => (
          <BlurFade key={work.imageUrl} delay={0.25 + idx * 0.05} inView>
            <div className={`${work.background} rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}>
              <img
                className="w-full h-64 object-cover"
                src={work.imageUrl}
                alt={work.title}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
                <a 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}