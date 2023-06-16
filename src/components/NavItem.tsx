"use client";
import { cn } from "@/utils/functions";
import { cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const navItemVariants = cva("font-light text-sm  hover:text-gray-900", {
  variants: {
    variant: {
      default: "text-gray-500",
      selected: "text-gray-900 font-normal",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface NavItemProps extends LinkProps {
  title: string;
  selected?: boolean;
  className?: string;
}

const NavItem: FC<NavItemProps> = ({ title, href, className, ...props }) => {
  const pathname = usePathname();

  const style =
    href == pathname
      ? navItemVariants({ variant: "selected" })
      : navItemVariants({ variant: "default" });

  return (
    <li>
      <Link {...props} href={href} className={cn(className, style)}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
