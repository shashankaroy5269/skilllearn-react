

import Home from "./pages/Home";

import AboutUs from './pages/about/AboutUs';
import Contact from './pages/contact/Contact';
import CourseDetailsPage from './pages/courseDetails/CourseDetails';
import CoursePage from './pages/courses/CoursePage';
import Quiz from "./pages/quiz/quiz";
import QuizQuestion from './pages/quiz/QuizQuestion';
import QuizOverview from './pages/quiz/QuizOverview';
import QuizCompleted from './pages/quiz/QuizCompleted';
import Cart from './pages/courses/Cart';
import Payment from './pages/courses/Payment';

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
    }, 3000); 
    return () => clearTimeout(timer);
  }, [location]);
  return (<>
   {loading && <Loader />}

 
        <Routes>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

       <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/question" element={<QuizQuestion />} />
        <Route path="/quiz/overview" element={<QuizOverview />} />
        <Route path="/quiz/completed" element={<QuizCompleted />} />

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
    
  </>
          
  );
  
}

export default App;
