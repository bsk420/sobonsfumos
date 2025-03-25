import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-gray-600 text-3xl sm:text-4xl lg:text-5xl text-center leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`;


export default ({
  heading2 = (
    <>
     <span tw="text-white">Our Goal</span>
    </>
  ),
  description = "With our private Tours, we guarantee that you will be able to experience in first hand what you saw on our documentaries.\nWe are proud to be the first in Portugal with this exclusive service, ofering a new approach to explore Cannabis cultures all around the world.\nWe take care of your flights, transports, elevated welcoming gifts, stays, meals, and any other headache. All you have to do, is to chill and enjoy your time.",
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
      <TextColumn textOnLeft={textOnLeft}>
          <TextContent >
            <Heading style={{position: "relative", top: '-12vh'}}>{heading2}</Heading>
            <Description style={{ backgroundColor: 'rgba(37, 150, 190, 0.2)', padding: '10px',  position: "relative", top: '-10vh'}}>{description}</Description>
          </TextContent>
        </TextColumn>
        <ImageColumn >
          <Image style={{ position: "relative", top: '-4vh', width: '100%', height: '100%', paddingLeft: '20vh', paddingRight: '2'}} src="https://i.imgur.com/FQmS2ib.jpeg"></Image>
        </ImageColumn>
      </TwoColumn>
    </Container>
  );
};
