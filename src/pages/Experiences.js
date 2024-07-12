import React, { useEffect } from "react";
import  { useRouter } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import ExperiencesHero from "components/hero/ExperiencesHero.js";
import ExperiencesDescription from "components/custom/ExperiencesDescription.js";
import ExperiencesTimeline from "components/custom/ExperiencesTimeline.js";
import Footer from "components/footers/Footer.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";



/* Hero */

export default () => {
  const router = useRouter()

  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])
  

  const Container = tw.div`relative`;

  const go = () => {
    router.push(`https://sbftv.com`)
  }

  return (
    <AnimationRevealPage disabled>
      <Container>
        <ExperiencesHero />
        <ExperiencesDescription />
        <center><PrimaryButtonBase style={{fontSize: '100%'}} onClick={go}> More info</PrimaryButtonBase></center>
        <ExperiencesTimeline />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
