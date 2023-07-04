import Address from "@/components/Address";
import Button from "@/components/Button";
import OurTeamCarousel from "@/components/OurTeamCarousel";
import WhatToExpect from "@/components/WhatToExpect";
import { getHomePageData } from "@/utils/contentful";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const data = await getHomePageData();

  if (data == null) throw new Error("Internal Server Error");

  const { header, whatToExpect, partners, ourTeam, teamMembers } = data;

  return (
    <div className=" w-full ">
      <header className="mb-20 flex flex-row justify-center gap-4 text-center md:text-left ">
        <section className="flex w-full flex-col pt-16 md:pt-20 lg:pt-32">
          <h1 className=" mb-6 text-4xl font-bold leading-snug">
            {/* Elevate Your <span className=" text-[#6BC0C5]">Style</span> with
            Unparalleled Haircare */}
            {header.title}
          </h1>
          <h2 className="text-xl font-light">
            {/* Unleash Your Hair&apos;s Potential with Uncompromising Quality */}
            {header.subtitle}
          </h2>

          <div className="my-16 flex flex-col items-center justify-center gap-4 md:items-start md:justify-start lg:flex-row lg:items-center">
            <Link href={"contact"}>
              <Button title="Contact Us" />
            </Link>
            <Address
              href={`https://maps.google.com/?q=${header.address.lat},${header.address.lon}`}
              address={header.addressText}
            />
          </div>

          <div className="flex justify-center gap-10 md:justify-start [&>ul>li]:mb-2">
            <ul className="font-light">
              <li>Mon-Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="font-semibold">
              <li>{header.monFriWorkingHours}</li>
              <li>{header.satWorkingHours}</li>
            </ul>
          </div>
        </section>
        <section className="relative hidden w-full md:block">
          <Image
            src="/heading_image.png"
            alt="woman_smiling"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw"
          />
        </section>
      </header>

      <h3 id="what-to-expect">What To Expect?</h3>
      <div className=" sm:[&>*:nth-child(even)]:flex-row-reverse ">
        {whatToExpect.map((data, i) => {
          return (
            <WhatToExpect
              title={data.title}
              paragraph={data.content}
              image_url={data.image.url}
              key={i}
              index={i}
            />
          );
        })}
      </div>

      <h3 className=" mt-16" id="our-partners">
        Our Partners
      </h3>
      <div className="flex h-[700px] w-full flex-col items-center gap-8 sm:h-auto sm:flex-row ">
        {partners.map((data, i) => {
          return (
            <a
              className="relative h-24 w-full flex-1 cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:shadow sm:h-40 md:h-52 lg:h-64"
              href={data.partnerWebsite}
              key={i}
              target="_blank"
            >
              <Image
                fill
                alt={data.image.title}
                src={data.image.url}
                className=" object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              />
            </a>
          );
        })}
      </div>
      <section className="background-wide mt-16 flex flex-col gap-10 bg-[#DBE8F0] py-20 shadow-[#DBE8F0] sm:flex-row sm:gap-14 ">
        <div>
          <h3 id="our-team">Meet Our Dedicated Team</h3>
          <p className=" max-w-md">{ourTeam}</p>
        </div>
        <OurTeamCarousel data={teamMembers} />
      </section>
    </div>
  );
};

export default Home;
