import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";

import Hero from "components/hero/Merch";
import Footer from "components/footers/Footer.js";
import MerchDescription from "components/misc/Merch.js";
import MerchShowcase from "components/cards/Merch.js";


/* Hero */

export default ({
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])
  

  const Container = tw.div`relative`;

  return (
    <AnimationRevealPage disabled>
      <Container>
        <Hero />
        <MerchShowcase />
        <MerchDescription />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
