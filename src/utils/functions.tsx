import clsx, { ClassValue } from "clsx";
import { twJoin, twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
