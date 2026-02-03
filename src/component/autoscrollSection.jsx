import React from "react";

// Import images
import scrollImg1 from "../assets/LandingPage/Ialnding-auto-scrol-1.png";
import scrollImg2 from "../assets/LandingPage/Ialnding-auto-scrol-2.png";
import scrollImg3 from "../assets/LandingPage/Ialnding-auto-scrol-3.png";
import scrollImg4 from "../assets/LandingPage/Ialnding-auto-scrol-4.png";

const LandingAutoScroll = () => {
  return (
    <div className="landing-auto-scroll d-flex align-items-center">
      
      <div className="landing-auto-scroll-itms d-flex align-items-center">
        <img src={scrollImg1} alt="Auto scroll 1" />
      </div>

      <div className="landing-auto-scroll-itms d-flex align-items-center">
        <img src={scrollImg2} alt="Auto scroll 2" />
      </div>

      <div className="landing-auto-scroll-itms d-flex align-items-center">
        <img src={scrollImg3} alt="Auto scroll 3" />
      </div>

      <div className="landing-auto-scroll-itms d-flex align-items-center">
        <img src={scrollImg4} alt="Auto scroll 4" />
      </div>

    </div>
  );
};

export default LandingAutoScroll;
