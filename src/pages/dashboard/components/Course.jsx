import React, { useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import mentor1 from "../../../assets/dashboard-assets/mentor1.png";
import mentor2 from "../../../assets/dashboard-assets/mentor2.png";
import mentor3 from "../../../assets/dashboard-assets/mentor3.png";
import mentor4 from "../../../assets/dashboard-assets/mentor4.png";
import mentor5 from "../../../assets/dashboard-assets/mentor5.png";
import mentor6 from "../../../assets/dashboard-assets/mentor6.png";
import swiperImg1 from "../../../assets/dashboard-assets/dashboard-course/swiperImg1.png";
import swiperImg2 from "../../../assets/dashboard-assets/dashboard-course/swiperImg2.png";
import swiperImg3 from "../../../assets/dashboard-assets/dashboard-course/swiperImg3.png";
import swiperImg4 from "../../../assets/dashboard-assets/dashboard-course/swiperImg4.png";

import card1 from "../../../assets/dashboard-assets/dashboard-course/card1.png";
import card2 from "../../../assets/dashboard-assets/dashboard-course/card2.png";
import card3 from "../../../assets/dashboard-assets/dashboard-course/card3.png";
import card4 from "../../../assets/dashboard-assets/dashboard-course/card4.png";
import card5 from "../../../assets/dashboard-assets/dashboard-course/card5.png";
import card6 from "../../../assets/dashboard-assets/dashboard-course/card6.png";
import DashboardNavbar from "./DashBoardNav";
import Sidebar from "./sidebar";

const DashboardCourses = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const hamberger = () => {
        document.querySelector(".left-sideNav")?.classList.toggle("open");
    };



    return (
        <main>
            <section className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-2">

                            <Sidebar />
                        </div>
                        <div className="col-10">

                            <div className="dashboard-top bg-white d-flex align-items-center">
                                <div
                                    className="dashboard-hdr d-flex align-items-center justify-content-between flex-wrap w-100"
                                >
                                    <div className="hdr-cntn">
                                        <h1 className="title1">Hi Avik, Welcome Back</h1>
                                        <p>Lets learn something new today.</p>
                                    </div>
                                    <ul className="hdr-menu d-flex align-items-center">
                                        <li>
                                            <DashboardNavbar onMenuToggle={hamberger} />

                                        </li>


                                    </ul>
                                </div>
                            </div>

                            <div className="common-box student-box">
                                <ul className="filter-list d-flex align-items-center gap-3">
                                    <li className="filter-buttonList">
                                        <button className="filter-btn">All courses</button>
                                    </li>
                                    <li className="filter-buttonList">
                                        <button className="filter-btn">Ongoing</button>
                                    </li>
                                    <li className="filter-buttonList">
                                        <button className="filter-btn">Completed</button>
                                    </li>
                                </ul>

                                <div className="course-grid">
                                    <div className="course-card " style={{ background: `url(${card1}) center / cover no-repeat` }}>
                                        <div className="courseCard-cntn">
                                            <div className="card-hdr d-flex justify-content-between align-items-center">
                                                <h2 className="title2 text-capitalize">Design system fundamental</h2>
                                                <p>100%</p>
                                            </div>

                                            <ul className="progress-list d-flex align-items-center justify-content-between">
                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#BC2848"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="7"
                                                                x="11"
                                                                y="6"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="9s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                            <rect
                                                                width="2"
                                                                height="9"
                                                                x="11"
                                                                y="11"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="0.75s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                        </svg>
                                                    </span>
                                                    <span>2hr 10min</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557"
                                                                opacity="0.5"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>10 Chapters</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#B20606"
                                                                fillRule="evenodd"
                                                                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
                                                                clipRule="evenodd"
                                                                strokeWidth="0.3"
                                                                stroke="#B20606"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>15 Videos</span>
                                                </li>
                                            </ul>

                                            <div className="card-bottom d-flex align-items-center">
                                                <div className="mentor-img">
                                                    <img src={mentor1} alt="mentor1" />
                                                </div>
                                                <p>Abraham Colin</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="course-card" style={{ background: `url(${card2}) center / cover no-repeat` }}>
                                        <div className="courseCard-cntn">
                                            <div className="card-hdr d-flex justify-content-between align-items-center">
                                                <h2 className="title2 text-capitalize">Design system fundamental</h2>
                                                <p>100%</p>
                                            </div>

                                            <ul className="progress-list d-flex align-items-center justify-content-between">
                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#BC2848"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="7"
                                                                x="11"
                                                                y="6"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="9s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                            <rect
                                                                width="2"
                                                                height="9"
                                                                x="11"
                                                                y="11"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="0.75s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                        </svg>
                                                    </span>
                                                    <span>2hr 10min</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557"
                                                                opacity="0.5"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>10 Chapters</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#B20606"
                                                                fillRule="evenodd"
                                                                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
                                                                clipRule="evenodd"
                                                                strokeWidth="0.3"
                                                                stroke="#B20606"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>15 Videos</span>
                                                </li>
                                            </ul>

                                            <div className="card-bottom d-flex align-items-center">
                                                <div className="mentor-img">
                                                    <img src={mentor2} alt="" />
                                                </div>
                                                <p>Julie Eve</p>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="course-card" style={{ background: `url(${card3}) center / cover no-repeat` }}>
                                        <div className="courseCard-cntn">
                                            <div className="card-hdr d-flex justify-content-between align-items-center">
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>

                                            <ul className="progress-list d-flex align-items-center justify-content-between">
                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#BC2848"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="7"
                                                                x="11"
                                                                y="6"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="9s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                            <rect
                                                                width="2"
                                                                height="9"
                                                                x="11"
                                                                y="11"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="0.75s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                        </svg>
                                                    </span>
                                                    <span>2hr 10min</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557"
                                                                opacity="0.5"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>10 Chapters</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#B20606"
                                                                fillRule="evenodd"
                                                                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
                                                                clipRule="evenodd"
                                                                strokeWidth="0.3"
                                                                stroke="#B20606"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>15 Videos</span>
                                                </li>
                                            </ul>

                                            <div className="card-bottom d-flex align-items-center">
                                                <div className="mentor-img">
                                                    <img src={mentor3} alt="" />
                                                </div>
                                                <p>Chester Lofus</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="course-card" style={{ background: `url(${card4}) center / cover no-repeat` }}>
                                        <div className="courseCard-cntn">
                                            <div className="card-hdr d-flex justify-content-between align-items-center">
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>

                                            <ul className="progress-list d-flex align-items-center justify-content-between">
                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#BC2848"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="7"
                                                                x="11"
                                                                y="6"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="9s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                            <rect
                                                                width="2"
                                                                height="9"
                                                                x="11"
                                                                y="11"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="0.75s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                        </svg>
                                                    </span>
                                                    <span>2hr 10min</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557"
                                                                opacity="0.5"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>10 Chapters</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#B20606"
                                                                fillRule="evenodd"
                                                                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
                                                                clipRule="evenodd"
                                                                strokeWidth="0.3"
                                                                stroke="#B20606"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>15 Videos</span>
                                                </li>
                                            </ul>

                                            <div className="card-bottom d-flex align-items-center">
                                                <div className="mentor-img">
                                                    <img src={mentor4} alt="" />
                                                </div>
                                                <p>Maxwell Reed</p>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="course-card" style={{ background: `url(${card5}) center / cover no-repeat` }}>
                                        <div className="courseCard-cntn">
                                            <div className="card-hdr d-flex justify-content-between align-items-center">
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>

                                            <ul className="progress-list d-flex align-items-center justify-content-between">
                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#BC2848"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="7"
                                                                x="11"
                                                                y="6"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="9s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                            <rect
                                                                width="2"
                                                                height="9"
                                                                x="11"
                                                                y="11"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="0.75s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                        </svg>
                                                    </span>
                                                    <span>2hr 10min</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557"
                                                                opacity="0.5"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>10 Chapters</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#B20606"
                                                                fillRule="evenodd"
                                                                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
                                                                clipRule="evenodd"
                                                                strokeWidth="0.3"
                                                                stroke="#B20606"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>15 Videos</span>
                                                </li>
                                            </ul>

                                            <div className="card-bottom d-flex align-items-center">
                                                <div className="mentor-img">
                                                    <img src={mentor5} alt="" />
                                                </div>
                                                <p>Sophie Lane</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="course-card" style={{ background: `url(${card6}) center / cover no-repeat` }}>
                                        <div className="courseCard-cntn">
                                            <div className="card-hdr d-flex justify-content-between align-items-center">
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>

                                            <ul className="progress-list d-flex align-items-center justify-content-between">
                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#BC2848"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="7"
                                                                x="11"
                                                                y="6"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="9s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                            <rect
                                                                width="2"
                                                                height="9"
                                                                x="11"
                                                                y="11"
                                                                fill="#BC2848"
                                                                rx="1"
                                                                strokeWidth="0.3"
                                                                stroke="#BC2848"
                                                            >
                                                                <animateTransform
                                                                    attributeName="transform"
                                                                    dur="0.75s"
                                                                    repeatCount="indefinite"
                                                                    type="rotate"
                                                                    values="0 12 12;360 12 12"
                                                                />
                                                            </rect>
                                                        </svg>
                                                    </span>
                                                    <span>2hr 10min</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17c-.11.653-.31.998-.616 1.244c-.307.246-.737.407-1.55.494c-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092c-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78c.127-.344.181-.397.291-.505a2.6 2.6 0 0 1 1.285-.667c.29-.062.67-.068 1.753-.068"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115c.81.11 1.238.31 1.544.618c.305.308.504.74.613 1.557c.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068c-.513.11-.96.347-1.285.667c-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552c.109-.816.308-1.249.613-1.557"
                                                                opacity="0.5"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                            <path
                                                                fill="#FE7E0F"
                                                                d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7M8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                                                                strokeWidth="0.3"
                                                                stroke="#FE7E0F"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>10 Chapters</span>
                                                </li>

                                                <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path
                                                                fill="#B20606"
                                                                fillRule="evenodd"
                                                                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05"
                                                                clipRule="evenodd"
                                                                strokeWidth="0.3"
                                                                stroke="#B20606"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>15 Videos</span>
                                                </li>
                                            </ul>

                                            <div className="card-bottom d-flex align-items-center">
                                                <div className="mentor-img">
                                                    <img src={mentor6} alt="" />
                                                </div>
                                                <p>Oliver Grant</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="course-swiper">
                                    <button className="filter-btn mb-4">
                                        Most Popular Courses
                                    </button>

                                    <Swiper
                                        modules={[Pagination, Autoplay]}
                                        slidesPerView={4}
                                        spaceBetween={20}
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 2500 }}
                                        loop={true}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg1} alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg2} alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg3} alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg4} alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg1} alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg2} alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg3} alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide className="slideImg">
                                            <img src={swiperImg4} alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DashboardCourses;
