import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, { NavLink, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

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

export default () => {
  return (
    <>
      <Container>
        <HeroContainer>
          <StyledHeader />
        </HeroContainer>
      </Container>
    </>
  );
};
