import React from "react";

// Import images
import aboutImg1 from "../assets/LandingPage/About-img1.png";
import aboutImg2 from "../assets/LandingPage/About-img2.png";
import aboutDesign3 from "../assets/LandingPage/About-design3.png";
import aboutDesign4 from "../assets/LandingPage/about-design4.png";

const AboutSection = () => {
  return (
    <section className="about-sec">
      <div className="container">
        <div className="row">

          {/* LEFT IMAGE SECTION */}
          <div className="col-12 col-lg-6">
            <div className="about-img1">
              <img src={aboutImg1} alt="About" />

              <div className="about-design3">
                <img src={aboutDesign3} alt="" />
              </div>

              <div className="about-design4">
                <img src={aboutDesign4} alt="" />
              </div>

              <div className="about-img2">
                <img src={aboutImg2} alt="Students" />

                <div className="enrolled-wrpr d-flex align-items-center">
                  <div className="enroll-circle d-flex align-items-center justify-content-center">
                    <svg width="35" height="35" viewBox="0 0 35 35">
                      <path d="M34.7593 12.3118L17.5 1.16895L0.240601 12.3118L17.5 23.4531L29.1666 15.9213V23.175H32.0833V14.0397L34.7593 12.3118Z" />
                      <path d="M7.29163 25.3476V20.0391L17.5 26.6294L27.7083 20.0391V25.3476C27.7083 27.4768 26.2295 29.1352 24.4227 30.1825C22.5793 31.2514 20.1279 31.8655 17.5 31.8655C14.872 31.8655 12.422 31.2514 10.5773 30.1825C8.77038 29.1352 7.29163 27.4768 7.29163 25.3476Z" />
                    </svg>
                  </div>

                  <div className="enrolled-cntn">
                    <div className="enroll-num fw-semibold">1500+</div>
                    <p>Enrolled Learners</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="col-12 col-lg-6">
            <div className="about-hdr">
              <h2 className="title2 text-uppercase fw-semibold">About Us</h2>
              <div className="sec-hdr fw-semibold">
                Transform Your Best Practice with Our Online Course
              </div>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa
                qui officia deserunt mollit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="about-btm">

              {/* FEATURE 1 */}
              <div className="feature-item">
                <div className="feature-hdr d-flex align-items-center">
                  <div className="icon-circle d-flex align-items-center justify-content-center">
                     <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4167 12.4152C15.8587 12.4152 16.2826 12.2408 16.5952 11.9303C16.9077 11.6199 17.0833 11.1988 17.0833 10.7598V1.65535C17.0833 1.21633 16.9077 0.795281 16.5952 0.484842C16.2826 0.174403 15.8587 0 15.4167 0H6.63333C6.925 0.504883 7.08333 1.07598 7.08333 1.65535H15.4167V10.7598H7.91667V12.4152M11.25 4.13839V5.79374H6.25V16.5535H4.58333V11.5875H2.91667V16.5535H1.25V9.93213H0V5.79374C0 5.35471 0.175595 4.93367 0.488155 4.62323C0.800716 4.31279 1.22464 4.13839 1.66667 4.13839H11.25ZM5.41667 1.65535C5.41667 2.09438 5.24107 2.51543 4.92851 2.82587C4.61595 3.13631 4.19203 3.31071 3.75 3.31071C3.30797 3.31071 2.88405 3.13631 2.57149 2.82587C2.25893 2.51543 2.08333 2.09438 2.08333 1.65535C2.08333 1.21633 2.25893 0.795281 2.57149 0.484842C2.88405 0.174403 3.30797 0 3.75 0C4.19203 0 4.61595 0.174403 4.92851 0.484842C5.24107 0.795281 5.41667 1.21633 5.41667 1.65535Z"
                          fill="#212343"
                        />
                      </svg>
                  </div>
                  <h4 className="title4 fw-semibold">Face-to-face Teaching</h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              {/* FEATURE 2 */}
              <div className="feature-item feature-item2">
                <div className="feature-hdr d-flex align-items-center">
                  <div className="icon-circle d-flex align-items-center justify-content-center">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 10.1142C17.5 5.57027 13.95 2.48303 9.99999 2.48303C6.09166 2.48303 2.49999 5.50405 2.49999 10.1639C1.99999 10.4453 1.66666 10.975 1.66666 11.5875V13.2428C1.66666 14.1533 2.41666 14.8982 3.33332 14.8982H4.16666V9.84936C4.16666 6.64625 6.77499 4.05562 9.99999 4.05562C13.225 4.05562 15.8333 6.64625 15.8333 9.84936V15.7259H9.16666V17.3812H15.8333C16.75 17.3812 17.5 16.6363 17.5 15.7259V14.7161C17.9917 14.4595 18.3333 13.9546 18.3333 13.3587V11.4551C18.3333 10.8757 17.9917 10.3708 17.5 10.1142Z"
                          fill="#212343"
                        />
                        <path
                          d="M7.49999 11.5875C7.96023 11.5875 8.33332 11.2169 8.33332 10.7598C8.33332 10.3027 7.96023 9.93213 7.49999 9.93213C7.03975 9.93213 6.66666 10.3027 6.66666 10.7598C6.66666 11.2169 7.03975 11.5875 7.49999 11.5875Z"
                          fill="#212343"
                        />
                        <path
                          d="M12.5 11.5875C12.9602 11.5875 13.3333 11.2169 13.3333 10.7598C13.3333 10.3027 12.9602 9.93213 12.5 9.93213C12.0398 9.93213 11.6667 10.3027 11.6667 10.7598C11.6667 11.2169 12.0398 11.5875 12.5 11.5875Z"
                          fill="#212343"
                        />
                        <path
                          d="M15 9.12928C14.8013 7.96568 14.1945 6.90942 13.2871 6.14748C12.3796 5.38553 11.23 4.96703 10.0417 4.96606C7.51668 4.96606 4.80002 7.04353 5.01668 10.3046C6.0445 9.88724 6.95227 9.22362 7.65897 8.37296C8.36567 7.5223 8.8493 6.51108 9.06668 5.42956C10.1583 7.60635 12.4 9.10445 15 9.12928Z"
                          fill="#212343"
                        />
                      </svg>
                  </div>
                  <h4 className="title4 fw-semibold">24/7 Support Available</h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              {/* FEATURE 3 */}
              <div className="feature-item">
                <div className="feature-hdr d-flex align-items-center">
                  <div className="icon-circle d-flex align-items-center justify-content-center">
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.10748 0C3.79928 0 1.09166 1.7929 1.09166 3.9834V4.52746H3.50086V3.9834C3.50086 2.65502 5.10135 1.59527 7.10748 1.59527C9.11361 1.59527 10.7141 2.65502 10.7141 3.9834V6.16583C9.65279 5.74593 8.41424 5.50395 7.09383 5.50395C3.19031 5.50395 0 7.61639 0 10.2011C0 12.7858 3.19031 14.8982 7.09383 14.8982C10.9973 14.8982 14.1877 12.7858 14.1877 10.2011C14.1877 9.29748 13.7974 8.45177 13.1234 7.73371V3.9834C13.1234 1.7929 10.4157 0 7.10748 0ZM7.09383 7.09922C9.69527 7.09922 11.7784 8.47855 11.7784 10.2011C11.7784 11.9236 9.69527 13.3029 7.09383 13.3029C4.49238 13.3029 2.40926 11.9236 2.40926 10.2011C2.40926 8.47851 4.49238 7.09922 7.09383 7.09922ZM7.11697 8.89915C6.01922 8.89915 5.12936 9.48836 5.12936 10.2152C5.12936 10.9421 6.01922 11.5313 7.11697 11.5313C8.21473 11.5313 9.10459 10.9421 9.10459 10.2152C9.10459 9.48836 8.21467 8.89915 7.11697 8.89915Z"
                          fill="#212343"
                        />
                      </svg>
                  </div>
                  <h4 className="title4 fw-semibold">Lifetime Access</h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

            </div>

            {/* BUTTON */}
            <div className="banner-btn">
              <a href="#" className="btn-secondary section-btn">
                Know More
                <span
                    class="d-flex align-items-center justify-content-center"
                  >
                    <svg
                      width="13"
                      height="17"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                        fill="black"
                      />
                    </svg> </span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
