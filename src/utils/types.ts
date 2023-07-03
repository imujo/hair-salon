export type HeaderData = {
  title: string;
  subtitle: string;
  address: {
    lat: number;
    lon: number;
  };
  addressText: string;
  monFriWorkingHours: string;
  satWorkingHours: string;
};

export type WhatToExpectData = {
  title: string;
  content: string;
  image: { url: string };
}[];

export type PartnersData = {
  image: { url: string; title: string };
  partnerWebsite: string;
}[];

export type TeamMembersData = { name: string; image: { url: string } }[];

export type ServiceType = {
  title: string;
};

export type Service = {
  title: string;
  price: number;
  type: ServiceType;
};
