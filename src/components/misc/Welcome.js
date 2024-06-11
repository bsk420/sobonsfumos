import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import DocumentariesLogo from "images/sobonsfumos/sbftv-logo512.png";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-gray-600 text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-2xl md:text-2xl lg:text-2xl font-medium leading-relaxed text-white`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-white -z-10`
]);

export default ({
  description = "More than a brand, it's a celebration of cannabis culture. We craft threads by the culture, for the culture. Rep your love for the plant with high-quality apparel that sparks conversation and elevates the experience. Join the movement.",
  imageSrc = DocumentariesLogo,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
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
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
