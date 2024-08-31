import WordPullUp from "@/components/magicui/word-pull-up";

export function WordPullUpDemo() {
  const services = [
    "Our Services"];

  return (
    <div className="text-3xl md:text-5xl md:text-center font-medium">
      {services.map((service, index) => (
        <WordPullUp key={index} words={service} />
      ))}
    </div>
  );
}
