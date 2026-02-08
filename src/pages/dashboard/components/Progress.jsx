import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import courseImg1 from "../../../assets/dashboard-assets/progress/pro-course-img1.png";
import courseImg2 from "../../../assets/dashboard-assets/progress/pro-course-img2.png";
import courseImg3 from "../../../assets/dashboard-assets/progress/pro-course-img3.png";


import ProgressSvg from "./progressSvg";
import DashboardNavbar from "./DashBoardNav";

// import AxiosInstance from "../../../../api/axios/axios";
// import { useNavigate } from "react-router-dom";



const Progress = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProgress = async () => {
  //     try {
  //       const res = await AxiosInstance.get("/dashboard/progress");

  //       console.log("PROGRESS API RESPONSE ", res.data);

  //       setData(res.data.data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("PROGRESS API ERROR ", err.response?.data);

  //       if (err.response?.status === 401) {
  //         localStorage.removeItem("token");
  //         localStorage.removeItem("user");
  //         navigate("/login", { replace: true });
  //         return;
  //       }

  //       setError(err.response?.data?.message || "Something went wrong");
  //       setLoading(false);
  //     }
  //   };

  //   fetchProgress();
  // }, [navigate]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;
  const hamberger = () => {
    document.querySelector(".left-sideNav")?.classList.toggle("open");

  };


  return (
    <main>
      <section className="dashboard">
        <div className="container">
          <div className="row align-items-stretch">

            <div className="col-2">
              <Sidebar />
            </div>


            <div className="col-10">
              <div className="dashboard-top bg-white d-flex align-items-center">
                <div className="dashboard-hdr d-flex align-items-center justify-content-between flex-wrap w-100">
                  <div className="hdr-cntn">
                    <h1 className="title1">Progress</h1>
                    <p>Dashboard / Progress</p>
                  </div>
                  <ul className="hdr-menu d-flex align-items-center">
                    <li>
                      <DashboardNavbar onMenuToggle={hamberger} />

                    </li>


                  </ul>



                </div>
              </div>




              <div className="row">
                <div className="col60">
                  <div className="row">
                    <div className="col-12">
                      <div className="pro-box goal-box">
                        <div className="pro-box-top">
                          <h2 className="title3">
                            Weekly Study Goal <span>8 / 10 hrs</span>
                          </h2>
                        </div>

                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Success example"
                          aria-valuenow={63}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{ width: "63%" }}
                          ></div>
                        </div>
                      </div>

                    </div>
                    <div className="col-12">
                      <div className="pro-box course-box">
                        <div className="pro-box-top">
                          <h2 className="title3">My Current Courses</h2>
                        </div>

                        <div className="pro-box-btm">
                          <div className="row">

                            {/* Course 1 */}
                            <div className="col-4">
                              <div className="pro-course-card">
                                <div className="pro-course-img">
                                  <img src={courseImg1} alt="UI UX Design" />

                                </div>

                                <h3 className="title2">UI/UX Design</h3>

                                <div className="course-pro-amount fw-semibold d-flex align-items-center">
                                  65% <span>Completed</span>
                                </div>

                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-valuenow={65}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    style={{ width: "65%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>

                            {/* Course 2 */}
                            <div className="col-4">
                              <div className="pro-course-card">
                                <div className="pro-course-img">
                                  <img src={courseImg2} alt="Web Development" />

                                </div>

                                <h3 className="title2">Web Development</h3>

                                <div className="course-pro-amount fw-semibold d-flex align-items-center">
                                  45% <span>Completed</span>
                                </div>

                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-valuenow={45}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    style={{ width: "45%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>

                            {/* Course 3 */}
                            <div className="col-4">
                              <div className="pro-course-card">
                                <div className="pro-course-img">
                                  <img src={courseImg3} alt="Digital Marketing" />

                                </div>

                                <h3 className="title2">Digital Marketing</h3>

                                <div className="course-pro-amount fw-semibold d-flex align-items-center">
                                  100% <span>Completed</span>
                                </div>

                                <div
                                  className="progress"
                                  role="progressbar"
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    style={{ width: "100%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="pro-box skill-box">
                        <div className="pro-box-top">
                          <h2 className="title3">Skill Progress</h2>
                        </div>

                        <div className="skill-box-wrpr d-flex align-items-center justify-content-between">
                          {/* LEFT */}
                          <div className="box-wrpr-left">
                            <h2 className="title3 fw-medium">UI/UX DESIGN</h2>

                            <div
                              className="progress"
                              role="progressbar"
                              aria-valuenow={65}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "65%" }}
                              />
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="box-wrpr-right text-center">
                            <div className="course-pro-amount fw-semibold d-flex flex-column">
                              65% <span className="fw-medium">Completed</span>
                            </div>
                          </div>
                        </div>


                        <div className="skill-box-btm d-flex flex-column flex-lg-row align-items-start align-items-lg-center">

                          <div className="skill-btm-left d-flex align-items-center">

                            <ProgressSvg />

                            <p>IT Skill</p>

                            <div
                              className="progress"
                              role="progressbar"
                              aria-valuenow={56.7}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar"
                                style={{ width: "56.7%" }}
                              />
                            </div>
                          </div>


                          <div className="skill-btm-right d-flex align-items-center">

                            <ProgressSvg />
                            <p className="ms-2 mb-0">Non-IT Skill</p>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-valuenow={56.7}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar"
                                style={{ width: "56.7%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="col-6">
                      <div className="pro-box lessons-box">
                        <div className="pro-box-top">
                          <h2 className="title3">Upcoming Lessons</h2>
                        </div>

                        <div className="pro-box-btm">
                          <ul className="list-unstyled">
                            {/* Lesson 1 */}
                            <li>
                              <svg
                                width="38"
                                height="33"
                                viewBox="0 0 38 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <rect width="37.3103" height="33" rx="5" fill="#097877" />
                                <rect
                                  x="6.10352"
                                  y="6.94775"
                                  width="25.1046"
                                  height="25.1046"
                                  fill="url(#patternLesson1)"
                                />
                                <defs>
                                  <pattern
                                    id="patternLesson1"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                  >
                                    <use
                                      xlinkHref="#imageLesson1"
                                      transform="scale(0.00195312)"
                                    />
                                  </pattern>
                                  <image
                                    id="imageLesson1"
                                    width="512"
                                    height="512"
                                    preserveAspectRatio="none"
                                    xlinkHref="data:image/png;base64,...."
                                  />
                                </defs>
                              </svg>
                              Advanced Prototyping
                            </li>

                            {/* Lesson 2 */}
                            <li className="mb-0">
                              <svg
                                width="38"
                                height="33"
                                viewBox="0 0 38 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <rect width="37.3103" height="33" rx="5" fill="#097877" />
                                <rect
                                  x="6.10352"
                                  y="6.94775"
                                  width="25.1046"
                                  height="25.1046"
                                  fill="url(#patternLesson2)"
                                />
                                <defs>
                                  <pattern
                                    id="patternLesson2"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                  >
                                    <use
                                      xlinkHref="#imageLesson2"
                                      transform="scale(0.00195312)"
                                    />
                                  </pattern>
                                  <image
                                    id="imageLesson2"
                                    width="512"
                                    height="512"
                                    preserveAspectRatio="none"
                                    xlinkHref="data:image/png;base64,...."
                                  />
                                </defs>
                              </svg>
                              SEO Fundamentals
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>


                    <div className="col-6">
                      <div className="pro-box lessons-box activity-box">
                        <div className="pro-box-top">
                          <h2 className="title3">Recent Activity</h2>
                        </div>

                        <div className="pro-box-btm">
                          <ul className="list-unstyled">

                            {/* Activity 1 */}
                            <li className="fw-semibold">
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <circle cx="20" cy="20" r="20" fill="#097877" />
                                <rect
                                  x="5"
                                  y="7"
                                  width="30"
                                  height="30"
                                  fill="url(#activityPattern1)"
                                />
                                <defs>
                                  <pattern
                                    id="activityPattern1"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                  >
                                    <use
                                      xlinkHref="#activityImage1"
                                      transform="scale(0.00195312)"
                                    />
                                  </pattern>
                                  <image
                                    id="activityImage1"
                                    width="512"
                                    height="512"
                                    preserveAspectRatio="none"
                                    xlinkHref="data:image/png;base64,...."
                                  />
                                </defs>
                              </svg>

                              Completed <span>“Responsive Design”</span>
                            </li>

                            {/* Activity 2 */}
                            <li className="mb-0 fw-semibold">
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <circle cx="20" cy="20" r="20" fill="#FE7E0F" />
                                <rect
                                  x="5"
                                  y="7"
                                  width="30"
                                  height="30"
                                  fill="url(#activityPattern2)"
                                />
                                <defs>
                                  <pattern
                                    id="activityPattern2"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                  >
                                    <use
                                      xlinkHref="#activityImage2"
                                      transform="scale(0.00195312)"
                                    />
                                  </pattern>
                                  <image
                                    id="activityImage2"
                                    width="512"
                                    height="512"
                                    preserveAspectRatio="none"
                                    xlinkHref="data:image/png;base64,...."
                                  />
                                </defs>
                              </svg>

                              Passed <span>“Javascript Quiz”</span>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
                <div className="col40">
                  <div className="row">

                    {/* Total Courses */}
                    <div className="col-12">
                      <div className="pro-box total-box">
                        <div className="pro-box-top">
                          <h2 className="title3">Total Courses Completed</h2>
                        </div>
                        <h2 className="title3">12 Courses</h2>
                      </div>
                    </div>

                    {/* Learning Progress */}
                    <div className="col-12">
                      <div className="pro-box learning-box">
                        <div className="pro-box-top">
                          <h2 className="title3">Learning Progress</h2>
                        </div>

                        <div className="learning-box-mid text-center">
                          <div className="progress-ring">
                            <div className="progress-inner">
                              <div className="learning-percent fw-medium">78%</div>
                              <span></span>
                            </div>
                          </div>
                          <p>Overall Progress</p>
                        </div>

                        <div className="learning-box-end">
                          <h2 className="sec-hdr fw-bold">Upcoming Course</h2>

                          {/* Course 1 */}
                          <div className="progress-bar-wrpr">
                            <h2 className="title2">Web Development</h2>
                            <div className="progress-bar-value d-flex align-items-center">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                              <span className="title3">0%</span>
                            </div>
                          </div>

                          {/* Course 2 */}
                          <div className="progress-bar-wrpr">
                            <h2 className="title2">UI & UX Designing</h2>
                            <div className="progress-bar-value d-flex align-items-center">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                              <span className="title3">0%</span>
                            </div>
                          </div>

                          {/* Course 3 */}
                          <div className="progress-bar-wrpr mb-0">
                            <h2 className="title2">Digital Marketing</h2>
                            <div className="progress-bar-value d-flex align-items-center">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                              <span className="title3">0%</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>



              </div>



            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Progress;