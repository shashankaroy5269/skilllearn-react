import React from "react";


import userIcon from "../../../assets/dashboard-assets/user-icon.png";
import Sidebar from "./sidebar";

const AssignmentDashboard = () => {

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

                        {/*  MAIN CONTENT */}
                        <div className="col-10">
                            <div className="dashboard-top bg-white d-flex align-items-center">
                                <div className="dashboard-hdr d-flex align-items-center justify-content-between flex-wrap w-100">
                                    <div className="hdr-cntn">
                                        <h1 className="title1">Assignments</h1>
                                        <p>Dashboard / Assignment</p>
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

                            {/*  ASSIGNMENT STATS */}
                            <div className="assignment-grid">
                                <div className="common-box d-flex align-items-center gap-3">
                                    <div className="assignment-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                fill="none"
                                                stroke="#000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                            >
                                                <path
                                                    d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3m6.954 2.94l1-1a1.12 1.12 0 0 1 1.586 0v0a1.12 1.12 0 0 1 0 1.585l-1 1m-1.586-1.586l-2.991 2.991a1 1 0 0 0-.28.553l-.244 1.557l1.557-.243a1 1 0 0 0 .553-.28l2.99-2.992m-1.585-1.586l1.586 1.586"
                                                />
                                                <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20" />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="assignment-list">
                                        <p>Total Assignments</p>
                                        <p>15</p>
                                    </div>
                                </div>


                                <div className="common-box d-flex align-items-center gap-3">
                                    <div class="assignment-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 16 16"
                                        >
                                            <g
                                                fill="none"
                                                stroke="#000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                            >
                                                <path
                                                    d="m14.25 8.75c-.5 2.5-2.3849 4.85363-5.03069 5.37991-2.64578.5263-5.33066-.7044-6.65903-3.0523-1.32837-2.34784-1.00043-5.28307.81336-7.27989 1.81379-1.99683 4.87636-2.54771 7.37636-1.54771"
                                                />
                                                <polyline points="5.75 7.75 8.25 10.25 14.25 3.75" />
                                            </g>
                                        </svg>

                                    </div>
                                    <div className="assignment-list">
                                        <p>Completed</p>
                                        <p>6</p>
                                    </div>
                                </div>

                                <div className="common-box d-flex align-items-center gap-3">
                                    <div className="assignment-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#000"
                                                d="M9 8h2v6H9zm4-7H7v2h6zm4.03 6.39A8.96 8.96 0 0 1 19 13c0 4.97-4 9-9 9a9 9 0 0 1 0-18c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41zM17 13c0-3.87-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7m4-6v6h2V7zm0 10h2v-2h-2z"
                                                stroke="#000"
                                                strokeWidth={0.3}
                                            />
                                        </svg>
                                    </div>

                                    <div className="assignment-list">
                                        <p>Pending</p>
                                        <p>6</p>
                                    </div>
                                </div>

                                <div className="common-box d-flex align-items-center gap-3">
                                    <div className="assignment-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#000"
                                                d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63M12.5 7v5.25l4.5 2.67l-.75 1.23L11 13V7z"
                                                stroke="#000"
                                                strokeWidth={0.3}
                                            />
                                        </svg>
                                    </div>

                                    <div className="assignment-list">
                                        <p>Overdue</p>
                                        <p>3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="common-box">
                                <ul className="buttonBox flex-wrap d-flex justify-content-between align-items-center">
                                    <li className="assignmentBtn-list">
                                        <button className="assignmentCourse-btn d-flex align-items-center gap-1">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#000"
                                                        d="M18.385 21h-2.827q-.214 0-.357-.143t-.143-.357t.143-.357t.357-.143h2.826q.231 0 .424-.192t.192-.424v-8.768H5V14q0 .214-.143.357T4.5 14.5t-.357-.143T4 14V6.616q0-.691.463-1.153T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21m-8.017-1.5H2q-.213 0-.357-.143T1.5 19t.143-.357T2 18.5h8.367l-2.72-2.765q-.141-.14-.144-.332q-.003-.191.143-.337q.14-.141.345-.141q.203 0 .344.14l3.388 3.37q.243.242.243.565t-.243.566l-3.389 3.388q-.14.14-.34.133t-.348-.153q-.14-.14-.14-.334t.14-.334zM5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6z"
                                                        stroke="#000"
                                                        strokeWidth={0.3}
                                                    />
                                                </svg>

                                            </span>
                                            <span>Upcoming</span>
                                        </button>
                                    </li>

                                    <li className="assignmentBtn-list">
                                        <button className="assignmentCourse-btn active d-flex align-items-center gap-1">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#000"
                                                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                        stroke="#000"
                                                        strokeWidth={0.3}
                                                    />

                                                    <rect
                                                        width={2}
                                                        height={7}
                                                        x={11}
                                                        y={6}
                                                        fill="#000"
                                                        rx={1}
                                                        stroke="#000"
                                                        strokeWidth={0.3}
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
                                                        width={2}
                                                        height={9}
                                                        x={11}
                                                        y={11}
                                                        fill="#000"
                                                        rx={1}
                                                        stroke="#000"
                                                        strokeWidth={0.3}
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
                                            <span>Current</span>
                                            <span>3</span>
                                        </button>
                                    </li>

                                    <li className="assignmentBtn-list">
                                        <button className="assignmentCourse-btn d-flex align-items-center gap-1">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="#000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    >
                                                        <path d="M.75 14.25v9m0-1.5h15a3 3 0 0 0-3-3H9a3 3 0 0 0-3-3H.75m5.25 3h3m-1.316-5.934A8.25 8.25 0 1 1 17.021 17" />
                                                        <path d="M14.25 3.75v6H18" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>Upcoming</span>
                                        </button>
                                    </li>
                                </ul>

                                <div class="assignmentCntn-box text-center">
                                    <h2 class="title2">Current Assignments</h2>
                                    <p>Keep the momentum going!</p>
                                </div>
                                <div className="assignmentCourse-grid">
                                    <div className="assignmentCourse-card">
                                        <div className="cardActive">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M33.18 32.146c-.375 1.139-1.985 1.139-2.36 0l-2.518-7.656a1.24 1.24 0 0 0-.792-.792l-7.656-2.518c-1.139-.375-1.139-1.985 0-2.36l7.656-2.518a1.24 1.24 0 0 0 .792-.792l2.518-7.656c.375-1.139 1.985-1.139 2.36 0l2.518 7.656c.123.375.417.669.792.792l7.656 2.518c1.139.375 1.139 1.985 0 2.36l-7.656 2.518a1.24 1.24 0 0 0-.792.792zM16.97 44.298c-.308.936-1.632.936-1.94 0l-1.9-5.778a1.02 1.02 0 0 0-.65-.65l-5.778-1.9c-.936-.308-.936-1.632 0-1.94l5.778-1.9a1.02 1.02 0 0 0 .65-.65l1.9-5.778c.308-.936 1.632-.936 1.94 0l1.9 5.778c.101.308.342.549.65.65l5.778 1.9c.936.308.936 1.632 0 1.94l-5.778 1.9a1.02 1.02 0 0 0-.65.65zm-4.097-23.929c-.277.841-1.469.841-1.745 0l-1.71-5.2a.92.92 0 0 0-.586-.586l-5.2-1.71c-.843-.277-.843-1.469 0-1.745l5.2-1.71a.92.92 0 0 0 .585-.586l1.71-5.2c.277-.843 1.469-.843 1.745 0l1.71 5.2a.92.92 0 0 0 .586.585l5.2 1.71c.843.277.843 1.469 0 1.745l-5.2 1.71a.92.92 0 0 0-.585.586z"
                                                    />
                                                </svg>

                                            </span>
                                            <span>High</span>
                                        </div>

                                        <div className="cardActive">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            d="m14.25 8.75c-.5 2.5-2.3849 4.85363-5.03069 5.37991-2.64578.5263-5.33066-.7044-6.65903-3.0523-1.32837-2.34784-1.00043-5.28307.81336-7.27989 1.81379-1.99683 4.87636-1.54771 7.37636-1.54771"
                                                        />
                                                        <polyline points="5.75 7.75 8.25 10.25 14.25 3.75" />
                                                    </g>
                                                </svg>

                                            </span>
                                            <span>High</span>
                                        </div>

                                        <h3 className="title3">UI/UX Design System</h3>

                                        <div className="content-id">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#00b8f0"
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v27a2 2 0 0 0 2.13 2l13.44-.81a1 1 0 0 1 .95.54c.26.66 1 .91 1.89.91h5c.88 0 1.63-.25 1.89-.91a1 1 0 0 1 .95-.54l13.44.81a2 2 0 0 0 2.13-2v-27a2 2 0 0 0-1.92-2"
                                                    />
                                                    <path
                                                        fill="#4acfff"
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v3.5a2 2 0 0 1 1.9-2L24 13l19 .91a2 2 0 0 1 1.9 2V12.4a2 2 0 0 0-1.9-1.99"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v27a2 2 0 0 0 2.13 2l13.44-.81a1 1 0 0 1 .95.54c.26.66 1 .91 1.89.91h5c.88 0 1.63-.25 1.89-.91a1 1 0 0 1 .95-.54l13.44.81a2 2 0 0 0 2.13-2v-27a2 2 0 0 0-1.92-2"
                                                    />
                                                    <path
                                                        fill="#627b8c"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M21 36h6v2a1.54 1.54 0 0 1-1.54 1.54h-2.92A1.54 1.54 0 0 1 21 38z"
                                                    />
                                                    <path
                                                        fill="#45413c"
                                                        d="M7 43.5a17 1.5 0 1 0 34 0a17 1.5 0 1 0-34 0"
                                                        opacity={0.15}
                                                    />
                                                    <path
                                                        fill="#fffef2"
                                                        d="m8.59 9.5l-2.16 2.74a2.05 2.05 0 0 0-.34 1.13V39l2.5-3.67Zm30.82 0l2.16 2.74a2.05 2.05 0 0 1 .34 1.13V39l-2.5-3.67Z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M6.43 12.24a2.05 2.05 0 0 0-.34 1.13v3.5a2.05 2.05 0 0 1 .34-1.13L8.59 13V9.5Zm35.14 0L39.41 9.5V13l2.16 2.74a2.05 2.05 0 0 1 .34 1.13v-3.5a2.05 2.05 0 0 0-.34-1.13"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="m8.59 9.5l-2.16 2.74a2.05 2.05 0 0 0-.34 1.13V39l2.5-3.67Zm30.82 0l2.16 2.74a2.05 2.05 0 0 1 .34 1.13V39l-2.5-3.67Z"
                                                    />
                                                    <path
                                                        fill="#fffef2"
                                                        d="M24 37V11a3 3 0 0 0-3-3l-11.5.92a1.52 1.52 0 0 0-.91.58v29l12.63-.4A3.42 3.42 0 0 1 24 37m3-29a3 3 0 0 0-3 3v26a3.42 3.42 0 0 1 2.78 1.1l12.63.4v-29a1.52 1.52 0 0 0-.91-.58Z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="m21 8l-11.5.92a1.52 1.52 0 0 0-.91.58v2.92a1 1 0 0 1 .91-1L21 10.5a3 3 0 0 1 3 3V11a3 3 0 0 0-3-3m17.5.92L27 8a3 3 0 0 0-3 3v2.5a3 3 0 0 1 3-3l11.5.92a1 1 0 0 1 .91 1V9.5a1.52 1.52 0 0 0-.91-.58"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M24 37V11a3 3 0 0 0-3-3l-11.5.92a1.52 1.52 0 0 0-.91.58v29l12.63-.4A3.42 3.42 0 0 1 24 37m3-29a3 3 0 0 0-3 3v26a3.42 3.42 0 0 1 2.78 1.1l12.63.4v-29a1.52 1.52 0 0 0-.91-.58Z"
                                                    />
                                                    <path
                                                        fill="#fffce5"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M24 37a3 3 0 0 0-3-2.5l-12.41.83L6.09 39l15.09-.83A3.34 3.34 0 0 1 24 37m2.82 1.17l15.09.83l-2.5-3.67L27 34.5a3 3 0 0 0-2.95 2.5a3.34 3.34 0 0 1 2.77 1.17"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="m20.5 11.5l-9 .86m9 2.97l-9 .86m9 2.97l-9 .85m9 2.98l-9 .85m9 2.97l-9 .86m9 2.97l-9 .86m16-20l9 .86m-9 2.97l9 .86m-9 2.97l9 .85m-9 2.98l9 .85m-9 2.97l9 .86m-9 2.97l9 .86"
                                                    />
                                                </svg>

                                            </span>
                                            <span>Human- Computer Interaction</span>
                                        </div>

                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical Latin
                                            literature from 45 BC
                                        </p>

                                        <div className="assignment-date d-flex align-items-center">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={25}
                                                    height={25}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#000"
                                                        d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
                                                        stroke="#000"
                                                        strokeWidth={0.3}
                                                    />
                                                </svg>

                                            </span>

                                            <div className="assignment-list">
                                                <p>Dec 22, 2025</p>
                                                <p>4 days remaining</p>
                                            </div>
                                        </div>

                                        <div className="progress-barBox">
                                            <div className="barBox-top d-flex justify-content-between align-items-center">
                                                <div className="boxLeft">
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="#000"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                stroke="#000"
                                                                strokeWidth={0.3}
                                                            />

                                                            <rect
                                                                width={2}
                                                                height={7}
                                                                x={11}
                                                                y={6}
                                                                fill="#000"
                                                                rx={1}
                                                                stroke="#000"
                                                                strokeWidth={0.3}
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
                                                                width={2}
                                                                height={9}
                                                                x={11}
                                                                y={11}
                                                                fill="#000"
                                                                rx={1}
                                                                stroke="#000"
                                                                strokeWidth={0.3}
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
                                                    <span>Progress</span>
                                                </div>

                                                <p>65%</p>
                                            </div>

                                            <div
                                                className="progress"
                                                role="progressbar"
                                                aria-valuenow="65"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <div
                                                    className="progress-bar"
                                                    style={{ width: "65%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="assignmentCourse-card">
                                        <div className="cardActive">

                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M33.18 32.146c-.375 1.139-1.985 1.139-2.36 0l-2.518-7.656a1.24 1.24 0 0 0-.792-.792l-7.656-2.518c-1.139-.375-1.139-1.985 0-2.36l7.656-2.518a1.24 1.24 0 0 0 .792-.792l2.518-7.656c.375-1.139 1.985-1.139 2.36 0l2.518 7.656c.123.375.417.669.792.792l7.656 2.518c1.139.375 1.139 1.985 0 2.36l-7.656 2.518a1.24 1.24 0 0 0-.792.792zM16.97 44.298c-.308.936-1.632.936-1.94 0l-1.9-5.778a1.02 1.02 0 0 0-.65-.65l-5.778-1.9c-.936-.308-.936-1.632 0-1.94l5.778-1.9a1.02 1.02 0 0 0 .65-.65l1.9-5.778c.308-.936 1.632-.936 1.94 0l1.9 5.778c.101.308.342.549.65.65l5.778 1.9c.936.308.936 1.632 0 1.94l-5.778 1.9a1.02 1.02 0 0 0-.65.65zm-4.097-23.929c-.277.841-1.469.841-1.745 0l-1.71-5.2a.92.92 0 0 0-.586-.586l-5.2-1.71c-.843-.277-.843-1.469 0-1.745l5.2-1.71a.92.92 0 0 0 .585-.586l1.71-5.2c.277-.843 1.469-.843 1.745 0l1.71 5.2a.92.92 0 0 0 .586.585l5.2 1.71c.843.277.843 1.469 0 1.745l-5.2 1.71a.92.92 0 0 0-.585.586z"
                                                    />
                                                </svg>

                                            </span>
                                            <span>High</span>
                                        </div>
                                        <div className="cardActive">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            d="m14.25 8.75c-.5 2.5-2.3849 4.85363-5.03069 5.37991-2.64578.5263-5.33066-.7044-6.65903-3.0523-1.32837-2.34784-1.00043-5.28307.81336-7.27989 1.81379-1.99683 4.87636-1.54771 7.37636-1.54771"
                                                        />
                                                        <polyline points="5.75 7.75 8.25 10.25 14.25 3.75" />
                                                    </g>
                                                </svg>

                                            </span>
                                            <span>High</span>
                                        </div>


                                        <h3 className="title3">UI/UX Design System</h3>

                                        <div className="content-id">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#00b8f0"
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v27a2 2 0 0 0 2.13 2l13.44-.81a1 1 0 0 1 .95.54c.26.66 1 .91 1.89.91h5c.88 0 1.63-.25 1.89-.91a1 1 0 0 1 .95-.54l13.44.81a2 2 0 0 0 2.13-2v-27a2 2 0 0 0-1.92-2"
                                                    />
                                                    <path
                                                        fill="#4acfff"
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v3.5a2 2 0 0 1 1.9-2L24 13l19 .91a2 2 0 0 1 1.9 2V12.4a2 2 0 0 0-1.9-1.99"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v27a2 2 0 0 0 2.13 2l13.44-.81a1 1 0 0 1 .95.54c.26.66 1 .91 1.89.91h5c.88 0 1.63-.25 1.89-.91a1 1 0 0 1 .95-.54l13.44.81a2 2 0 0 0 2.13-2v-27a2 2 0 0 0-1.92-2"
                                                    />
                                                    <path
                                                        fill="#627b8c"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M21 36h6v2a1.54 1.54 0 0 1-1.54 1.54h-2.92A1.54 1.54 0 0 1 21 38z"
                                                    />
                                                    <path
                                                        fill="#45413c"
                                                        d="M7 43.5a17 1.5 0 1 0 34 0a17 1.5 0 1 0-34 0"
                                                        opacity={0.15}
                                                    />
                                                    <path
                                                        fill="#fffef2"
                                                        d="m8.59 9.5l-2.16 2.74a2.05 2.05 0 0 0-.34 1.13V39l2.5-3.67Zm30.82 0l2.16 2.74a2.05 2.05 0 0 1 .34 1.13V39l-2.5-3.67Z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M6.43 12.24a2.05 2.05 0 0 0-.34 1.13v3.5a2.05 2.05 0 0 1 .34-1.13L8.59 13V9.5Zm35.14 0L39.41 9.5V13l2.16 2.74a2.05 2.05 0 0 1 .34 1.13v-3.5a2.05 2.05 0 0 0-.34-1.13"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="m8.59 9.5l-2.16 2.74a2.05 2.05 0 0 0-.34 1.13V39l2.5-3.67Zm30.82 0l2.16 2.74a2.05 2.05 0 0 1 .34 1.13V39l-2.5-3.67Z"
                                                    />
                                                    <path
                                                        fill="#fffef2"
                                                        d="M24 37V11a3 3 0 0 0-3-3l-11.5.92a1.52 1.52 0 0 0-.91.58v29l12.63-.4A3.42 3.42 0 0 1 24 37m3-29a3 3 0 0 0-3 3v26a3.42 3.42 0 0 1 2.78 1.1l12.63.4v-29a1.52 1.52 0 0 0-.91-.58Z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="m21 8l-11.5.92a1.52 1.52 0 0 0-.91.58v2.92a1 1 0 0 1 .91-1L21 10.5a3 3 0 0 1 3 3V11a3 3 0 0 0-3-3m17.5.92L27 8a3 3 0 0 0-3 3v2.5a3 3 0 0 1 3-3l11.5.92a1 1 0 0 1 .91 1V9.5a1.52 1.52 0 0 0-.91-.58"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M24 37V11a3 3 0 0 0-3-3l-11.5.92a1.52 1.52 0 0 0-.91.58v29l12.63-.4A3.42 3.42 0 0 1 24 37m3-29a3 3 0 0 0-3 3v26a3.42 3.42 0 0 1 2.78 1.1l12.63.4v-29a1.52 1.52 0 0 0-.91-.58Z"
                                                    />
                                                    <path
                                                        fill="#fffce5"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M24 37a3 3 0 0 0-3-2.5l-12.41.83L6.09 39l15.09-.83A3.34 3.34 0 0 1 24 37m2.82 1.17l15.09.83l-2.5-3.67L27 34.5a3 3 0 0 0-2.95 2.5a3.34 3.34 0 0 1 2.77 1.17"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="m20.5 11.5l-9 .86m9 2.97l-9 .86m9 2.97l-9 .85m9 2.98l-9 .85m9 2.97l-9 .86m9 2.97l-9 .86m16-20l9 .86m-9 2.97l9 .86m-9 2.97l9 .85m-9 2.98l9 .85m-9 2.97l9 .86m-9 2.97l9 .86"
                                                    />
                                                </svg>
                                            </span>
                                            <span>Human- Computer Interaction</span>
                                        </div>

                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical Latin
                                            literature from 45 BC
                                        </p>

                                        <div className="assignment-date d-flex align-items-center">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={25}
                                                    height={25}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#000"
                                                        d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
                                                        stroke="#000"
                                                        strokeWidth={0.3}
                                                    />
                                                </svg>

                                            </span>

                                            <div className="assignment-list">
                                                <p>Dec 22, 2025</p>
                                                <p>4 days remaining</p>
                                            </div>
                                        </div>

                                        <div className="progress-barBox">
                                            <div className="barBox-top d-flex justify-content-between align-items-center">
                                                <div className="boxLeft">
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="#000"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                stroke="#000"
                                                                strokeWidth={0.3}
                                                            />

                                                            <rect
                                                                width={2}
                                                                height={7}
                                                                x={11}
                                                                y={6}
                                                                fill="#000"
                                                                rx={1}
                                                                stroke="#000"
                                                                strokeWidth={0.3}
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
                                                                width={2}
                                                                height={9}
                                                                x={11}
                                                                y={11}
                                                                fill="#000"
                                                                rx={1}
                                                                stroke="#000"
                                                                strokeWidth={0.3}
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
                                                    <span>Progress</span>
                                                </div>

                                                <p>65%</p>
                                            </div>

                                            <div
                                                className="progress"
                                                role="progressbar"
                                                aria-valuenow="65"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <div
                                                    className="progress-bar"
                                                    style={{ width: "65%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="assignmentCourse-card">
                                        <div className="cardActive">

                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M33.18 32.146c-.375 1.139-1.985 1.139-2.36 0l-2.518-7.656a1.24 1.24 0 0 0-.792-.792l-7.656-2.518c-1.139-.375-1.139-1.985 0-2.36l7.656-2.518a1.24 1.24 0 0 0 .792-.792l2.518-7.656c.375-1.139 1.985-1.139 2.36 0l2.518 7.656c.123.375.417.669.792.792l7.656 2.518c1.139.375 1.139 1.985 0 2.36l-7.656 2.518a1.24 1.24 0 0 0-.792.792zM16.97 44.298c-.308.936-1.632.936-1.94 0l-1.9-5.778a1.02 1.02 0 0 0-.65-.65l-5.778-1.9c-.936-.308-.936-1.632 0-1.94l5.778-1.9a1.02 1.02 0 0 0 .65-.65l1.9-5.778c.308-.936 1.632-.936 1.94 0l1.9 5.778c.101.308.342.549.65.65l5.778 1.9c.936.308.936 1.632 0 1.94l-5.778 1.9a1.02 1.02 0 0 0-.65.65zm-4.097-23.929c-.277.841-1.469.841-1.745 0l-1.71-5.2a.92.92 0 0 0-.586-.586l-5.2-1.71c-.843-.277-.843-1.469 0-1.745l5.2-1.71a.92.92 0 0 0 .585-.586l1.71-5.2c.277-.843 1.469-.843 1.745 0l1.71 5.2a.92.92 0 0 0 .586.585l5.2 1.71c.843.277.843 1.469 0 1.745l-5.2 1.71a.92.92 0 0 0-.585.586z"
                                                    />
                                                </svg>

                                            </span>
                                            <span>High</span>
                                        </div>
                                        <div className="cardActive">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path
                                                            d="m14.25 8.75c-.5 2.5-2.3849 4.85363-5.03069 5.37991-2.64578.5263-5.33066-.7044-6.65903-3.0523-1.32837-2.34784-1.00043-5.28307.81336-7.27989 1.81379-1.99683 4.87636-1.54771 7.37636-1.54771"
                                                        />
                                                        <polyline points="5.75 7.75 8.25 10.25 14.25 3.75" />
                                                    </g>
                                                </svg>

                                            </span>
                                            <span>High</span>
                                        </div>


                                        <h3 className="title3">UI/UX Design System</h3>

                                        <div className="content-id">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="#00b8f0"
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v27a2 2 0 0 0 2.13 2l13.44-.81a1 1 0 0 1 .95.54c.26.66 1 .91 1.89.91h5c.88 0 1.63-.25 1.89-.91a1 1 0 0 1 .95-.54l13.44.81a2 2 0 0 0 2.13-2v-27a2 2 0 0 0-1.92-2"
                                                    />
                                                    <path
                                                        fill="#4acfff"
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v3.5a2 2 0 0 1 1.9-2L24 13l19 .91a2 2 0 0 1 1.9 2V12.4a2 2 0 0 0-1.9-1.99"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M43 10.41L26 9.6v1.57h-4V9.6l-17 .81a2 2 0 0 0-1.9 2v27a2 2 0 0 0 2.13 2l13.44-.81a1 1 0 0 1 .95.54c.26.66 1 .91 1.89.91h5c.88 0 1.63-.25 1.89-.91a1 1 0 0 1 .95-.54l13.44.81a2 2 0 0 0 2.13-2v-27a2 2 0 0 0-1.92-2"
                                                    />
                                                    <path
                                                        fill="#627b8c"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M21 36h6v2a1.54 1.54 0 0 1-1.54 1.54h-2.92A1.54 1.54 0 0 1 21 38z"
                                                    />
                                                    <path
                                                        fill="#45413c"
                                                        d="M7 43.5a17 1.5 0 1 0 34 0a17 1.5 0 1 0-34 0"
                                                        opacity={0.15}
                                                    />
                                                    <path
                                                        fill="#fffef2"
                                                        d="m8.59 9.5l-2.16 2.74a2.05 2.05 0 0 0-.34 1.13V39l2.5-3.67Zm30.82 0l2.16 2.74a2.05 2.05 0 0 1 .34 1.13V39l-2.5-3.67Z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M6.43 12.24a2.05 2.05 0 0 0-.34 1.13v3.5a2.05 2.05 0 0 1 .34-1.13L8.59 13V9.5Zm35.14 0L39.41 9.5V13l2.16 2.74a2.05 2.05 0 0 1 .34 1.13v-3.5a2.05 2.05 0 0 0-.34-1.13"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="m8.59 9.5l-2.16 2.74a2.05 2.05 0 0 0-.34 1.13V39l2.5-3.67Zm30.82 0l2.16 2.74a2.05 2.05 0 0 1 .34 1.13V39l-2.5-3.67Z"
                                                    />
                                                    <path
                                                        fill="#fffef2"
                                                        d="M24 37V11a3 3 0 0 0-3-3l-11.5.92a1.52 1.52 0 0 0-.91.58v29l12.63-.4A3.42 3.42 0 0 1 24 37m3-29a3 3 0 0 0-3 3v26a3.42 3.42 0 0 1 2.78 1.1l12.63.4v-29a1.52 1.52 0 0 0-.91-.58Z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="m21 8l-11.5.92a1.52 1.52 0 0 0-.91.58v2.92a1 1 0 0 1 .91-1L21 10.5a3 3 0 0 1 3 3V11a3 3 0 0 0-3-3m17.5.92L27 8a3 3 0 0 0-3 3v2.5a3 3 0 0 1 3-3l11.5.92a1 1 0 0 1 .91 1V9.5a1.52 1.52 0 0 0-.91-.58"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M24 37V11a3 3 0 0 0-3-3l-11.5.92a1.52 1.52 0 0 0-.91.58v29l12.63-.4A3.42 3.42 0 0 1 24 37m3-29a3 3 0 0 0-3 3v26a3.42 3.42 0 0 1 2.78 1.1l12.63.4v-29a1.52 1.52 0 0 0-.91-.58Z"
                                                    />
                                                    <path
                                                        fill="#fffce5"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="M24 37a3 3 0 0 0-3-2.5l-12.41.83L6.09 39l15.09-.83A3.34 3.34 0 0 1 24 37m2.82 1.17l15.09.83l-2.5-3.67L27 34.5a3 3 0 0 0-2.95 2.5a3.34 3.34 0 0 1 2.77 1.17"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="#45413c"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1}
                                                        d="m20.5 11.5l-9 .86m9 2.97l-9 .86m9 2.97l-9 .85m9 2.98l-9 .85m9 2.97l-9 .86m9 2.97l-9 .86m16-20l9 .86m-9 2.97l9 .86m-9 2.97l9 .85m-9 2.98l9 .85m-9 2.97l9 .86m-9 2.97l9 .86"
                                                    />
                                                </svg>
                                            </span>
                                            <span>Human- Computer Interaction</span>
                                        </div>

                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply
                                            random text. It has roots in a piece of classical Latin
                                            literature from 45 BC
                                        </p>

                                        <div className="assignment-date d-flex align-items-center">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={25}
                                                    height={25}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#000"
                                                        d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
                                                        stroke="#000"
                                                        strokeWidth={0.3}
                                                    />
                                                </svg>

                                            </span>

                                            <div className="assignment-list">
                                                <p>Dec 22, 2025</p>
                                                <p>4 days remaining</p>
                                            </div>
                                        </div>

                                        <div className="progress-barBox">
                                            <div className="barBox-top d-flex justify-content-between align-items-center">
                                                <div className="boxLeft">
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="#000"
                                                                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                                                                stroke="#000"
                                                                strokeWidth={0.3}
                                                            />

                                                            <rect
                                                                width={2}
                                                                height={7}
                                                                x={11}
                                                                y={6}
                                                                fill="#000"
                                                                rx={1}
                                                                stroke="#000"
                                                                strokeWidth={0.3}
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
                                                                width={2}
                                                                height={9}
                                                                x={11}
                                                                y={11}
                                                                fill="#000"
                                                                rx={1}
                                                                stroke="#000"
                                                                strokeWidth={0.3}
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
                                                    <span>Progress</span>
                                                </div>

                                                <p>65%</p>
                                            </div>

                                            <div
                                                className="progress"
                                                role="progressbar"
                                                aria-valuenow="65"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <div
                                                    className="progress-bar"
                                                    style={{ width: "65%" }}
                                                />
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

export default AssignmentDashboard;
