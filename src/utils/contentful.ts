import fetchGraphQL from "./fetchGraphQL";
import {
  HeaderData,
  PartnersData,
  Service,
  TeamMembersData,
  WhatToExpectData,
} from "./types";

export async function getHomePageData() {
  const res = await fetchGraphQL(`
    {
      headerCollection{
          items{
              title
              subtitle
              address{
                  lat
                  lon
              }
              addressText
              monFriWorkingHours
              satWorkingHours
          }
      }
      whatToExpectCollection{
          items{
              title
              content
              image{
                  url
              }
          }
      }
      ourPartnersCollection{
          items{
              image{
                  url
                  title
              }
              partnerWebsite
          }
      }
      ourTeamCollection{
          items{
              content
          }
      }
      teamMembersCollection{
          items{
              name
              image{
                  url
              }
          }
      }
  }
    `);
  if (res == undefined || res == null) return null;
  const header: HeaderData = res.data.headerCollection.items[0];
  const whatToExpect: WhatToExpectData = res.data.whatToExpectCollection.items;
  const partners: PartnersData = res.data.ourPartnersCollection.items;
  const ourTeam: string = res.data.ourTeamCollection.items[0].content;
  const teamMembers: TeamMembersData = res.data.teamMembersCollection.items;

  return {
    header: header,
    whatToExpect: whatToExpect,
    partners: partners,
    ourTeam: ourTeam,
    teamMembers: teamMembers,
  };
}

export async function getPhoneNumber(): Promise<string> {
  const res = await fetchGraphQL(`
    {
      contactCollection{
          items{
              phoneNumber
          }
      }
  }
  `);

  return res.data.contactCollection.items[0].phoneNumber;
}

export async function getServices(): Promise<Service[]> {
  const res = await fetchGraphQL(`
    {
      serviceCollection{
          items{
              title
              price
              type{
                  title
              }
          }
      }
  }
    `);
  return res.data.serviceCollection.items;
}
