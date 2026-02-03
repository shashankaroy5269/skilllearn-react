import React from "react";
import { Link } from "react-router-dom";

import regModalImg from "../assets/TeacherRegistration/Reg-modal-img1.png";
import langImg from "../assets/CommonAssets/Lang-img.png";
import logo from "../assets/TeacherRegistration/Logo.png";
import regImg from "../assets/Registration/Reg-img.png";

const RegisterWithLoginModal = () => {
  return (
    <>
      <main>
        <section className="reg-sec">
          <div className="container">
            <div className="reg-wrpr">

              <div className="reg-btm-img">
                <img src={regModalImg} alt="" />
              </div>

              <div className="row align-items-center">

                <div className="col-12 col-sm-6">
                  <div className="reg-img">
                    <img src={regImg} alt="" />
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <button className="lang-btn d-flex align-items-center ms-auto">
                    <img src={langImg} alt="" />
                    <span className="fw-medium">EN</span>
                  </button>

                  <div className="reg-cntn">
                    <div className="reg-m-logo mx-auto">
                      <img src={logo} alt="" />
                    </div>

                    <h2 className="fw-medium text-center mx-auto">
                      Start Your Journey Today
                    </h2>

                    <p className="text-center fw-light mx-auto">
                      Register now and become part of a community of 5,000+
                      learners and educators building the future of education
                      together.
                    </p>

                    <div className="reg-option-wrpr">
                      <div className="row">

                        <div className="col-6">
                          <div className="reg-option-card text-center">
                            <div className="option-hdr">
                              <svg width="35" height="31" viewBox="0 0 35 31">
                                <path
                                  d="M0 10.2857H4.375V30.8571M8.75 25.7143V15.4286H26.25V25.7143M0 10.2857L17.5 0L35 10.2857L17.5 20.5714"
                                  fill="black"
                                />
                              </svg>
                              <h3 className="fw-medium">I‘m a Student</h3>
                            </div>
                            <p className="fw-light">
                              Access Courses, Track your progress, & Learn new Skill
                            </p>
                            <Link to="/student-Register" className="text-white">
                              Register As Student
                            </Link>

                          </div>
                        </div>

                        <div className="col-6">
                          <div className="reg-option-card text-center">
                            <div className="option-hdr">
                              <svg width="35" height="31" viewBox="0 0 35 31">
                                <path
                                  d="M0 10.2857H4.375V30.8571M8.75 25.7143V15.4286H26.25V25.7143M0 10.2857L17.5 0L35 10.2857L17.5 20.5714"
                                  fill="black"
                                />
                              </svg>
                              <h3 className="fw-medium">I‘m a Teacher</h3>
                            </div>
                            <p className="fw-light">
                              Create Course , Mentor Student, & share Your Knowledge
                            </p>
                            <Link to="/teacher-register" className="text-white">
                              Register As Teacher
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="login-txt text-center">
                      Already Have an Account ?
                      <Link
                        to="/login"
                        className="fw-medium"
                      >
                        Log In
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterWithLoginModal;
