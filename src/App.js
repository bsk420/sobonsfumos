import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import 'app.css'
import styled from "styled-components";
import tw from "twin.macro";



import ComponentRenderer from "ComponentRenderer.js";
import MainPage from "Main.js";
import DocumentariesPage from "Documentaries.js";
import ExperiencesPage from "Experiences.js";
import EventsPage from "Events.js";
import MerchPage from "Merch.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;



  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/documentaries" element={<DocumentariesPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
