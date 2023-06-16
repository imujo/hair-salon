import { FC } from "react";
import NavItem from "./NavItem";

interface navProps {
  page: string;
}

const nav: FC<navProps> = ({ page }) => {
  return (
    <ul className="flex h-14 items-center gap-8 px-14   ">
      <li className="flex-1">
        <h4 className="font-bold">Hair Salon</h4>
      </li>
      <NavItem title="Home" href="/" />
      <NavItem title="Our Work" href="/our-work" />
      <NavItem title="Pricing" href="/pricing" />
      <NavItem title="Contact Us" href="/contact" />
    </ul>
  );
};

export default nav;
