import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" z-[-1] mt-12 flex h-14 w-full items-center justify-center bg-gray-800 text-xs font-extralight text-white">
      © 2023 All rights reserved. Made by Ivo Mujo
    </footer>
  );
};

export default Footer;
