import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


/* ===== SWIPER CSS ===== */
import "swiper/css";

/* ===== IMAGES ===== */
import feedbackImg from "../assets/LandingPage/feedback-card-img.png";

import eclipse1 from "../assets/LandingPage/Feed-eclipse1.png";
import eclipse2 from "../assets/LandingPage/Feed-eclipse2.png";
import eclipse3 from "../assets/LandingPage/Feed-eclipse3.png";
import eclipse4 from "../assets/LandingPage/Feed-eclipse4.png";
import eclipse5 from "../assets/LandingPage/Feed-eclipse5.png";
import feedbackGif from "../assets/LandingPage/feedback-gif.gif";

const FeedbackSection = () => {


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
                What Our <span>Students</span> <br />Have to Say
              </h2>
              <p>
                Our students consistently praise the transformative learning
                experience we provide. Here’s what they say about our courses
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-6">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,          // 2.5 sec
                disableOnInteraction: false,
              }}
              className="cardSwiper"
            >
              {/* ===== SLIDE 1 ===== */}
              <SwiperSlide>
                <div className="feed-top d-flex align-items-center">
                  <ul className="stars d-flex p-0 m-0">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <li key={i}>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
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
                  “The interactive sessions, peer discussions, and timely mentor feedback
                  created a collaborative learning environment that enhanced my
                  understanding.”
                </p>

                <div className="feed-btm d-flex align-items-center">
                  <img src={feedbackImg} alt="student" />
                  <div className="feed-btm-cntn">
                    <h4 className="title3 fw-semibold">Rohit Das</h4>
                    <p>UI/UX DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* ===== SLIDE 2 ===== */}
              <SwiperSlide>
                <div className="feed-top d-flex align-items-center">
                  <ul className="stars d-flex p-0 m-0">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <li key={i}>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
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
                  “The interactive sessions, peer discussions, and timely mentor feedback
                  created a collaborative learning environment that enhanced my
                  understanding.”
                </p>

                <div className="feed-btm d-flex align-items-center">
                  <img src={feedbackImg} alt="student" />
                  <div className="feed-btm-cntn">
                    <h4 className="title3 fw-semibold">Rohit Das</h4>
                    <p>UI/UX DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* ===== SLIDE 3 ===== */}
              <SwiperSlide>
                <div className="feed-top d-flex align-items-center">
                  <ul className="stars d-flex p-0 m-0">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <li key={i}>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
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
                  “The interactive sessions, peer discussions, and timely mentor feedback
                  created a collaborative learning environment that enhanced my
                  understanding.”
                </p>

                <div className="feed-btm d-flex align-items-center">
                  <img src={feedbackImg} alt="student" />
                  <div className="feed-btm-cntn">
                    <h4 className="title3 fw-semibold">Rohit Das</h4>
                    <p>UI/UX DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feed-top d-flex align-items-center">
                  <ul className="stars d-flex p-0 m-0">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <li key={i}>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
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
                  “The interactive sessions, peer discussions, and timely mentor feedback
                  created a collaborative learning environment that enhanced my
                  understanding.”
                </p>

                <div className="feed-btm d-flex align-items-center">
                  <img src={feedbackImg} alt="student" />
                  <div className="feed-btm-cntn">
                    <h4 className="title3 fw-semibold">Rohit Das</h4>
                    <p>UI/UX DESIGNER</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>



        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
