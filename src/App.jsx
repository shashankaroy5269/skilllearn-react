import { Routes, Route } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import Loader from "./component/loader/loader";
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
// import Courses from "./pages/dashboard/components/Course";
import MainLayout from "./layout/mainLayout";
import DashboardLayout from "./layout/dashboardLayout";
import Progress from "./pages/dashboard/components/Progress";
import CourseSection from "./component/courseSection";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // loader visible for 2 sec
  // }, []);
  return (<>
  
  {/* {loading && <Loader />}
          {!loading && ( */}
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
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/progress" element={<Progress />} />
      </Route>
    </Routes>
    {/* )} */}
  </>
          
  );
  
}

export default App;
