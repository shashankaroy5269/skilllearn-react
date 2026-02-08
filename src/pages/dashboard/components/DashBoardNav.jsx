import React, { useState, useEffect } from "react";
import userIcon from "../../../assets/dashboard-assets/user-icon.png";

const DashboardNavbar = ({ onMenuToggle }) => {
    const [theme, setTheme] = useState("light");
    const [showNotification, setShowNotification] = useState(false);

    // Apply theme to whole page
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ul className="hdr-menu d-flex align-items-center position-relative">
            {/* Hamburger */}
            <li>
                <button className="menu-btn" onClick={onMenuToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18ZM2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6Zm12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6Z"
                        />
                    </svg>
                </button>
            </li>

            {/* Theme Switch */}
            <li className="button-list">
                <label className="switch">
                    {/* Sun → Dark */}
                    <span className="sun" onClick={() => setTheme("dark")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="#ffd43b">
                                <circle r={5} cy={12} cx={12} />
                                <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29z" />
                            </g>
                        </svg>
                    </span>

                    {/* Moon → Light */}
                    <span className="moon" onClick={() => setTheme("light")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                        </svg>
                    </span>

                    <input type="checkbox" className="input" />
                    <span className="slider"></span>
                </label>
            </li>

            {/* Notification */}
            <li className="button-list position-relative">
                <button
                    className={`bell-btn ${showNotification ? "active" : ""}`}
                    onClick={() => setShowNotification(!showNotification)}
                >
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

                {showNotification && (
                    <div className="notification-box">
                        <div className="notification-item">
                            <span className="notif-text">New notification</span>
                            <span className="notif-badge">1</span>
                        </div>

                        <div className="notification-item">
                            <span className="notif-text">New course added</span>
                            <span className="notif-badge">2</span>
                        </div>

                        <div className="notification-item">
                            <span className="notif-text">Assignment approved</span>
                            <span className="notif-badge">3</span>
                        </div>
                    </div>

                )}
                <span className="bell-count">3</span>
            </li>

            {/* User */}
            <li>
                <button className="user-btn rounded-circle">
                    <img src={userIcon} alt="user" />
                </button>
            </li>
        </ul>
    );
};

export default DashboardNavbar;
