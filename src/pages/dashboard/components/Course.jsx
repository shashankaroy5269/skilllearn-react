import React, { useState } from "react";
// import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// ===== DASHBOARD COMMON =====

import userIcon from "../../../assets/dashboard-assets/user-icon.png";

// ===== MENTOR IMAGES =====
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


import Sidebar from "./sidebar";

const DashboardCourses = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

      const clickClose = () => {
        document.querySelector(".left-sideNav")?.classList.remove("open");
    };

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
                        <div className={sidebarOpen ? "col-10" : "col-12"}>

                            <div className="dashboard-top bg-white d-flex align-items-center">
                                <div
                                    className="dashboard-hdr d-flex align-items-center justify-content-between flex-wrap w-100"
                                >
                                    <div className="hdr-cntn">
                                        <h1 className="title1">Hi Avik, Welcome Back</h1>
                                        <p>Lets learn something new today.</p>
                                    </div>
                                    <ul className="hdr-menu d-flex align-items-center">
                                        <li className="button-list">
                                            <button className="menu-btn" onClick={hamberger}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18ZM2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6Z"
                                                    />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="button-list">
                                            <label className="switch">
                                                <span className="sun">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g fill="#ffd43b">
                                                            <circle r="5" cy="12" cx="12"></circle>
                                                            <path
                                                                d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="moon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 384 512"
                                                    >
                                                        <path
                                                            d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                                                        ></path>
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
                                                    width="30"
                                                    height="30"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="#292929"
                                                        strokeLinecap="round"
                                                        strokeLinejion="round"
                                                        strokeWidth="2"
                                                    >
                                                        <path stroke-dasharray="4" d="M12 3v2">
                                                            <animate
                                                                fill="freeze"
                                                                attributeName="stroke-dashoffset"
                                                                dur="0.2s"
                                                                values="4;0"
                                                            />
                                                        </path>
                                                        <path
                                                            stroke-dasharray="30"
                                                            stroke-dashoffset="30"
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
                                                            stroke-dasharray="10"
                                                            stroke-dashoffset="10"
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
                                        <li className="button-list">
                                            <button className="user-btn rounded-circle">
                                                <img
                                                    src={userIcon}
                                                    alt=""
                                                />
                                            </button>
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
                                    <div className="course-card course-1">
                                        <div className="courseCard-cntn">
                                            <div
                                                className="card-hdr d-flex justify-content-between align-items-center"
                                            >
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>
                                            <ul
                                                className="progress-list d-flex align-items-center justify-content-between"
                                            >
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                    <img
                                                        src={mentor1}
                                                        alt=""
                                                    />
                                                </div>
                                                <p>Abraham Colin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-card course-2">
                                        <div className="courseCard-cntn">
                                            <div
                                                className="card-hdr d-flex justify-content-between align-items-center"
                                            >
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>
                                            <ul
                                                className="progress-list d-flex align-items-center justify-content-between"
                                            >
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                    <img
                                                        src={mentor2}
                                                        alt=""
                                                    />
                                                </div>
                                                <p>Julie Eve</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-card course-3">
                                        <div className="courseCard-cntn">
                                            <div
                                                className="card-hdr d-flex justify-content-between align-items-center"
                                            >
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>
                                            <ul
                                                className="progress-list d-flex align-items-center justify-content-between"
                                            >
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                    <img
                                                        src={mentor3}
                                                        alt=""
                                                    />
                                                </div>
                                                <p>Chester Lofus</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-card course-4">
                                        <div className="courseCard-cntn">
                                            <div
                                                className="card-hdr d-flex justify-content-between align-items-center"
                                            >
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>
                                            <ul
                                                className="progress-list d-flex align-items-center justify-content-between"
                                            >
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                    <img
                                                        src={mentor4}
                                                        alt=""
                                                    />
                                                </div>
                                                <p>Maxwell Reed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-card course-5">
                                        <div className="courseCard-cntn">
                                            <div
                                                className="card-hdr d-flex justify-content-between align-items-center"
                                            >
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>
                                            <ul
                                                className="progress-list d-flex align-items-center justify-content-between"
                                            >
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                    <img
                                                        src={mentor5}
                                                        alt=""
                                                    />
                                                </div>
                                                <p>Sophie Lane</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-card course-6">
                                        <div className="courseCard-cntn">
                                            <div
                                                className="card-hdr d-flex justify-content-between align-items-center"
                                            >
                                                <h2 className="title2 text-capitalize">
                                                    Design system fundamental
                                                </h2>
                                                <p>100%</p>
                                            </div>
                                            <ul
                                                className="progress-list d-flex align-items-center justify-content-between"
                                            >
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                <li
                                                    className="progress-timing d-flex align-items-center gap-1 me-2"
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                        >
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
                                                    <img
                                                        src={mentor6}
                                                        alt=""
                                                    />
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
