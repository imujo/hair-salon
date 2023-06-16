import { FC } from "react";
import NavItem from "./NavItem";

interface navProps {}

const nav: FC<navProps> = () => {
  return (
    <div className="fixed top-0 left-0  w-full flex justify-center   bg-white">
      <ul className="max-w-6xl flex h-14 items-center gap-8  w-full px-14">
        <li className="flex-1">
          <h4 className="font-bold">Hair Salon</h4>
        </li>
        <NavItem title="Home" href="/" />
        <NavItem title="Our Work" href="/our-work" />
        <NavItem title="Pricing" href="/pricing" />
        <NavItem title="Contact Us" href="/contact" />
      </ul>
    </div>
  );
};

export default nav;
