import React from "react";
import WhyUs from "./why-us";
import SectionTitle from "../Title/SectionTitle";

import AboutSideImg from "./AboutSideImg";
import AboutContent from "./AboutContent";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <SectionTitle>Haqqımızda</SectionTitle>
        <div className="row about-row">
          <AboutSideImg />
          <AboutContent />
        </div>
        <WhyUs />
      </div>
    </section>
  );
};
export default AboutSection;
