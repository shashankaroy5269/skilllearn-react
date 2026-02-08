
import { Link } from "react-router-dom";
import logoIcon from "../../../assets/dashboard-assets/logo-icon.png";


const Sidebar = () => {

    const clickClose = () => {
        document.querySelector(".left-sideNav")?.classList.remove("open");
    };

    return (
        <aside className="left-sideNav bg-white z-3">

            {/* CLOSE BUTTON */}
            <button className="close-btn" onClick={clickClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                </svg>
            </button>

            <nav className="navBar">

                {/* LOGO */}
                <div className="brand-logo">
                    <img src={logoIcon} alt="logo" />
                </div>

                <div className="dashboard-navbar">
                    <h2 className="title2 text-uppercase">Student Dashboard</h2>

                    {/* MAIN MENU */}
                    <div className="dashboardNav-list">
                        <h3 className="title3">MAIN MENU</h3>

                        <ul className="nav-item">

                            {/* DASHBOARD */}
                            <li className="item-list">
                                <Link to="/dashboard" className="list-link">

                                    <span className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z" />
                                        </svg>
                                    </span>
                                    <span className="titles">Dashboard</span>

                                </Link>
                            </li>

                            {/* MY COURSE */}
                            <li className="item-list">
                                <Link to="/dashboardCourses" className="list-link">
                                    <span className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="titles">My Course</span>
                                </Link>
                            </li>

                            {/* QUIZ */}
                            <li className="item-list">
                                <Link to="#" className="list-link">
                                    <span className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <g stroke="#292929" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                                <path
                                                    fill="#292929"
                                                    fillOpacity={0}
                                                    strokeDasharray="46"
                                                    d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z"
                                                >
                                                    <animate attributeName="stroke-dashoffset" dur="0.5s" values="46;0" fill="freeze" />
                                                    <animate attributeName="fill-opacity" begin="0.7s" dur="0.4s" to="1" fill="freeze" />
                                                </path>
                                                <path fill="none" strokeDasharray="6" strokeDashoffset="6" d="M10 21h4">
                                                    <animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" to="0" fill="freeze" />
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="titles">Quiz</span>
                                </Link>
                            </li>

                            {/* LIVE COURSES */}
                            <li className="item-list">
                                <Link to="/liveClass" className="list-link">
                                    <span className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M17.525 10.625q.35-.225.35-.625t-.35-.625L12.65 6.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="titles">Live Courses</span>
                                </Link>
                            </li>

                            {/* ASSIGNMENT */}
                            <li className="item-list">
                                <Link to="/assignment" className="list-link">
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
                                </Link>
                            </li>

                            {/* PROGRESS */}
                            <li className="item-list">
                                <Link to="/progress" className="list-link">
                                    <span className="icons">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15m-.75-3.2h1.5q0-.725.15-1.062t.7-.888q.75-.75 1-1.212t.25-1.088q0-1.125-.788-1.837T14 5q-1.025 0-1.787.575T11.15 7.1l1.35.55q.225-.625.613-.937T14 6.4q.6 0 .975.338t.375.912q0 .35-.2.663t-.7.787q-.825.725-1.012 1.138T13.25 11.8M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"
                                            />
                                        </svg>

                                    </span>
                                    <span className="titles">Progress</span>
                                </Link>
                            </li>

                            {/* CALENDAR */}
                            <li className="item-list">
                                <Link to="/calendar" className="list-link active">
                                    <span className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
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
                    {/* other menu */}

                    <div className="other-menu">
                        <h3 className="title3">OTHER MENU</h3>

                        <ul className="nav-item">
                            {/* HELP CENTRE */}
                            <li className="item-list">
                                <Link to="#" className="list-link">
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
                                </Link>
                            </li>

                            {/* SETTINGS */}
                            <li className="item-list">
                                <Link to="#" className="list-link">
                                    <span>
                                        <svg
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
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* LOGOUT */}
                    <div className="navBar-end">
                        <Link to="/" className="list-link">
                            <button className="logout-btn">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
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
                        </Link>
                    </div>

                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
