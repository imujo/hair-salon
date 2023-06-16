import Address from "@/components/Address";
import Button from "@/components/Button";
import Nav from "@/components/Nav";
import { NextPage } from "next";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="  w-full ">
      <header className="flex flex-row gap-4 h-screen ">
        <section className="w-full pt-36">
          <h1 className=" text-4xl font-bold mb-6 leading-snug">
            Elevate Your <span className=" text-[#6BC0C5]">Style</span> with
            Unparalleled Haircare
          </h1>
          <h3 className="text-xl font-light">
            Unleash Your Hair&apos;s Potential with Uncompromising Quality
          </h3>

          <div className="my-12 flex gap-10 items-center">
            <Button title="Contact Us" />
            <Address
              href="https://goo.gl/maps/rby8rfXyehgEfHUHA"
              address="Rapska ulica 22, Zagreb"
              target="_blank"
            />
          </div>

          <div className="flex gap-10 [&>ul>li]:mb-2">
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
        <section className=" w-full">
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
