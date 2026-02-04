import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";





import "./style/index.css";
import "./style/about.css";
import "./index.css";   


// import "./style/course.css";
// import "./style/quiz.css";
// import "./style/modal.css";
import "./style/register.css";
import "./style/studentRegister.css";
import "./style/teacherRegistration.css";
import "./pages/dashboard/styles/dashboard_main.css";
import "./pages/dashboard/styles/course_dashboard.css";
import "./pages/dashboard/styles/assignment_dashboard.css";
import "./pages/dashboard/styles/calender_dashboard.css";
import "./pages/dashboard/styles/live-course_dashboard.css";
import "./pages/dashboard/styles/progress_dashboard.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
