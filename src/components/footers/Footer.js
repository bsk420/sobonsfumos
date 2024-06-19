import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "../../images/sobonsfumos/sbftv-logo512.png";
import { ReactComponent as YoutubeIcon } from "images/sobonsfumos/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "images/sobonsfumos/instagram-icon.svg";

const Container = tw.div`relative text-white -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-white`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <SixColumns>
        <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>About</ColumnHeading>
              <SubscribeText>
                Tomás "SBF" Percheiro<br />
                Cannabis Journalist & Guide
              </SubscribeText>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
          <Column>
          </Column>
          <Column>
          </Column>
          <Column>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Contact</ColumnHeading>
              <SubscribeText>
                WhatsApp: +351 934 455 925<br />
                Email: contact@sbftv.com
              </SubscribeText>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CopywrightNotice>&copy; 2017 SóBonsFumosTV. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://instagram.com/so.bons.fumos">
              <InstagramIcon style={{color: "white"}}/>
            </SocialLink>
            <SocialLink href="https://instagram.com/sbf__tv">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCwOAIg3dFpZcmXKOuiBLCNw">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
