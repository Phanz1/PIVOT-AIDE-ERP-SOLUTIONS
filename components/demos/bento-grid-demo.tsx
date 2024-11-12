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
      title: "Experienced Team: ",
      description:
        "Certified tax professionals with extensive knowledge of local, state, and federal tax regulations.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Tailored Services: ",
      description:
        "We understand your unique tax situation and create solutions just for you.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Local Expertise: ",
      description:
        "Serving the DMV area, we have deep insight into the tax laws specific to Washington DC, Maryland, and Virginia.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
