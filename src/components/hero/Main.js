import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${PrimaryLink} {
      ${tw`bg-gray-800`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500 `}
  }
`;

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

const SlantedBackground = styled.span`
  ${tw`relative text-black px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/documentaries">
        Documentaries
      </NavLink>
      <NavLink href="/experiences">
        Experiences
      </NavLink>
      <NavLink href="/events">
        Events
      </NavLink>
      <NavLink href="/merch">
        Merch
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="https://buy.sbftv.com/">
        Store
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <>
      <Container>
        <HeroContainer>
          <StyledHeader links={navLinks} />
          <TwoColumn>
            <LeftColumn>
              <Heading>
                <SlantedBackground>For the culture,</SlantedBackground>
                <br />
                By the culture.
              </Heading>
            </LeftColumn>
            <RightColumn>
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
    </>
  );
};
