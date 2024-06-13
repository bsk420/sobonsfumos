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
        "https://i.imgur.com/dvg4ziQ.png",
      subtitle: "Concluded",
      title: "Cannadouro 2023",
      description:
        "At this event we premiered the Beldi documentary for the first time in Porto, Portugal.",
      url: "https://cannadouro.pt/"
    },

    {
      imageSrc:
        "https://i.imgur.com/RdKLbY4.png",
      subtitle: "Concluded",
      title: "FUMOS'S SECRET SESH",
      description:
        "At this event we premiered the Beldi documentary for the second time this time in Lisbon, Portugal.",
      url: "https://xceed.me/en/lisboa/event/fumos-secret-sesh-2--142648"
    },

    {
      imageSrc:
        "/cogbeldi.png",
      subtitle: "Concluded",
      title: "COGNOSCITIVA x SBFTV",
      description:
        "At this event we presented the Beldi documentary for the third and last time.",
      url: "https://xceed.me/en/lisboa/event/fumos-secret-sesh-2--142648"
    },

    {
      imageSrc:
        "/expericesbf.png",
      subtitle: "24 July - 21 August",
      title: "MOROCCO'S SBF EXPERIENCE",
      description:
      "A new aproach at a tourist sighseeing.",
      url: ""
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Events</HeadingTitle>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
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
