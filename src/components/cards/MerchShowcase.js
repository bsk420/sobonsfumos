import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-900 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;


const CardText = tw.div`p-4 text-white`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "",
  tabs = {
    All: [
      {
        imageSrc:
          "https://bucket-production-8051.up.railway.app/medusa-products/NMD00221-1718229000103.jpg",
        title: "Hoodie - SóBonsFumos Edition",
        content: "",
        price: "$5.99",
        url: "https://instagram.com/sbf__tv",
        outofstock: true,
        stocktext: "Out of Stock"
      },
      {
        imageSrc:
          "https://bucket-production-8051.up.railway.app/medusa-products/410232105_1763768647422434_4060383379592989974_n-1718227599651.jpg",
        title: "Scissors Kit - BELDI Edition",
        content: "",
        price: "$5.99",
        url: "https://instagram.com/sbf__tv",
        stocktext: "Buy Now"
      },
      {
        imageSrc:
          "https://bucket-production-8051.up.railway.app/medusa-products/410343223_880975283669037_6382356238629676980_n-1718227350964.jpg",
        title: "Rolling Bowl - BELDI Edition",
        content: "",
        price: "$5.99",
        url: "https://instagram.com/sbf__tv",
        stocktext: "Buy Now"
      },
      {
        imageSrc:
          "https://bucket-production-8051.up.railway.app/medusa-products/410196165_370448245534470_3196287660758857099_n-1718226756338.jpg",
        title: "UV Glass Stash Jar - SóBonsFumosTV Edition",
        content: "",
        price: "$5.99",
        url: "https://instagram.com/sbf__tv",
        stocktext: "Buy Now"
      },
      {
        imageSrc:
          "https://bucket-production-8051.up.railway.app/medusa-products/410196165_370448245534470_3196287660758857099_n-1718226756338.jpg",
        title: "UV Glass Stash Jar - BELDI Edition",
        content: "",
        price: "$5.99",
        url: "https://instagram.com/sbf__tv",
        outofstock: true,
        stocktext: "Out of Stock"
      },
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                

                <Card className="group" href={card.outofstock ? '#' : card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton  disabled={card.outofstock}>{card.outofstock ? 'Out of Stock' : 'Buy Now'}</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */