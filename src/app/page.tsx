import Address from "@/components/Address";
import Button from "@/components/Button";
import OurTeamCarousel from "@/components/OurTeam";
import WhatToExpect from "@/components/WhatToExpect";
import { partners, what_to_expect } from "@/temp";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className=" w-full ">
      <header className="mb-20 flex flex-row justify-center gap-4 text-center md:text-left ">
        <section className="flex w-full flex-col pt-16 md:pt-20 lg:pt-32">
          <h1 className=" mb-6 text-4xl font-bold leading-snug">
            Elevate Your <span className=" text-[#6BC0C5]">Style</span> with
            Unparalleled Haircare
          </h1>
          <h2 className="text-xl font-light">
            Unleash Your Hair&apos;s Potential with Uncompromising Quality
          </h2>

          <div className="my-16 flex flex-col items-center justify-center gap-4 md:items-start md:justify-start lg:flex-row lg:items-center">
            <Button title="Contact Us" />
            <Address
              href="https://goo.gl/maps/rby8rfXyehgEfHUHA"
              address="Rapska ulica 22, Zagreb"
            />
          </div>

          <div className="flex justify-center gap-10 md:justify-start [&>ul>li]:mb-2">
            <ul className="font-light">
              <li>Mon-Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="font-semibold">
              <li>07:00-20:00</li>
              <li>07:00-15:00</li>
            </ul>
          </div>
        </section>
        <section className="hidden w-full md:block ">
          <Image
            src="/heading_image.png"
            alt="woman_smiling"
            width={500}
            height={1000}
          />
        </section>
      </header>

      <h3 className=" mb-14 text-3xl font-semibold" id="what-to-expect">
        What To Expect?
      </h3>
      <div className=" sm:[&>*:nth-child(even)]:flex-row-reverse ">
        {what_to_expect.map((data, i) => {
          return <WhatToExpect {...data} key={i} index={i} />;
        })}
      </div>

      <h3 className=" mb-14 mt-16 text-3xl font-semibold" id="our-partners">
        Our Partners
      </h3>
      <div className="flex w-full flex-col items-center gap-2 sm:flex-row ">
        {partners.map((data, i) => {
          return (
            <a
              className="flex-1 cursor-pointer p-5 transition-all duration-300 hover:bg-gray-50 hover:shadow"
              href={data.url}
              key={i}
              target="_blank"
            >
              <Image
                height={300}
                width={300}
                alt={data.title}
                src={data.image_url}
              />
            </a>
          );
        })}
      </div>
      <section className="background-wide mt-16 flex flex-col gap-10 bg-[#DBE8F0] py-20 shadow-[#DBE8F0] sm:flex-row sm:gap-14 ">
        <div>
          <h3 className=" mb-14  text-3xl font-semibold" id="our-team">
            Meet Our Dedicated Team
          </h3>
          <p className=" max-w-md">
            At our hair salon, you can be confident that you are in the hands of
            a remarkable team of professionals. Our staff is comprised of highly
            skilled and passionate individuals who are dedicated to their craft.
            With years of experience and ongoing training in the latest industry
            techniques, our talented hairstylists possess an exceptional level
            of expertise.
          </p>
        </div>
        <OurTeamCarousel />
      </section>
    </div>
  );
};

export default Home;
