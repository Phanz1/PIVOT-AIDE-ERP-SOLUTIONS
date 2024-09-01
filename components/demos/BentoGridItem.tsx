import React, { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridItemProps {
  title: string;
  description: string;
  header?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function BentoGridItem({
  title,
  description,
  header,
  icon,
  className,
}: BentoGridItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-between p-4 border rounded-lg bg-white shadow-sm transition-all",
        className
      )}
    >
      {header}
      <div className="flex items-center mt-2">
        {icon}
        <h3 className="ml-2 text-lg font-semibold">{title}</h3>
      </div>
      <p
        className={`mt-2 text-base transition-all ${
          isExpanded ? "max-h-full" : "max-h-16 overflow-hidden"
        }`}
      >
        {description}
      </p>
      <button
        className="mt-2 text-sm text-blue-500 focus:outline-none"
        onClick={toggleExpand}
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
}
