import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
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

const Paragraph = tw.p`my-5 lg:my-8 text-lg lg:text-lg font-medium text-white max-w-lg mx-auto lg:mx-0`;


const SlantedBackground = styled.span`
  ${tw`relative text-black px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;
const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/documentaries" active>
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
              <SlantedBackground>MOROCCO BELDI</SlantedBackground>
              <br />
              <span>DOCUMENTARY</span>
            </Heading>
            <br />
            <Paragraph>UNVEIL MOROCCO's RICH CULTURE & HIDDEN HASHISH SCENE! DOCUMENTARY DEEP DIVES!</Paragraph>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="https://www.youtube.com/embed/EY8ie9QF944?si=sf9JHRIA6_upII1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
    </>
  );
};
