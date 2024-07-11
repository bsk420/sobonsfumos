import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";

import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border  bg-gray-900 max-w-sm border-black sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold text-white`;



const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const Text2 = tw.div``;


const Center = tw.div`ml-2 text-2xl font-semibold text-white relative`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://i.imgur.com/5vfrvRv.png",
      title: "MOROCCO'S EXPERIENCE 1PAX",
      locationText: "Morocco",
      pricingText: "750€",
      pax: 1,
      totalText: "",
      url: "https://sbftv.com/itenerary.pdf"
    },
    {
      imageSrc: "https://i.imgur.com/WXxWq7q.png",
      title: "MOROCCO'S EXPERIENCE 2PAX",
      locationText: "Morocco",
      pricingText: "700€/pax",
      pax: 2,
      totalText: "",
      url: "https://sbftv.com/itenerary.pdf"
    },
    {
      imageSrc: "https://i.imgur.com/m8aM4EV.png",
      title: "MOROCCO'S EXPERIENCE 4PAX",
      locationText: "Morocco",
      pricingText: "680€/pax",
      pax: 4,
      totalText: "",
      url: "https://sbftv.com/itenerary.pdf"
    },
    {
      imageSrc: "https://i.imgur.com/rkkGK2H.png",
      title: "MOROCCO'S EXPERIENCE 6PAX",
      locationText: "Morocco",
      pricingText: "630€/pax",
      pax: 6,
      totalText: "",
      url: "https://sbftv.com/itenerary.pdf"
    }
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Tours</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
              </TextInfo>
              <Center>
              <IconWithText>
                      <Text2  >{card.pricingText}<br />{card.totalText}</Text2>
              </IconWithText>
              </Center>
              <br />

              <PrimaryButton as="a" href={card.url}>Ver itinerário</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
