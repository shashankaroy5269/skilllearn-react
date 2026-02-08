

import Home from "./pages/Home";
// import QuizSection from "./pages/Quiz";
import Contact from "./pages/contact";
import AboutSection from "./pages/AboutUs";
import Register from "./pages/auth/register/register";
import StudentRegisterModal from "./pages/auth/register/StudentRegisterModal";
import TeacherRegisterModal from "./pages/auth/register/teacherRegisterModal";
import LoginPage from "./pages/auth/login";

import DashboardMain from "./pages/dashboard/components/dashboardmain";
import AssignmentDashboard from "./pages/dashboard/components/Assignment";
import Calendar from "./pages/dashboard/components/Calendar";
import DashboardCourses from "./pages/dashboard/components/Course";
import MainLayout from "./layout/mainLayout";
import DashboardLayout from "./layout/dashboardLayout";
import Progress from "./pages/dashboard/components/Progress";
import CourseSection from "./component/courseSection";
import LiveClass from "./pages/dashboard/components/LiveClass";
import AfterLoginHomePage from "./component/afterLoginHomePage/afterLoginHomePage";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./component/loader/loader";
function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // loader time (change if needed)

    return () => clearTimeout(timer);
  }, [location]);
  return (<>
   {loading && <Loader />}

 
        <Routes>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutSection />} />
        <Route path="/courseSection" element={<CourseSection />} />

        {/* <Route path="/quiz" element={<QuizSection />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-register" element={<StudentRegisterModal />} />
        <Route path="/teacher-register" element={<TeacherRegisterModal />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/assignment" element={<AssignmentDashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/dashboardCourses" element={<DashboardCourses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/liveClass" element={<LiveClass />} />
        <Route path="/afterlogin" element={<AfterLoginHomePage />} />
      </Route>
    </Routes>
    {/* )} */}
  </>
          
  );
  
}

export default App;
