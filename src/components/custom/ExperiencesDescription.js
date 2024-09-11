import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import ShopImage from "images/sobonsfumos/sbftv-logo512.png";
import {ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


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

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-gray-600 text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Heading2 = tw(
  SectionHeading
)`mt-4 font-black text-gray-600 text-left text-2xl sm:text-2xl lg:text-2xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`;


export default ({
  heading = (
    <>
     <span tw="text-white">Open for Booking</span>
    </>
  ),
  heading2 = (
    <>
     <span tw="text-white">Our Goal</span>
    </>
  ),
  description = "With our private Tours, we guarantee that you will be able to experience in first hand what you saw on our documentaries.\nWe are proud to be the first in Portugal with this exclusive service, ofering a new approach to explore Cannabis cultures all around the world.\nWe take care of your flights, transports, elevated welcoming gifts, stays, meals, and any other headache. All you have to do, is to chill and enjoy your time.",
  imageSrc = ShopImage,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = true,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
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
        <ImageColumn>
          <Heading2 style={{ position: "relative", top: '-5vh', left: '26.5vh'}}>{heading}</Heading2>
          <Image style={{ position: "relative", top: '-4vh', left: '16.5vh', width: '65%', height: '65%'}} src="https://i.imgur.com/T3IPCCm.png"></Image>
          <center><a style={{ position: "relative", left: '5vh', top: '-2vh'}} href=""><PrimaryButtonBase disabled='true' style={{fontSize: '100%', backgroundColor: '#0b6a9c'}}> More information soon..</PrimaryButtonBase></a></center>
        </ImageColumn>
      </TwoColumn>
    </Container>
  );
};
