import React from 'react'
import CoursePage from '../component/courses/CoursePage';
import CourseDetailsPage from '../component/coursesDetails/CourseDetailsPage';
import Cart from '../component/courses/Cart'
import Payment from '../component/courses/Payment'
function CourseSection() {
    return (
        <>

            <CoursePage />
            <CourseDetailsPage />
            <Cart />
            <Payment />



        </>
    )
}

export default CourseSection;