import React from "react";
import "./loader.css";

import loaderLogo from "../../assets/CommonAssets/Loader-logo.png";
import loaderText from "../../assets/CommonAssets/loader-txt.png";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src={loaderLogo} className="loader-text-img" alt="logo" />
        <img src={loaderText} className="loader-logo-img" alt="text" />
        <span className="loader-line"></span>
      </div>
    </div>
  );
};

export default Loader;
