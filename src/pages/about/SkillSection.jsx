import React from "react";
import "./SkillSection.css";


import SkillImg1 from "../../assets/AboutUsPage/Skill-img1.png";
import SkillImg2 from "../../assets/AboutUsPage/Skill-img2.png";
import SkillBoxImg from "../../assets/AboutUsPage/Skill-box-img.png";

const SkillSection = () => {
  return (
    <section className="skill-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div className="col-12 col-lg-6">
            <div className="skill-cntn">
              <h2 className="title2 fw-medium">
                Growth Skill With SkillLearn Academy to Your Better Future
              </h2>
              <p>
                Embrace the transformative journey of learning with DevSkill
                knowledge becomes a catalyst for progress.
              </p>
              <p>
                Our dynamic educational platforms offers you the tools and
                resources to proper yourself towards a brighter future, with
                expert guidance & a supportive community
              </p>
              <div className="skill-btn">
                <a href="course.html" className="btn-secondary section-btn">
                  See all courses
                  <span class="d-flex align-items-center justify-content-center">
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
                    </svg>{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Image Layout with Floating Stats */}
          <div className="col-12 col-lg-6">
            <div className="skill-img-container position-relative">
              <div className="skill-img">
                <img src={SkillImg1} alt="Main Skill" />
              </div>

              {/* Floating Image (Curved blue shape) */}
              <div className="skill-img2 position-absolute">
                <img src={SkillImg2} alt="Blue Shape" />
              </div>

              {/* Floating Stats Box */}
              <div className="skill-box d-flex position-absolute align-items-center">
                <div className="skill-box-top">
                  <img src={SkillBoxImg} alt="Icon" />
                </div>
                <div className="skill-box-btm">
                  <p className="fw-semibold">
                    Number of Courses
                    <br /> Sold Out
                  </p>
                  <p className="fw-bold m-0">13.5k+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
