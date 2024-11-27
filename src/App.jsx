import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { UnderConstruction } from "./components/underconstruction";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} fileUrl="https://drive.usercontent.google.com/download?id=1ixzVYCYQBxY8u9PPgY7MCRxlJb7i6hkK&export=download&authuser=0&confirm=t&uuid=62d1e89d-3214-4d80-9756-fae6b57d8dbe&at=AENtkXaN_6Ib4WB-8jJWTl2YwDdc:1732682481041" fileName="CV Tyogo 2024"/>
      <UnderConstruction/>
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} />
      <About data={landingPageData.About2} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
