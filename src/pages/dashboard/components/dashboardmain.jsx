


import { useEffect, useState } from "react";


import dashboardImg from "../../../assets/dashboard-assets/dashboard-img.png";

import mentor1 from "../../../assets/dashboard-assets/mentor1.png";
import mentor2 from "../../../assets/dashboard-assets/mentor2.png";
import mentor3 from "../../../assets/dashboard-assets/mentor3.png";
import mentor4 from "../../../assets/dashboard-assets/mentor4.png";
import mentor5 from "../../../assets/dashboard-assets/mentor5.png";
import mentor6 from "../../../assets/dashboard-assets/mentor6.png";
import StudyChart from "./studyChart";
import Sidebar from "./sidebar";
import DashboardNavbar from "./DashBoardNav";

const DashboardMain = () => {

    const hamberger = () => {
        document.querySelector(".left-sideNav")?.classList.toggle("open");
    };
    const [learningProgress, setLearningProgress] = useState(75);

    const [studyFilter, setStudyFilter] = useState("Weekly");


    const weeklyActive = [2, 8, 5, 8, 6, 10, 9];
    const weeklyGoal = [5, 8, 6, 8, 6, 10, 9];


    const dayIndexMap = {
        Weekly: null,
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
    };


    let activeData = [...weeklyActive];
    let goalData = [...weeklyGoal];


    const selectedIndex = dayIndexMap[studyFilter];

    if (selectedIndex !== null && selectedIndex !== undefined) {
        activeData = weeklyActive.map((val, idx) =>
            idx === selectedIndex ? val + 2 : val
        );

        goalData = weeklyGoal.map((val, idx) =>
            idx === selectedIndex ? val + 1 : val
        );
    }

    return (
        <main>
            <section className="dashboard">
                <div className="container">
                    <div className="row align-items-stretch">

                        {/* LEFT SIDEBAR */}
                        <div className="col-2">
                            <Sidebar />
                        </div>

                        {/* RIGHT CONTENT  */}
                        <div className="col-10">
                            <div className="dashboard-top bg-white d-flex align-items-center">
                                <div className="dashboard-hdr d-flex align-items-center justify-content-between flex-wrap w-100">

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


                            <div className="dashboard-grid">
                                {/*BOX 1 */}
                                <div className="common-box box-1">
                                    <h2 className="title3 text-capitalize">fundamentals</h2>

                                    <ul className="progress-list d-flex align-items-center">
                                        <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                    />
                                                    <rect
                                                        width="2"
                                                        height="7"
                                                        x="11"
                                                        y="6"
                                                        fill="currentColor"
                                                        rx="1"
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
                                                        fill="currentColor"
                                                        rx="1"
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
                                            <span>1hr 40min</span>
                                        </li>
                                        <li className="progress-timing d-flex align-items-center gap-1 me-2">
                                            <span><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 26 26"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M9.875 0a1 1 0 0 0-.406.156S8.204.952 6.844 1.813c-1.36.86-2.873 1.808-3.219 2l-.063.03C2.306 4.618 2.045 5.884 2 6.594c-.003.033 0 .06 0 .095c-.011.266 0 .437 0 .437v13.063C2 22.087 4.213 23 6.313 23c.7 0 1.4-.113 2-.313c.4-.2.687-.6.687-1v-10.5c0-2.3.5-3.38 2-4.28c.4-.2 4.594-3.095 4.594-3.095c.2-.2.406-.606.406-.906v-.094c0-.4-.2-.706-.5-.906s-.7-.2-1 0c-.1.1-6.2 4.207-7.5 4.907c-1.3.8-2.513.993-2.813.593c-.093-.093-.174-.378-.187-.656v-.063c.001-.272.071-.784.625-1.125c.562-.313 1.957-1.204 3.313-2.062c.573-.363.644-.402 1.093-.688A1 1 0 0 0 11 2.5V1a1 1 0 0 0-1.125-1m8 3.5a1 1 0 0 0-.438.188s-5.034 3.387-5.906 3.968l-.031.032c-.724.543-1.153 1.189-1.344 1.78A3.3 3.3 0 0 0 10 10.5v.313a1 1 0 0 0 0 .093V23c0 1.9 2.188 3 4.188 3c.9 0 1.712-.194 2.312-.594c1.2-.7 7-5.218 7-5.218c.3-.2.5-.482.5-.782v-13c0-.5-.194-.8-.594-1c-.3-.2-.793-.106-1.093.094c-1.6 1.2-5.907 4.588-6.907 5.188c-1.4.8-2.719 1-3.219.5c-.2-.2-.187-.388-.187-.688q.008-.26.063-.438c.056-.174.17-.388.593-.718c.02-.016.01-.015.031-.031c.723-.483 2.934-1.99 4.376-2.97A1 1 0 0 0 19 6V4.5a1 1 0 0 0-1.125-1M22 10.813v2l-5 3.874v-2z"
                                                />
                                            </svg>
                                            </span>
                                            <span>10 Chapters</span>
                                        </li>
                                        <li className="progress-timing d-flex align-items-center gap-1">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"
                                                    />
                                                </svg>

                                            </span>
                                            <span>15 Videos</span>
                                        </li>
                                    </ul>

                                    <div className="courseProgress-barBox">
                                        <div className="progressBarBox-top d-flex justify-content-between align-items-center">
                                            <p>Course Completed</p>
                                            <p>70%</p>

                                        </div>
                                        <div
                                            className="main-progress progress"
                                            role="progressbar"
                                            aria-label="Success example"
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="mainProgress-bar progress-bar"
                                                style={{ width: "70%" }}
                                            ></div>
                                        </div>


                                    </div>

                                    <div className="cmplt-btnBox">
                                        <a href="#" className="cmplt-btn d-flex justify-content-center align-items-center">
                                            <span>Continue Learning</span>
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={14}
                                                    height={14}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
                                                    />
                                                </svg>
                                            </span>

                                        </a>
                                    </div>
                                </div>

                                {/* BOX 2 */}
                                <div className="common-box box-2">
                                    <div className="progress-cntn d-flex align-items-center justify-content-between">
                                        <h2 className="title3">Progress</h2>

                                        <select className="weak-dropdown">
                                            <option>Weekly</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                        </select>
                                    </div>

                                    <ul className="progress-list">
                                        <li className="progress-timing mb-4">⏱ 40 Hours</li>
                                        <li className="progress-timing mb-4">📘 1 Course</li>
                                        <li className="progress-timing">🎓 05 course enrolled</li>
                                    </ul>
                                </div>

                                {/*  BOX 3  */}
                                <div className="common-box box-3">
                                    <h2 className="title3">Activity</h2>
                                    <p>
                                        <span>17</span> days
                                    </p>
                                    <p>65h 20m</p>

                                    <div className="activity-dots">
                                        {Array.from({ length: 11 }).map((_, i) => (
                                            <span key={i} className="dot full-dot"></span>
                                        ))}
                                        {Array.from({ length: 7 }).map((_, i) => (
                                            <span key={i} className="dot border-dot"></span>
                                        ))}
                                    </div>
                                </div>

                                {/*  BOX 4 */}
                                <div className="common-box box-4">
                                    <h2 className="title2">Keep learning new thing everyday</h2>

                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam."
                                    </p>

                                    <a href="#" className="community-btn">
                                        <span>Join Community</span>
                                        <span>+</span>
                                    </a>

                                    <div className="dashboard-img">
                                        <img src={dashboardImg} alt="" />

                                    </div>
                                </div>
                                {/*  BOX 5 */}

                                <div className="common-box box-5">
                                    <h2 className="title2 mb-3">Study Statistic</h2>

                                    <select
                                        className="box5-dropdown weak-dropdown"
                                        value={studyFilter}
                                        onChange={(e) => setStudyFilter(e.target.value)}
                                    > <option value="Weekly">Weekly</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                    </select>

                                    <div className="bar-chart">
                                        <StudyChart
                                            activeData={activeData}
                                            goalData={goalData}
                                        />
                                    </div>
                                </div>

                                {/* BOX 6  */}
                                <div className="common-box box-6">
                                    <h2 className="title2">Learning Progress</h2>

                                    <div className="chart-box d-flex align-items-center justify-content-between">
                                        <div className="gauge-details d-flex align-items-center gap-4">
                                            <button
                                                className="guage-btn d-flex align-items-center justify-content-center"
                                                onClick={() =>
                                                    setLearningProgress((prev) => (prev >= 100 ? 100 : prev + 5))
                                                }
                                            >
                                                <span>{learningProgress}%</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                        <path
                                                            fill="#8A38F5"
                                                            d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                            <p>Compared to last month</p>
                                        </div>


                                        <div className="gauge-wrapper">
                                            <svg viewBox="0 0 260 140" width="100%" height="140">
                                                <path d="M30 130 A100 100 0 0 1 70 50" stroke="#22c55e" strokeWidth="18" fill="none" />
                                                <path d="M70 50 A100 100 0 0 1 130 30" stroke="#06b6d4" strokeWidth="18" fill="none" />
                                                <path d="M130 30 A100 100 0 0 1 190 50" stroke="#facc15" strokeWidth="18" fill="none" />
                                                <path d="M190 50 A100 100 0 0 1 230 130" stroke="#ef4444" strokeWidth="18" fill="none" />

                                                <g transform={`rotate(${-180 + (learningProgress * 180) / 100} 130 130)`}>

                                                    <line x1="130" y1="130" x2="215" y2="130" stroke="#111827" strokeWidth="3" />
                                                </g>

                                                <circle cx="130" cy="130" r="6" fill="#111827" />

                                                <text x="130" y="105" textAnchor="middle" fontSize="22" fontWeight="600">
                                                    {learningProgress}%
                                                </text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/*  BOX 7 */}
                                <div className="common-box box-7">
                                    <h2 className="title2">Top Mentors</h2>

                                    <ul className="mentors">
                                        {[
                                            mentor1,
                                            mentor2,
                                            mentor3,
                                            mentor4,
                                            mentor5,
                                            mentor6,
                                        ].map((img, i) => (
                                            <li key={i} className="mentor-list d-flex justify-content-between">
                                                <div className="mentor-leftSide d-flex align-items-center">
                                                    <div className="mentor-img">
                                                        <img src={img} alt="mentor" />
                                                    </div>

                                                    <ul className="mentor-details">
                                                        <li className="mentor-name">Abraham Colin</li>
                                                        <li className="mentor-name">UI/UX development</li>
                                                    </ul>
                                                </div>

                                                <a href="#" className="details-button">
                                                    View Details
                                                </a>
                                            </li>
                                        ))}

                                    </ul>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </main>
    );
};

export default DashboardMain;



