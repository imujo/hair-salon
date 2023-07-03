import clsx, { ClassValue } from "clsx";
import { twJoin, twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export const euroFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
