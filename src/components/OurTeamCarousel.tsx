"use client";
import { FC, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface OurTeamCarouselProps {
  data: { name: string; image: { url: string } }[];
}

const OurTeamCarousel: FC<OurTeamCarouselProps> = ({ data }) => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <Carousel
      maw={250}
      mx="auto"
      height={310}
      withControls={false}
      withIndicators
      loop
      // plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideGap={20}
      styles={{
        indicator: {
          "&[data-active]": {
            backgroundColor: "lightgray",
          },
        },
      }}
    >
      {data.map((data, i) => {
        return (
          <Carousel.Slide key={i}>
            <Image
              height={300}
              width={300}
              alt={data.name}
              src={data.image.url}
              className="h-[250px] w-[250px] rounded-md object-cover shadow-md"
              onClick={(e) => {
                // clicking on a carousel item causes an error, this stops it
                e.stopPropagation();
              }}
            />
            <h5 className="mt-2 w-full text-center">{data.name}</h5>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default OurTeamCarousel;
