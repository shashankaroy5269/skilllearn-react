import React, { useState } from "react";
import "./style/AboutUs.css";


import Feature1 from "../../assets/AboutUsPage/Feature-box1.png";
import Feature2 from "../../assets/AboutUsPage/Feature-box2.png";
import Feature3 from "../../assets/AboutUsPage/Feature-box3.png";
import Feature4 from "../../assets/AboutUsPage/Feature-box4.png";
import AboutMainImg from "../../assets/AboutUsPage/About-img.jpg";
import PlayBtn from "../../assets/AboutUsPage/Play-btn.png";
import TutorThumb from "../../assets/AboutUsPage/About-rec-img.png";

const AboutUs = () => {
  
  const [features] = useState([
    { id: 1, title: "Offline Courses", img: Feature1 },
    { id: 2, title: "Online Courses", img: Feature2 },
    { id: 3, title: "Diploma", img: Feature3 },
    { id: 4, title: "Certification", img: Feature4 }
  ]);

  const [stats] = useState({
    courseCount: "200+",
    tutorName: "Tim A. Wilson",
    batchName: "Java Batch",
    rating: "4.0"
  });

  return (
    <main>
     
    <section className="about-about-sec">
      
      <div className="about-about-hdr">
        <div className="container">
          <ul className="list-unstyled d-flex mb-0">
            <li><a href="/" className="brdcrumb fw-light me-1">Home &gt;</a></li>
            <li className="brdcrumb fw-light">About Us</li>
          </ul>
        </div>
      </div>

      <div className="about-about-wrpr">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-12 col-lg-7">
              <div className="about-about-img-wrpr">
                <div className="about-about-img mx-auto">
                  <img src={AboutMainImg} alt="Student" />
                  
                  
                  <div className="about-about-img-rec1 d-flex align-items-center">
                    <img src={PlayBtn} alt="Play" />
                    <div className="rec1-cntn">
                      <div className="sec-top fw-bold">{stats.courseCount}</div>
                      <p className="m-0">Video Courses</p>
                    </div>
                  </div>

                 
                  <div className="about-about-img-rec2 text-center">
                    <img src={TutorThumb} alt="Tutor" />
                    <div className="rec-hdr fw-semibold">{stats.tutorName}</div>
                    <p className="m-0">{stats.batchName}</p>
                    <div className="rating d-flex align-items-center justify-content-center">
                      <span className="fw-medium">{stats.rating}</span>
                      <ul className="d-flex mb-0 p-0 align-items-center list-unstyled ms-1">
                        {[1, 2, 3, 4].map((star) => (
                          <li key={star}>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="#FFC107">
                              <path d="M6 0L7.405 4.326H11.95L8.27 7.002L9.676 11.328L6 8.652L2.324 11.328L3.73 7.002L0.05 4.326H4.595L6 0Z" />
                            </svg>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-12 col-lg-5">
              <div className="about-about-cntn">
                <div className="about-about-heading">
                  <div className="sec-top fw-medium">About</div>
                  <h2 className="title2 fw-medium">
                    Welcome To The Online Learning Center
                  </h2>
                </div>
                <p>
                  Get latest news in your inbox. Consectetur adipiscing elitadipiscing
                  elitse ddo eiusmod tempor incididunt ut labore et dolore magnased
                  doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Features Grid mapping through state */}
                <div className="row align-items-center mt-4">
                  {features.map((item) => (
                    <div className="col-6 mb-4" key={item.id}>
                      <div className={`features-box d-flex align-items-center justify-content-center features-box${item.id}`}>
                        <img src={item.img} alt={item.title} />
                        <div className="feature-cntn">
                          <p className="m-0">
                            <a href="/" className="fw-medium text-black">{item.title}</a>
                            <br />Video Courses
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="about-about-btn mt-2">
                  <button className="btn-secondary section-btn">
                    Read More 
                    <span className="ms-2">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor">
                        <path d="M1 12L12 1M12 1H3.5M12 1V9.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <SkillSection/>
    <TutorSection/>
    <TestimonialSection/>
    <AutoScrollSection/>
    <JoinUsSection/>
    <Footer1/> */}
    </main>
    
  );
};

export default AboutUs;