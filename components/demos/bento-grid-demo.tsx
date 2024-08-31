import React from "react";
import { BentoGridItem } from "./BentoGridItem";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBoxAlignTopLeft,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  const items = [
    {
      title: "Tailored Solutions for Your Industry",
      description:
        "A large retail business in the Maryland area was struggling with inventory management and missed sales opportunities. We implemented a customized Odoo ERP solution that created an ecosystem that streamlined their inventory processes, orders and accounting system, resulting in a 25% reduction in stockouts and a 15% increase in sales",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Expertise and Experience",
      description:
        "With over a decade of experience in ERP implementation, we’ve helped numerous businesses across various industries achieve their growth goals. For instance, a manufacturing company was able to improve production efficiency by 30% after our team optimized their operations with a tailored specialized ERP setup.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Commitment to Client Success",
      description:
        "We go beyond just providing software; we ensure our clients fully understand and utilize their ERP systems. For example, a healthcare provider was initially overwhelmed by the transition to a new ERP system, but through our dedicated training and support, they now operate more efficiently, with a 20% increase in patient processing speed.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Scalable Solutions for Growth",
      description:
        "A Startup in Northern Virginia partnered with us for an ERP system that could grow with them. As they expanded, the scalable solution we provided allowed them to seamlessly integrate new processes and departments without disrupting their operations. Implementing an ERP accounting solution is essential for businesses aiming to optimize efficiency and produce accurate financial reports. Such systems streamline your financial processes, providing a clear and comprehensive view of your company financial health. This transparency is crucial for several key stakeholders",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Local Expertise with a Global Perspective",
      description:
        "We understand the unique challenges businesses in the DC, Maryland, and Northern Virginia area face, and we combine this local knowledge with global best practices. A tech firm in Washington, DC, was able to streamline their project management and accounting processes, reducing overhead by 18% and improving project delivery times by 22%.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "End-to-End Support",
      description:
        "From consultation to implementation and ongoing support, we are with you every step of the way. A logistics company we worked with was facing challenges with their ERP system post-implementation; our team provided continuous support, resulting in a 40% reduction in system downtime and improved overall efficiency.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
