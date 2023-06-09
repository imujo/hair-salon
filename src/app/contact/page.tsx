import ConcatForm from "@/components/ContactForm";
import { getPhoneNumber } from "@/utils/contentful";
import Image from "next/image";

const Contact = async () => {
  const phoneNumber = await getPhoneNumber();

  return (
    <div className="mt-7 flex gap-6">
      <div className="relative  hidden w-1/2  items-center justify-start lg:flex">
        <div className="relative h-full w-5/6">
          <Image
            fill
            alt="hairdresser"
            className=" object-contain"
            src={"/contact_image.png"}
            sizes="(min-width: 1000px) 50vw, 0vw"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <h3>Contact Us</h3>

        <div className="flex w-full justify-between ">
          <span className="font-light text-gray-500">Phone Number</span>
          <span className="font-medium text-gray-700 ">{phoneNumber}</span>
        </div>

        <div className="relative mb-12">
          <div className=" my-4 h-[1px] w-full bg-gray-300" />
          <span className="absolute right-1/2 top-[-0.75rem] translate-x-[50%] bg-white px-3 text-gray-400 ">
            or
          </span>
        </div>
        <ConcatForm />
      </div>
    </div>
  );
};

export default Contact;
