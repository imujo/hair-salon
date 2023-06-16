import Address from "@/components/Address";
import Button from "@/components/Button";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="h-[1000px] w-full ">
      <header className="flex h-screen flex-row justify-center gap-4 text-center md:text-left ">
        <section className="flex w-full flex-col pt-16 md:pt-20 lg:pt-32">
          <h1 className=" mb-6 text-4xl font-bold leading-snug">
            Elevate Your <span className=" text-[#6BC0C5]">Style</span> with
            Unparalleled Haircare
          </h1>
          <h3 className="text-xl font-light">
            Unleash Your Hair&apos;s Potential with Uncompromising Quality
          </h3>

          <div className="my-16 flex flex-col items-center justify-center gap-4 md:items-start md:justify-start lg:flex-row lg:items-center">
            <Button title="Contact Us" />
            <Address
              href="https://goo.gl/maps/rby8rfXyehgEfHUHA"
              address="Rapska ulica 22, Zagreb"
              target="_blank"
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
    </div>
  );
};

export default Home;
