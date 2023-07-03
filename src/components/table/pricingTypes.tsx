"use client";
export type ServiceType = {
  title: string;
};

export type Service = {
  title: string;
  price: number;
  type: ServiceType;
};

export const euroFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
