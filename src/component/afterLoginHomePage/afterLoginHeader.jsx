

import { Link } from "react-router-dom";
import logo from "../../assets/CommonAssets/Logo.png";
import React, { useState, useRef, useEffect } from "react";
import "./afterLogin.css";
import userIcon from "../../assets/dashboard-assets/user-icon.png";
function AfterLoginHeader() {

const [open, setOpen] = useState(false);
const dropdownRef = useRef(null);


useEffect(() => {
  const handler = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, []);

  return (
    
    <header className="hdr-sec">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          
          <div className="nav-logo">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

         
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div
            className="offcanvas offcanvas-end align-items-center"
            id="navbarSupportedContent"
          >
            <button
              className="offcanvas-header"
              data-bs-dismiss="offcanvas"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

           
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">Courses</Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Quiz
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/quiz/html">
                      HTML Quiz
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/quiz/react">
                      React Quiz
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            
            
<li
  ref={dropdownRef}
  className="position-relative user-nav"   
>
  
  <button
    type="button"
    className="user-btn rounded-circle"
    onClick={() => setOpen(!open)}
  >
    <img src={userIcon} alt="user" />
  </button>

 
  {open && (
    <div className="user-dropdown">
      <Link
        to="/dashboard"
        className="dropdown-item"
        onClick={() => setOpen(false)}
      >
        Dashboard
      </Link>

      <button
        className="dropdown-item text-danger"
        onClick={() => setOpen(false)}
      >
        Logout
      </button>
    </div>
  )}
</li>


          </div>
        </div>
      </nav>
    </header>
  
  )
}

export default AfterLoginHeader;