import React from "react";

// IMAGE IMPORTS
import bannerGif from "../assets/LandingPage/banner-gif.gif";
import bannerGif2 from "../assets/LandingPage/banner-gif2.gif";

import ellipse1 from "../assets/LandingPage/Ellipse-img1.png";
import ellipse2 from "../assets/LandingPage/Ellipse-img2.png";
import ellipse3 from "../assets/LandingPage/Ellipse-img3.png";
import ellipse4 from "../assets/LandingPage/Ellipse-img4.png";

import stats1 from "../assets/LandingPage/Stats-img1.png";
import stats2 from "../assets/LandingPage/Stats-img2.png";
import stats3 from "../assets/LandingPage/Stats-img3.png";

import bannerImg1 from "../assets/LandingPage/Banner-img1.png";
import bannerImg2 from "../assets/LandingPage/Banner-img2.png";
import bannerImg3 from "../assets/LandingPage/Banner-img3.png";
import bannerImg4 from "../assets/LandingPage/banner-img4.png";
import bannerImg5 from "../assets/LandingPage/banner-img5.png";
import bannerImg6 from "../assets/LandingPage/banner-img6.png";

import plusImg from "../assets/LandingPage/Plus.png";

const Banner = () => {
  return (
    <section className="banner-sec">
      <div className="blur-circle-1"></div>

      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-5">
            <div className="banner-hdr">
              <h1 className="title1">
                Your <span>Future</span> Starts with the Next{" "}
                <span>Lesson</span>
              </h1>

              <div className="banner-gif">
                <img src={bannerGif} alt="" />
              </div>

              <div className="banner-gif2">
                <img src={bannerGif2} alt="" />
              </div>
            </div>

            <p>
              Master in-demand skills with expert-led courses. <br />
              Build a professional portfolio, earn industry-recognized
              certificates, and land the job you’ve always wanted.
            </p>

            <div className="banner-btn">
              <a href="" className="btn-secondary section-btn">
                Enroll Now
                <span className="d-flex align-items-center justify-content-center">
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>

              <a href="" className="btn-secondary btn-tertiary">
                Learn More
              </a>
            </div>

            <div className="reviews d-flex align-items-center">
              <ul className="d-flex p-0 m-0">
                <li><img src={ellipse1} alt="" /></li>
                <li><img src={ellipse2} alt="" /></li>
                <li><img src={ellipse3} alt="" /></li>
                <li><img src={ellipse4} alt="" /></li>
              </ul>

              <div className="rating d-flex align-items-center justify-content-center">
                4.5
              </div>
            </div>

            <div className="stats d-flex">
              <div className="stats-card text-center">
                <div className="stats-img"><img src={stats1} alt="" /></div>
                <div className="stats-hdr fw-semibold">Total Students</div>
                <div className="num fw-bold">+12k</div>
              </div>

              <div className="stats-card text-center">
                <div className="stats-img"><img src={stats2} alt="" /></div>
                <div className="stats-hdr fw-semibold">Our Courses</div>
                <div className="num fw-bold">+50</div>
              </div>

              <div className="stats-card text-center">
                <div className="stats-img"><img src={stats3} alt="" /></div>
                <div className="stats-hdr fw-semibold">Our Mentors</div>
                <div className="num fw-bold">+30</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-12 col-lg-7">
            <div className="circle">
              <div className="banner-img-top d-flex align-items-end">
                <div className="banner-img banner-img1">
                  <img src={bannerImg1} alt="" />
                </div>
                <div className="banner-img banner-img4">
                  <img src={bannerImg4} alt="" />
                  <div className="banner-img banner-img5">
                    <img src={bannerImg5} alt="" />
                  </div>
                  <div className="banner-img6">
                    <img src={bannerImg6} alt="" />
                  </div>
                </div>
              </div>

              <div className="banner-img-btm d-flex align-items-start">
                <div className="banner-img banner-img2">
                  <img src={bannerImg2} alt="" />
                </div>
                <div className="banner-img banner-img3">
                  <img src={bannerImg3} alt="" />
                </div>
              </div>

              <div className="plus-wrpr">
                <div className="plus d-flex align-items-center justify-content-center">
                  <img src={plusImg} alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
