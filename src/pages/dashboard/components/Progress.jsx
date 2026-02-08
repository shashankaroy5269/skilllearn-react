import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import courseImg1 from "../../../assets/dashboard-assets/progress/pro-course-img1.png";
import courseImg2 from "../../../assets/dashboard-assets/progress/pro-course-img2.png";
import courseImg3 from "../../../assets/dashboard-assets/progress/pro-course-img3.png";

import userIcon from "../../../assets/dashboard-assets/user-icon.png";
import ProgressSvg from "./progressSvg";


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
            {/* SIDEBAR*/}
            <div className="col-2">
              <Sidebar />
            </div>

            {/* MAIN HEADER & CONTENT */}
            <div className="col-10">
               <div className="dashboard-top bg-white d-flex align-items-center">
                                              <div className="dashboard-hdr d-flex align-items-center justify-content-between flex-wrap w-100">
                                                  <div className="hdr-cntn">
                                                      <h1 className="title1">Progress</h1>
                                                      <p>Dashboard / Progress</p>
                                                  </div>
                                                  <ul className="hdr-menu d-flex align-items-center">
                                                      <li>
                                                          <button className="menu-btn" onClick={hamberger}>
                                                              <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={24}
                                                                  height={24}
                                                                  viewBox="0 0 24 24"
                                                              >
                                                                  <path
                                                                      fill="none"
                                                                      stroke="currentColor"
                                                                      strokeWidth={1.5}
                                                                      d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18ZM2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6Z"
                                                                  />
                                                              </svg>
              
                                                          </button>
                                                      </li>
              
                                                      <li className="button-list">
                                                          <label className="switch">
              
              
                                                              <span className="sun">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                      <g fill="#ffd43b">
                                                                          <circle r={5} cy={12} cx={12} />
                                                                          <path
                                                                              d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"
                                                                          />
                                                                      </g>
                                                                  </svg>
                                                              </span>
              
              
                                                              <span className="moon">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                                      <path
                                                                          d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                                                                      />
                                                                  </svg>
                                                              </span>
              
                                                              <input type="checkbox" className="input" />
              
              
                                                              <span className="slider"></span>
              
                                                          </label>
                                                      </li>
                                                      <li className="button-list">
                                                          <button className="bell-btn">
                                                              <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={30}
                                                                  height={30}
                                                                  viewBox="0 0 24 24"
                                                              >
                                                                  <g
                                                                      fill="none"
                                                                      stroke="#292929"
                                                                      strokeLinecap="round"
                                                                      strokeLinejoin="round"
                                                                      strokeWidth={2}
                                                                  >
                                                                      <path strokeDasharray="4" d="M12 3v2">
                                                                          <animate
                                                                              fill="freeze"
                                                                              attributeName="stroke-dashoffset"
                                                                              dur="0.2s"
                                                                              values="4;0"
                                                                          />
                                                                      </path>
              
                                                                      <path
                                                                          strokeDasharray="30"
                                                                          strokeDashoffset="30"
                                                                          d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"
                                                                      >
                                                                          <animate
                                                                              fill="freeze"
                                                                              attributeName="stroke-dashoffset"
                                                                              begin="0.2s"
                                                                              dur="0.4s"
                                                                              to="0"
                                                                          />
                                                                      </path>
              
                                                                      <path
                                                                          strokeDasharray="10"
                                                                          strokeDashoffset="10"
                                                                          d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"
                                                                      >
                                                                          <animate
                                                                              fill="freeze"
                                                                              attributeName="stroke-dashoffset"
                                                                              begin="0.7s"
                                                                              dur="0.2s"
                                                                              to="0"
                                                                          />
                                                                      </path>
                                                                  </g>
                                                              </svg>
                                                          </button>
                                                      </li>
              
                                                      <li>
                                                          <button className="user-btn rounded-circle">
                                                              <img src={userIcon} alt="user" />
                                                          </button>
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