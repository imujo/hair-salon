import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" z-0 mt-12 flex h-14 w-full items-center justify-center bg-gray-800 text-xs font-extralight text-white">
      <p>© 2023 All rights reserved. Made by&nbsp;</p>
      <a
        href="https://github.com/imujo"
        target="_blank"
        className=" cursor-pointer underline "
      >
        Ivo Mujo
      </a>
    </footer>
  );
};

export default Footer;
