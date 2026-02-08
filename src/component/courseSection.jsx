import React from "react";


import course1 from "../assets/LandingPage/Course-img1.png";
import course2 from "../assets/LandingPage/Course-img2.png";
import course3 from "../assets/LandingPage/Course-img3.png";
import course4 from "../assets/LandingPage/Course-img4.png";
import course5 from "../assets/LandingPage/Course-img5.png";
import course6 from "../assets/LandingPage/Course-img6.png";

const courses = [
  {
    img: course1,
    title: "Photography",
    count: "21 Courses",
    color: "green-card",
    card: "card1",
  },
  {
    img: course2,
    title: "Graphics Design",
    count: "58 Courses",
    color: "green-card",
    card: "card2",
  },
  {
    img: course3,
    title: "Graphics Design",
    count: "58 Courses",
    color: "green-card",
    card: "card3",
  },
  {
    img: course4,
    title: "Data Science",
    count: "28 Courses",
    color: "blue-card",
    card: "card4",
  },
  {
    img: course5,
    title: "Marketing",
    count: "35 Courses",
    color: "blue-card",
    card: "card5",
  },
  {
    img: course6,
    title: "Health & Fitness",
    count: "35 Courses",
    color: "blue-card",
    card: "card6",
  },
];

const CourseSection = () => {
  return (
    <section className="course-sec">
      <div className="container">

        {/*  HEADER  */}
        <div className="course-hdr mx-auto text-center">
          <h2 className="sec-hdr fw-semibold">
            Choose Favourite Course from Top Category
          </h2>
        </div>

        {/*  COURSE CARDS  */}
        <div className="course-cntn">
          <div className="row">

            {courses.map((course, index) => (
              <div className="col-6 col-md-4" key={index}>
                <div
                  className={`card ${course.color} ${course.card} text-center d-flex flex-column justify-content-center`}
                >
                  <div className="card-img mx-auto">
                    <img src={course.img} alt={course.title} />
                  </div>

                  <h3 className="title3 fw-bold">{course.title}</h3>
                  <p>{course.count}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseSection;
