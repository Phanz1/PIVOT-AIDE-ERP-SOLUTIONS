import WordPullUp from "@/components/magicui/word-pull-up";

export function WordPullUpDemo() {
  const services = [
    "What We Do:"];

  return (
    <div className="text-3xl text-blue-500 md:text-5xl md:text-center font-medium">
      {services.map((service, index) => (
        <WordPullUp key={index} words={service} />
      ))}
    </div>
  );
}
