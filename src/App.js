import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import 'app.css'



import HomePage from "pages/Home.js";
import DocumentariesPage from "pages/Documentaries.js";
import ExperiencesPage from "pages/Experiences.js";
import EventsPage from "pages/Events.js";
import MerchPage from "pages/Merch.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documentaries" element={<DocumentariesPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/merch" element={<MerchPage />} />
        </Routes>
      </Router>
    </>
  );
}