import Address from "@/components/Address";
import Button from "@/components/Button";
import OurTeamCarousel from "@/components/OurTeamCarousel";
import WhatToExpect from "@/components/WhatToExpect";
import { partners, what_to_expect } from "@/temp";
import fetchGraphQL from "@/utils/fetchGraphQL";
import Image from "next/image";
import Link from "next/link";

const getPageInfo = async () => {
  const res = await fetchGraphQL(`
  {
    headerCollection{
        items{
            title
            subtitle
            address{
                lat
                lon
            }
            addressText
            monFriWorkingHours
            satWorkingHours
        }
    }
    whatToExpectCollection{
        items{
            title
            content
            image{
                url
            }
        }
    }
    ourPartnersCollection{
        items{
            image{
                url
                title
            }
            partnerWebsite
        }
    }
    ourTeamCollection{
        items{
            content
        }
    }
    teamMembersCollection{
        items{
            name
            image{
                url
            }
        }
    }
}
  `);

  return res.data;
};

const Home = async () => {
  const pageData = await getPageInfo();
  const headerData = pageData.headerCollection.items[0];
  const whatToExpectData: {
    title: string;
    content: string;
    image: { url: string };
  }[] = pageData.whatToExpectCollection.items;
  const partnersData: {
    image: { url: string; title: string };
    partnerWebsite: string;
  }[] = pageData.ourPartnersCollection.items;
  const ourTeamParagraph: string = pageData.ourTeamCollection.items[0].content;
  const ourMembers: { name: string; image: { url: string } }[] =
    pageData.teamMembersCollection.items;

  return (
    <div className=" w-full ">
      <header className="mb-20 flex flex-row justify-center gap-4 text-center md:text-left ">
        <section className="flex w-full flex-col pt-16 md:pt-20 lg:pt-32">
          <h1 className=" mb-6 text-4xl font-bold leading-snug">
            {/* Elevate Your <span className=" text-[#6BC0C5]">Style</span> with
            Unparalleled Haircare */}
            {headerData.title}
          </h1>
          <h2 className="text-xl font-light">
            {/* Unleash Your Hair&apos;s Potential with Uncompromising Quality */}
            {headerData.subtitle}
          </h2>

          <div className="my-16 flex flex-col items-center justify-center gap-4 md:items-start md:justify-start lg:flex-row lg:items-center">
            <Link href={"contact"}>
              <Button title="Contact Us" />
            </Link>
            <Address
              href={`https://maps.google.com/?q=${headerData.address.lat},${headerData.address.lon}`}
              address={headerData.addressText}
            />
          </div>

          <div className="flex justify-center gap-10 md:justify-start [&>ul>li]:mb-2">
            <ul className="font-light">
              <li>Mon-Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="font-semibold">
              <li>{headerData.monFriWorkingHours}</li>
              <li>{headerData.satWorkingHours}</li>
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

      <h3 id="what-to-expect">What To Expect?</h3>
      <div className=" sm:[&>*:nth-child(even)]:flex-row-reverse ">
        {whatToExpectData.map((data, i) => {
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
      <div className="flex w-full flex-col items-center gap-2 sm:flex-row ">
        {partnersData.map((data, i) => {
          return (
            <a
              className="flex-1 cursor-pointer p-5 transition-all duration-300 hover:bg-gray-50 hover:shadow"
              href={data.partnerWebsite}
              key={i}
              target="_blank"
            >
              <Image
                height={300}
                width={300}
                alt={data.image.title}
                src={data.image.url}
              />
            </a>
          );
        })}
      </div>
      <section className="background-wide mt-16 flex flex-col gap-10 bg-[#DBE8F0] py-20 shadow-[#DBE8F0] sm:flex-row sm:gap-14 ">
        <div>
          <h3 id="our-team">Meet Our Dedicated Team</h3>
          <p className=" max-w-md">{ourTeamParagraph}</p>
        </div>
        <OurTeamCarousel data={ourMembers} />
      </section>
    </div>
  );
};

export default Home;
