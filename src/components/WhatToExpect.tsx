import { cn } from "@/utils/functions";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { FC } from "react";

const whatToExpectVariants = cva(
  "background-wide relative mb-14 flex flex-col sm:flex-row sm:gap-10",
  {
    variants: {
      color: {
        0: "bg-[#CDDFE0] shadow-[#CDDFE0]",
        1: "bg-[#E0D5CD] shadow-[#E0D5CD]",
        2: "bg-[#E0CDCD] shadow-[#E0CDCD]",
      },
    },
    defaultVariants: {
      color: 0,
    },
  }
);

interface WhatToExpectProps {
  title: string;
  paragraph: string;
  image_url: string;
  className?: string;
  index: number;
}

const WhatToExpect: FC<WhatToExpectProps> = ({
  title,
  paragraph,
  image_url,
  className,
  index,
}) => {
  return (
    <div
      className={cn(
        whatToExpectVariants({ color: (index % 3) as 0 | 1 | 2 }),
        className
      )}
    >
      <div className=" w-full p-6 sm:w-1/2">
        <h4 className=" mb-6 text-lg font-semibold">{title}</h4>
        <p>{paragraph}</p>
      </div>
      <Image
        className="w-full object-cover sm:w-1/2 sm:flex-1 "
        src={image_url}
        height={500}
        width={500}
        alt="hair salon"
      />
    </div>
  );
};

export default WhatToExpect;
