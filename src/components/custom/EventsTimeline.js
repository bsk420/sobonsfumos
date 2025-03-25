import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-white`;
const Description = tw.p`mt-2 text-lg leading-loose text-white`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://i.imgur.com/nEWDaKd.png",
      subtitle: "Concluded",
      title: "Cannadouro 2023",
      description:
        "In Porto, during Cannadouro event, we had our Premiere of the \"BELDI\" (2023) Documentary, being also featured in the event's official magazine.",
      url: "https://cannadouro.pt/"
    },

    {
      imageSrc:
        "https://i.imgur.com/yl4TCj5.png",
      subtitle: "Concluded",
      title: "FUMOS'S SECRET SESH",
      description:
        "In Lisboa, at NAV we produced Portugal's first Secret Sesh private event and screened \"BELDI\" (2023) for the first time in Lisbon. The event was sold out, with hundreds of tickets acquired. We cannot thank you enough ❤️",
      url: "https://xceed.me/en/lisboa/event/fumos-secret-sesh-2--142648"
    },

    {
      imageSrc:
        "https://i.imgur.com/LL6iDW9.png",
      subtitle: "Concluded",
      title: "MOROCCAN WAY",
      description:
        "In Lisboa, at Cognoscitiva, we had our third and final screening of the \"BELDI\" (2023) Documentary. This event also had live music with traditional Arabic instruments and food that made you smile 😉",
      url: "https://xceed.me/en/lisboa/event/fumos-secret-sesh-2--142648"
    },

    {
      imageSrc:
        "https://i.imgur.com/PSUJYxL.jpeg",
      subtitle: "Concluded",
      title: "MOROCCO'S SBF EXPERIENCE 2024",
      description:
      "This Summer we had our first Moroccan Experience open to the public, we set 3 dates for the excursions and more than 15 people joined the adventure of exploring the Cannabis culture in the North of Morocco.",
      url: ""
    },

    {
      imageSrc:
        "https://i.imgur.com/yl4TCj5.png",
      subtitle: "Concluded",
      title: "FUMOS'S SECRET SESH V2",
      description:
        "In Lisboa, at NAV we produced Portugal's second Secret Sesh private event and screened \"BELDI\" (2023) for the first time in Lisbon. The event was sold out, with hundreds of tickets acquired. We cannot thank you enough ❤️",
      url: "https://xceed.me/en/lisboa/event/fumos-secret-sesh-2--142648"
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description style={{ backgroundColor: 'rgba(37, 150, 190, 0.2)', padding: '10px',}}>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
