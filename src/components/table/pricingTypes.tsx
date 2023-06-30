"use client";
export type ServiceType = {
  title: string;
  imageUrl: URL;
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

export const serviceTypes: ServiceType[] = [
  {
    title: "Musko sisanje",
    imageUrl: new URL("https://youtube.com"),
  },
  {
    title: "Zensko sisanje",
    imageUrl: new URL("https://youtube.com"),
  },
  {
    title: "Svecana Frizura",
    imageUrl: new URL("https://youtube.com"),
  },
  {
    title: "Pramenovi",
    imageUrl: new URL("https://youtube.com"),
  },
  {
    title: "Ekstenzije",
    imageUrl: new URL("https://youtube.com"),
  },
];

export const data: Service[] = [
  {
    title: "Kratko sisanje",
    price: 8.9,
    type: serviceTypes[0],
  },
  {
    title: "Kratko sisanje",
    price: 8.9,
    type: serviceTypes[1],
  },
  {
    title: "Kratko sisanje",
    price: 8.9,
    type: serviceTypes[0],
  },
  {
    title: "Kratko sisanje",
    price: 8.9,
    type: serviceTypes[2],
  },
];
