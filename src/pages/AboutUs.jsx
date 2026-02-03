import React from "react";

import AboutUs from "../component/aboutUs/AboutUs";
import SkillSection from "../component/aboutUs/SkillSection";
import TutorSection from "../component/aboutUs/TutorSection";
import TestimonialSection from "../component/aboutUs/TestimonialSection";
import AutoScrollSection from "../component/aboutUs/AutoScrollSection";
import JoinUsSection from "../component/aboutUs/JoinUsSection";
const AboutSection = () => {
  return (
    <>

        <AboutUs/>
         <SkillSection/>
          <TutorSection/>
          <TestimonialSection/>
          <AutoScrollSection/>
          <JoinUsSection/>
      
    </>
  );
};

export default AboutSection;
