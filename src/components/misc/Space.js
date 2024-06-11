import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`relative`}
`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export default () => {
  return (
    <>
      <Container>
        <HeroContainer>
          <TwoColumn>
            <LeftColumn>
            </LeftColumn>
            <RightColumn>
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
    </>
  );
};
