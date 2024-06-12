import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import ShieldIconImage from "images/shield-icon.svg";

const Container = tw.div`relative bg-black -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
  cards = null,
  heading = "Included in all Packages",
  subheading = "",
  description = "This is included in all the packages below for the SBF's Experience in Moroccos."
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "2-Way Flight Tickets",
      description: "You'll get the tickets to come and go from Spain to Morocco ( Seville to Tetouan )."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Airport Transportation",
      description: "You'll get the private transportation from the airport to your Stay and back to the airport in Morocco."
    },
    {
      imageSrc: ShieldIconImage,
      title: "7 Days of Experience with Accomodation",
      description: "You'll have seven days of experience planned by SBF himself, with accomodation for those days."
    },

    {
      imageSrc: ShieldIconImage,
      title: "Traditional Farm and Plantations Tours",
      description: "You'll have some tours to the traditional farm and the plantations, with private transportion."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Akchour Waterfalls Tour",
      description: "You'll have a tour to the beautiful Akchour Waterfalls, with private transportation."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Chefchaouen Tour",
      description: "You'll have tour through Chefchaouen's architecture, history and craftsmanship."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Cannabic Processes",
      description: "You'll be able to observe and participate in all the cannabic processes available."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Welcoming Gifts",
      description: "You'll have some gifts waiting for you at your apartment upon arrival."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Craftsmanship Gifts",
      description: "You'll be given some gifts from the local craftsmanship."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Breakfest Meals",
      description: "You're meals will be covered, accordigly to the itenerary."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Lunch Meals",
      description: "You're meals will be covered, accordigly to the itenerary."
    },
    {
      imageSrc: ShieldIconImage,
      title: "Dinner Meals",
      description: "You're meals will be covered, accordigly to the itenerary."
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
