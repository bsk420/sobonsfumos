import React, { useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import Hero from "components/hero/Documentaries.js";
import Footer from "components/footers/Footer.js";
import DocumentariesDescription from "components/misc/DocumentariesDescription.js";
import DocumentariesHistory from "components/misc/PastDocumentaries.js";


/* Hero */

export default () => {
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
        <DocumentariesDescription />
        <DocumentariesHistory />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
