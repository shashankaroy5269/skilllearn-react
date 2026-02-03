import React, { useState, useEffect } from "react";

import "./Course.css";
import studentsImg from "../../assets/CoursePage/students.png";
import roundPic from "../../assets/CoursePage/round-pic.png";
import bookImg from "../../assets/CoursePage/book.png";
import webImg from "../../assets/CoursePage/web.png";
import historyImg from "../../assets/CoursePage/history.png";
import sqlImg from "../../assets/CoursePage/sql.png";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [level, setLevel] = useState("ALL");
  const [cost, setCost] = useState("ALL");

  // API Integration
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://sdlc3.onrender.com/api/courses");
        const data = await response.json();

        // 👇 IMPORTANT FIX
        setCourses(Array.isArray(data.docs) ? data.docs : []);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  // Ye logic filter karega data ko cards ke liye
  const filteredCourses = courses.filter((course) => {
    // Category Filter: API ki category ID ya string match karein
    const matchCategory =
      category === "ALL" || course.category?.toUpperCase() === category;

    // Search Filter
    const matchSearch = course.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    // Cost Filter
    const matchCost =
      cost === "ALL" ? true : cost === "FREE" ? course.isFree : !course.isFree;

    // Level Filter
    const matchLevel = level === "ALL" || course.level?.toUpperCase() === level;

    return matchCategory && matchSearch && matchCost && matchLevel;
  });
  return (
    <>
      
      <main>
        <section className="course-cntn-sec">
          <div className="about-about-hdr">
            <div className="container">
              <ul className="list-unstyled d-flex">
                <li>
                  <a href="/" className="brdcrumb fw-light me-1">
                    Home &gt;
                  </a>
                </li>
                <li className="brdcrumb fw-light">Courses</li>
              </ul>
            </div>
          </div>

          <div className="about-about-wrpr">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="course-btns d-flex align-items-center">
                    <button className="course-category active1">All</button>
                    <button className="course-category">Popular</button>
                    <button className="course-category">Best Seller</button>
                    <button className="course-category">Free</button>
                  </div>

                  <div className="course-result d-flex align-items-center">
                    <p>
                      Showing 1-{courses.length} of {courses.length} results
                    </p>
                    <select className="course-dropdown ms-auto">
                      <option value="">Sort By</option>
                      <option value="latest">Business</option>
                      <option value="popular">Arts</option>
                      <option value="rating">Technical</option>
                      <option value="price_low">History</option>
                      <option value="price_high">Photography</option>
                    </select>
                    <button className="filter-toggler mx-3">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z"
                          stroke="#212343"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="course-details">
                    <div className="row">
                      {loading ? (
                        <div className="col-12 py-5 text-center">
                          <h3>Loading Courses...</h3>
                        </div>
                      ) : (
                        filteredCourses.map((course) => (
                          <div
                            className="col-12 col-sm-6 mb-4" 
                            key={course._id}
                          >
                            <div className="course-card">
                              {/* Top Image Section */}
                              <div className="card-pic position-relative">
                                <img
                                  src={
                                    course.thumbnail ||
                                    "./assets/CoursePage/1st-card.png"
                                  }
                                  alt={course.title}
                                  className="img-fluid"
                                />
                                <span className="course-badge1 position-absolute">
                                  01 Jan To 15 Mar
                                </span>
                                <span className="course-badge2 position-absolute">
                                  <i className="fas fa-graduation-cap"></i>{" "}
                                  {course.totalLessons} Lessons
                                </span>
                                <span className="course-badge3 position-absolute">
                                  <i className="fas fa-video"></i>{" "}
                                  {course.totalDuration}
                                </span>

                                {course.isFree && (
                                  <div className="free position-absolute">
                                    Free
                                  </div>
                                )}
                              </div>

                              {/* Content Section */}
                              <div className="card-cntn">
                                <div className="course-d-review d-flex align-items-center">
                                  <ul className="stars d-flex p-0 m-0">
                                    {[...Array(5)].map((_, i) => (
                                      <li key={i}>
                                        <svg
                                          width="17"
                                          height="16"
                                          fill={
                                            i <
                                            Math.floor(course.avgRating || 4)
                                              ? "#FE7E0F"
                                              : "#ccc"
                                          }
                                        >
                                          <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
                                        </svg>
                                      </li>
                                    ))}
                                  </ul>
                                  <span className="fw-light ms-2">
                                    ({course.totalRatings || 0} Reviews)
                                  </span>
                                </div>

                                <h2 className="title4">{course.title}</h2>

                                <div className="lessons-students d-flex align-items-center mb-2">
                                  <div className="lessons d-flex align-items-center me-3">
                                    <img
                                      src={bookImg}
                                      alt="book"
                                      style={{ width: "18px" }}
                                    />
                                    <span>{course.totalLessons} Lessons</span>
                                  </div>
                                  <div className="students d-flex align-items-center">
                                    <img
                                      src={studentsImg}
                                      alt="students"
                                      style={{ width: "18px" }}
                                    />
                                    <span>{course.level}</span>
                                  </div>
                                </div>

                                <p className="course-desc">
                                  {course.shortDescription?.substring(0, 70)}...
                                </p>

                                <div className="course-dev d-flex align-items-center mb-3">
                                  <img
                                    src={roundPic}
                                    alt="teacher"
                                    className="rounded-circle me-2"
                                    style={{ width: "30px", height: "30px" }}
                                  />
                                  <span>
                                    By{" "}
                                    <strong>
                                      {course.teacher?.firstName}{" "}
                                      {course.teacher?.lastName}
                                    </strong>
                                  </span>
                                </div>

                                <div className="price-cart d-flex align-items-center">
                                  <div className="price d-flex align-items-center">
                                    <p className="m-0 fw-bold">
                                      ${(course.price / 100).toFixed(2)}
                                    </p>
                                    {!course.isFree && (
                                      <del className="ms-2 text-muted">
                                        ${(course.price / 50).toFixed(2)}
                                      </del>
                                    )}
                                  </div>
                                  <button className="cart ms-auto d-flex align-items-center">
                                    <span>Add to cart</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="page-btns d-flex align-items-center justify-content-between">
                      <button className="course-category">PREV</button>

                      <button className="course-category">NEXT</button>
                    </div>
                  </div>
                </div>

                {/* Sidebar Section */}
                <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                  <div className="course-filter">
                    <div className="search-box">
                      <h2 className="title2">Find Your Course</h2>
                      <div className="search-bar d-flex align-items-center">
                        <input
  type="text"
  placeholder="Search Your Course"
  value={search} // 👈 Isse input state ke saath sync rahega
  onChange={(e) => setSearch(e.target.value)}
/>
                        <button className="search-btn ms-auto">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M17 17L21 21"
                              stroke="#141B34"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                              stroke="#141B34"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="category-box mt-4">
                      <h2 className="title2">Category</h2>
                      <ul className="list-unstyled">
                        {[
                          "ALL",
                          "EDUCATION",
                          "TECHNOLOGY",
                          "BUSINESS",
                          "DEVELOPMENT",
                          "ENGINEERING",
                          "HISTORY",
                          "PHOTOGRAPHY",
                        ].map((cat) => (
                          <li key={cat} className="categories mb-2">
                            <button
                              onClick={() => setCategory(cat)} //  Ye state update karega aur card change ho jayenge
                              className={
                                category === cat
                                  ? "active-catagory w-100 text-start"
                                  : "w-100 text-start"
                              }
                            >
                              {cat}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="cost-box mt-4">
                      <h2 className="title2">Cost</h2>
                      <ul className="list-unstyled">
                        {["ALL", "FREE", "PAID"].map((c) => (
                          <li key={c} className="categories mb-2">
                            <button
                              onClick={() => setCost(c)} //  State update
                              className={
                                cost === c
                                  ? "active-catagory w-100 text-start"
                                  : "w-100 text-start"
                              }
                            >
                              {c}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="level-box mt-4">
                      <h2 className="title2">Level</h2>
                      <ul className="list-unstyled">
                        {["ALL", "BEGINNER", "INTERMEDIATE", "ADVANCE"].map(
                          (l) => (
                            <li key={l} className="categories mb-2">
                              <button
                                onClick={() => setLevel(l)} //  State update
                                className={
                                  level === l
                                    ? "active-catagory w-100 text-start"
                                    : "w-100 text-start"
                                }
                              >
                                {l}
                              </button>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="course-box mt-4">
                      <h2 className="title2">Latest Courses</h2>
                      <div className="latest-crse mt-3">
                        {[
                          { title: "Advance Web Development", img: webImg },
                          {
                            title: "Learn About World History",
                            img: historyImg,
                          },
                          { title: "SQL Beginner To Advanced", img: sqlImg },
                        ].map((lc, idx) => (
                          <div
                            key={idx}
                            className="course d-flex align-items-center mb-3"
                          >
                            <a href="#">
                              <img
                                src={lc.img}
                                alt=""
                                style={{
                                  width: "70px",
                                  height: "60px",
                                  objectFit: "cover",
                                }}
                              />
                            </a>
                            <div className="latest-details ms-3">
                              <a href="#">
                                <h3
                                  className="mb-1"
                                  style={{ fontSize: "14px" }}
                                >
                                  {lc.title}
                                </h3>
                              </a>
                              <p className="m-0" style={{ fontSize: "12px" }}>
                                February 10, 2019
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="tag-box mt-4">
                      <h2 className="title2">Popular Tags</h2>
                      <div className="tag-cntn mt-2">
                        <div className="d-flex flex-wrap">
                          {[
                            "#education",
                            "#edtech",
                            "#ed",
                            "#digitaleducation",
                            "#onlinecourse",
                            "#skilldevelopment",
                            "#language",
                          ].map((tag) => (
                            <div key={tag} className="tags me-2 mb-2">
                              <a
                                href="#"
                                className="p-1 px-2 border d-inline-block"
                                style={{ fontSize: "12px" }}
                              >
                                {tag}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
};

export default CoursePage;
