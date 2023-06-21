"use client";
import { FC, useRef, useState } from "react";
import NavItem from "./NavItem";
import { AiOutlineMenu } from "react-icons/ai";
import { cn } from "@/utils/functions";
import useClickOutside from "@/hooks/useClickOutside";
import Link from "next/link";

interface navProps {}

const Nav: FC<navProps> = () => {
  const [open, setOpen] = useState(false);
  const hamburgerMenuRef = useRef(null);
  useClickOutside(hamburgerMenuRef, () => setOpen(false));

  return (
    <nav className="fixed left-0 top-0 z-[100]  flex h-12 w-full justify-center bg-white ">
      <ul className="flex h-12 w-full max-w-6xl items-center gap-8 px-8">
        <li className="flex-1">
          <Link href="/">
            <h4 className="font-bold">Hair Salon</h4>
          </Link>
        </li>
        <li className=" md:hidden" onClick={() => setOpen(true)}>
          <AiOutlineMenu />
        </li>
        <ul
          ref={hamburgerMenuRef}
          className={cn(
            " fixed right-0 top-0 z-[100] flex h-screen  w-3/4 translate-x-full flex-col bg-slate-700 p-8 shadow-2xl transition-transform md:relative md:h-12 md:max-w-6xl md:translate-x-0 md:flex-row md:items-center md:justify-end md:gap-8  md:bg-white md:p-0  md:shadow-none",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <NavItem onClick={() => setOpen(false)} title="Home" href="/" />
          <NavItem
            onClick={() => setOpen(false)}
            title="Our Work"
            href="/our-work"
          />
          <NavItem
            onClick={() => setOpen(false)}
            title="Pricing"
            href="/pricing"
          />
          <NavItem
            onClick={() => setOpen(false)}
            title="Contact Us"
            href="/contact"
          />
        </ul>
      </ul>
    </nav>
  );
};

export default Nav;
