import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-gray-600 text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-lg md:text-base lg:text-lg font-medium leading-relaxed text-white`;

export default ({
  heading = (
    <>
      <span tw="text-white">Our Events      </span>
    </>
  ),
  description = "With our events, we intend to gather like-minded people with the same love for our sacret plant and all that it envolves.\nLearning with eachother and about eachother, exchanging ideas, flavours and knowledge. With our freedom and safety as a priority.\nGrowing stronger as a community, helping the culture prosper and elevate even more.",
  imageContainerCss = null,
  imageInsideDiv = true,
  textOnLeft = false
}) => {
  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description style={{ backgroundColor: 'rgba(37, 150, 190, 0.2)', padding: '10px',}}>{description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
