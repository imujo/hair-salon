import Input from "@/components/Input";
import { FC } from "react";
import ConcatForm from "@/components/ConcatForm";
import Image from "next/image";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className="mt-7 flex gap-6">
      <div className="hidden w-1/2  items-center justify-start lg:flex">
        <Image
          height={1000}
          width={500}
          alt="hairdresser"
          className=" w-4/5"
          src={"/contact_image.png"}
        />
      </div>

      <div className="w-1/2">
        <h3>Contact Us</h3>

        <div className="flex w-full justify-between ">
          <span className="font-light text-gray-500">Phone Number</span>
          <span className="font-medium text-gray-700 ">091 978 9889</span>
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
