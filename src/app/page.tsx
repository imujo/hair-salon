import Address from "@/components/Address";
import Button from "@/components/Button";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="w-full h-[1000px] ">
      <header className="flex flex-row gap-4 h-screen justify-center text-center md:text-left ">
        <section className="w-full pt-16 flex flex-col md:pt-20 lg:pt-32">
          <h1 className=" text-4xl font-bold mb-6 leading-snug">
            Elevate Your <span className=" text-[#6BC0C5]">Style</span> with
            Unparalleled Haircare
          </h1>
          <h3 className="text-xl font-light">
            Unleash Your Hair&apos;s Potential with Uncompromising Quality
          </h3>

          <div className="my-16 flex gap-4 items-center justify-center flex-col md:items-start md:justify-start lg:flex-row lg:items-center">
            <Button title="Contact Us" />
            <Address
              href="https://goo.gl/maps/rby8rfXyehgEfHUHA"
              address="Rapska ulica 22, Zagreb"
              target="_blank"
            />
          </div>

          <div className="flex gap-10 [&>ul>li]:mb-2 justify-center md:justify-start">
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
        <section className="w-full hidden md:block ">
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
