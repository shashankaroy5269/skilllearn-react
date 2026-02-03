import React, { useEffect } from "react";
import Swiper from "swiper";

/* ===== SWIPER CSS ===== */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

/* ===== IMAGES ===== */
import feedbackImg from "../assets/LandingPage/feedback-card-img.png";

import eclipse1 from "../assets/LandingPage/Feed-eclipse1.png";
import eclipse2 from "../assets/LandingPage/Feed-eclipse2.png";
import eclipse3 from "../assets/LandingPage/Feed-eclipse3.png";
import eclipse4 from "../assets/LandingPage/Feed-eclipse4.png";
import eclipse5 from "../assets/LandingPage/Feed-eclipse5.png";
import feedbackGif from "../assets/LandingPage/feedback-gif.gif";

const FeedbackSection = () => {

  /* ===== INIT SWIPER ===== */
  useEffect(() => {
    new Swiper(".cardSwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  }, []);

  return (
    <section className="feedback-sec position-relative">

      {/* ===== BACKGROUND ELEMENTS ===== */}
      <div className="feedback-eclipses d-none d-lg-block">
        <div className="feedback-eclipse1 position-absolute">
          <img src={eclipse1} alt="" />
        </div>
        <div className="feedback-eclipse2 position-absolute">
          <img src={eclipse2} alt="" />
        </div>
        <div className="feedback-eclipse3 position-absolute">
          <img src={eclipse3} alt="" />
        </div>
        <div className="feedback-eclipse4 position-absolute">
          <img src={eclipse4} alt="" />
        </div>
        <div className="feedback-eclipse5 position-absolute">
          <img src={eclipse5} alt="" />
        </div>
        <div className="feedback-gif position-absolute">
          <img src={feedbackGif} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-12 col-lg-6">
            <div className="feedback-cntn">
              <h2 className="title2 fw-semibold">
                What Our <span>Students</span> Have to Say
              </h2>
              <p>
                Our students consistently praise the transformative learning
                experience we provide. Here’s what they say about our courses
              </p>
            </div>
          </div>

          {/* RIGHT */}
           <div className="col-12 col-lg-6">
            <div className="swiper cardSwiper">
              <div className="swiper-wrapper">

                {[1, 2, 3].map((_, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="feed-top d-flex align-items-center">
                      <ul className="stars d-flex p-0 m-0">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <li key={i}>
                            <svg
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.825 18.5301L5.45 11.6788L0 7.0707L7.2 6.46116L10 0L12.8 6.46116L20 7.0707L14.55 11.6788L16.175 18.5301L10 14.8972L3.825 18.5301Z"
                                fill="#EDB007"
                              />
                            </svg>
                          </li>
                        ))}
                      </ul>
                      <p>Highly Experienced Mentors</p>
                    </div>

                    <p>
                      “The interactive sessions , peer discussions , and timely
                      mentor feedback created a collaborative learning
                      environment that enhanced my understanding.”
                    </p>

                    <div className="feed-btm d-flex align-items-center">
                      <img src={feedbackImg} alt="" />
                      <div className="feed-btm-cntn">
                        <h3 className="title3 fw-semibold">Rohit Das</h3>
                        <p>UI/UX DESIGNER</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>

              
              <div className="swiper-pagination"></div>

             
              <div className="scroll-btn d-flex align-items-center position-relative">
                <div className="swiper-scrollbar"></div>

                <div className="swiper-button-prev">
                  <svg width="16" height="15" viewBox="0 0 17 15">
                    <path
                      d="M0.292892 6.65666C-0.0976315 7.04719 -0.0976315 7.68035 0.292892 8.07088L6.65685 14.4348C7.04738 14.8254 7.68054 14.8254 8.07107 14.4348C8.46159 14.0443 8.46159 13.4111 8.07107 13.0206L2.41421 7.36377L8.07107 1.70692C8.46159 1.31639 8.46159 0.683226 8.07107 0.292702C7.68054 -0.0978227 7.04738 -0.0978227 6.65685 0.292702L0.292892 6.65666Z"
                      fill="#08119B"
                    />
                  </svg>
                </div>

                <div className="swiper-button-next">
                  <svg width="17" height="15" viewBox="0 0 17 15">
                    <path
                      d="M16.7071 8.07088C17.0976 7.68036 17.0976 7.04719 16.7071 6.65667L10.3431 0.292704C9.95262 -0.0978209 9.31946 -0.097821 8.92893 0.292703C8.53841 0.683228 8.53841 1.31639 8.92893 1.70692L14.5858 7.36377L8.92893 13.0206C8.53841 13.4111 8.53841 14.0443 8.92893 14.4348C9.31945 14.8254 9.95262 14.8254 10.3431 14.4348L16.7071 8.07088Z"
                      fill="#08119B"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div> 


        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
