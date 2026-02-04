import React from "react";

import Banner from "../component/banner.jsx";
import AboutSection from "../component/AboutSection.jsx";
import CourseSection from "../component/courseSection.jsx";
import BrowseSection from "../component/browseSection.jsx";
import ViewSection from "../component/viewSection.jsx";
import FeedbackSection from "../component/feedbackSection.jsx";
import BlogSection from "../component/blogSection.jsx";
import LandingAutoScroll from "../component/autoscrollSection.jsx";
import BackToTop from "../component/backtoTop.jsx";


const Home = () => {
  
  return (
    <>
    <BackToTop/>
      <Banner />
      <AboutSection />
      <CourseSection />
      <BrowseSection />
      <ViewSection />
      <BlogSection />
      <FeedbackSection />
      <LandingAutoScroll />
    </>
  );
};

export default Home;
