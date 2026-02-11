import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CommonAssets/Logo.png";

const Header = () => {
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
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>


            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="quiz">
                 Quiz
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>


            <div className="nav-btn d-flex align-items-center ms-auto">

              <Link to="/login" className="btn-primary">
                Sign In
              </Link>



              <Link to="/register" className="btn-secondary">
                Register Now
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
