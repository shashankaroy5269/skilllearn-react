
import Chart from "chart.js/auto";

import logoIcon from "../../../assets/dashboard-assets/logo-icon.png";
import userIcon from "../../../assets/dashboard-assets/user-icon.png";

import { Link } from "react-router-dom";
import dashboardImg from "../../../assets/dashboard-assets/dashboard-img.png";


import mentor1 from "../../../assets/dashboard-assets/mentor1.png";
import mentor2 from "../../../assets/dashboard-assets/mentor2.png";
import mentor3 from "../../../assets/dashboard-assets/mentor3.png";
import mentor4 from "../../../assets/dashboard-assets/mentor4.png";
import mentor5 from "../../../assets/dashboard-assets/mentor5.png";
import mentor6 from "../../../assets/dashboard-assets/mentor6.png";

const DashboardMain = () => {

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
                    <div className="row align-items-stretch">

                        {/* ================= LEFT SIDEBAR START ================= */}
                        <div className="col-2">
                            <aside className="left-sideNav bg-white z-3">

                                <button className="close-btn" onClick={clickClose}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                                        />
                                    </svg>

                                </button>

                                <nav className="navBar">
                                    <div className="brand-logo">
                                        <img src={logoIcon} alt="logo" />
                                    </div>

                                    <div className="dashboard-navbar">
                                        <h2 className="title2 text-uppercase">Student Dashboard</h2>
                                        <div className="dashboardNav-list">
                                            <h3 className="title3">MAIN MENU</h3>
                                            <ul className="nav-item">

                                                <li className="item-list">
                                                    <a href="#" className="list-link">
                                                        <span className="icons">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
                                                                />
                                                            </svg>

                                                        </span>
                                                        <span className="titles">Dashboard</span>
                                                    </a>
                                                </li>

                                                <li className="item-list">
                                                    <a href="#" className="list-link">
                                                        <span className="icons">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"
                                                                />
                                                            </svg>

                                                        </span>
                                                        <span className="titles">My Course</span>
                                                    </a>
                                                </li>

                                                <li className="item-list">
                                                    <Link href="#" className="list-link">
                                                        <span className="icons">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <g
                                                                    stroke="#292929"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                >
                                                                    <path
                                                                        fill="#292929"
                                                                        fillOpacity={0}
                                                                        strokeDasharray="46"
                                                                        d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z"
                                                                    >
                                                                        <animate
                                                                            fill="freeze"
                                                                            attributeName="stroke-dashoffset"
                                                                            dur="0.5s"
                                                                            values="46;0"
                                                                        />
                                                                        <animate
                                                                            fill="freeze"
                                                                            attributeName="fill-opacity"
                                                                            begin="0.7s"
                                                                            dur="0.4s"
                                                                            to="1"
                                                                        />
                                                                    </path>

                                                                    <path
                                                                        fill="none"
                                                                        strokeDasharray="6"
                                                                        strokeDashoffset="6"
                                                                        d="M10 21h4"
                                                                    >
                                                                        <animate
                                                                            fill="freeze"
                                                                            attributeName="stroke-dashoffset"
                                                                            begin="0.5s"
                                                                            dur="0.2s"
                                                                            to="0"
                                                                        />
                                                                    </path>
                                                                </g>
                                                            </svg>

                                                        </span>
                                                        <span className="titles">Quiz</span>
                                                    </Link>
                                                </li>

                                                <li className="item-list">
                                                    <a href="#" className="list-link">
                                                        <span className="icons">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M17.525 10.625q.35-.225.35-.625t-.35-.625L12.65 6.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"
                                                                />
                                                            </svg>

                                                        </span>
                                                        <span className="titles">Live Courses</span>
                                                    </a>
                                                </li>

                                                <li className="item-list">
                                                    <a href="#" className="list-link">
                                                        <span className="icons">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <g fill="none" fillRule="evenodd">
                                                                    <path
                                                                        d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                                                                    />
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9c.561 0 1.068-.231 1.431-.603l.587.157a2 2 0 0 0 2.45-1.414l2.587-9.66a2 2 0 0 0-1.414-2.449L16 6.055V5a2 2 0 0 0-2-2zm11 15.479V8.126l3.124.837l-2.588 9.66z"
                                                                    />
                                                                </g>
                                                            </svg>

                                                        </span>
                                                        <span className="titles">My Assignment</span>
                                                    </a>
                                                </li>
                                                <li class="item-list">
                                                    <a href="#" class="list-link">
                                                        <span class="icons">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <g fill="none" fillRule="evenodd"></g>
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m-.75-3.2h1.5q0-.725.15-1.062t.7-.888q.75-.75 1-1.212t.25-1.088q0-1.125-.788-1.837T14 5q-1.025 0-1.787.575T11.15 7.1l1.35.55q.225-.625.613-.937T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.825.725-1.012 1.138T13.25 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"
                                                                />
                                                            </svg>

                                                        </span>
                                                        <span class="titles">Progress</span>
                                                    </a>
                                                </li>
                                                <li className="item-list">
                                                    <Link href="#" className="list-link active">
                                                        <span className="icons">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"
                                                                />
                                                            </svg>

                                                        </span>
                                                        <span className="titles">Calendar</span>
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="other-menu">
                                            <h3 className="title3">OTHER MENU</h3>
                                            <ul className="nav-item">
                                                <li className="item-list">
                                                    <a href="#" className="list-link">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                                                                />
                                                            </svg>
                                                        </span>

                                                        <span className="titles">Help Centre</span>
                                                    </a>
                                                </li>
                                                <li className="item-list">
                                                    <a href="#" className="list-link">
                                                        <span><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                fillRule="evenodd"
                                                                d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                                                            />
                                                        </svg>
                                                        </span>
                                                        <span className="titles">Settings</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="navBar-end">
                                            <button className="logout-btn">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="titles">Logout</span>
                                            </button>
                                        </div>

                                    </div>
                                </nav>
                            </aside>
                        </div>                    {/* ================= LEFT SIDEBAR END ================= */}

                        {/* ================= RIGHT CONTENT START ================= */}
                        <div className="col-10">
                            <div className="dashboard-top bg-white d-flex align-items-center">
                                <div className="dashboard-hdr d-flex align-items-center justify-content-between flex-wrap w-100">

                                    <div className="hdr-cntn">
                                        <h1 className="title1">Hi Avik, Welcome Back</h1>
                                        <p>Lets learn something new today.</p>
                                    </div>

                                    <ul className="hdr-menu d-flex align-items-center">

                                        <li className="button-list">
                                            <button className="menu-btn" onClick={hamberger}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
                                            <button className="bell-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="#292929" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                        <path d="M12 3v2" />
                                                        <path d="M12 5c-3.31 0-6 2.69-6 6v6c-1 0-2 1-2 2h16c0-1-1-2-2-2v-6c0-3.31-2.69-6-6-6" />
                                                        <path d="M10 20c0 1.1.9 2 2 2s2-.9 2-2" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </li>

                                        <li className="button-list">
                                            <button className="user-btn rounded-circle">
                                                <img src={userIcon} alt="" />
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            {/* ================= DASHBOARD GRID START ================= */}
                            <div className="dashboard-grid">
                                {/* ================= BOX 1 ================= */}
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
                                            aria-valuenow="70"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
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
                                        </a>
                                    </div>
                                </div>

                                {/* ================= BOX 2 ================= */}
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

                                {/* ================= BOX 3 ================= */}
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

                                {/* ================= BOX 4 ================= */}
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
                                {/* ================= BOX 5 ================= */}
                                <div className="common-box box-5">
                                    <h2 className="title2 mb-3">Study Statistic</h2>

                                    <select className="box5-dropdown weak-dropdown">
                                        <option>Weekly</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                    </select>

                                    <div className="bar-chart">
                                        <canvas id="myChart"></canvas>
                                    </div>
                                </div>

                                {/* ================= BOX 6 ================= */}
                                <div className="common-box box-6">
                                    <h2 className="title2">Learning Progress</h2>

                                    <div className="chart-box d-flex align-items-center justify-content-between">
                                        <div className="gauge-details d-flex align-items-center gap-4">
                                            <button className="guage-btn d-flex align-items-center justify-content-center">
                                                <span>75.3%</span>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fill="#8A38F5"
                                                            d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"
                                                            stroke="#8A38F5"
                                                            strokeWidth="0.3"
                                                        />
                                                    </svg>

                                                </span>
                                            </button>
                                            <p>Compared to last month</p>
                                        </div>

                                        <div className="gauge-wrapper">
                                            <canvas id="gaugeChart"></canvas>
                                            <div className="gauge-value">75%</div>
                                        </div>
                                    </div>
                                </div>

                                {/* ================= BOX 7 ================= */}
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
                            {/* ================= DASHBOARD GRID END ================= */}
                        </div>
                        {/* ================= RIGHT CONTENT END ================= */}

                    </div>
                </div>
            </section>
        </main>
    );
};

export default DashboardMain;



