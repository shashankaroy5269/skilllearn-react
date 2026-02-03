import React, { useState } from "react";

import "./QuizOverview.css";

// Saare assets ko import karein
import quizBg from "../../assets/QuizPage/quizBg10.png";
import mentor1 from "../../assets/QuizOverview/mentor1.png";
import mentor2 from '../../assets/QuizOverview/mentor2.png';
import mentor3 from '../../assets/QuizOverview/mentor3.png';
import mentor4 from '../../assets/QuizOverview/mentor4.png';
import topic1 from "../../assets/QuizOverview/topic1.png";
import topic2 from "../../assets/QuizOverview/topic2.png";
import processImg1 from '../../assets/QuizOverview/process1.png';
import processImg2 from '../../assets/QuizOverview/process2.jpg';
import processImg3 from '../../assets/QuizOverview/process3.png';
import { Link } from "react-router-dom";

const QuizOverview = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const results = [
        { id: 1, name: "David Calvin", time: "1 Month ago", img: mentor1 },
        { id: 2, name: "David Calvin", time: "1 Month ago", img: mentor2 },
        { id: 3, name: "David Calvin", time: "1 Month ago", img: mentor3 },
        { id: 4, name: "David Calvin", time: "1 Month ago", img: mentor4 },
    ];
    const steps = [
        {
            id: 1,
            title: "Take Quizzes",
            desc: "Challenge yourself with quizzes of varying difficulty levels and formats.",
            img: processImg1,
            className: "process1"
        },
        {
            id: 2,
            title: "Browse Categories",
            desc: "Explore our diverse range of quiz categories to find topics that interest you.",
            img: processImg2,
            className: "process2"
        },
        {
            id: 3,
            title: "Earn Rewards",
            desc: "Collect points, badges, and climb the leaderboards as you complete quizzes.",
            img: processImg3,
            className: "process3"
        }
    ];

  return (
    <>
      
      <main className="main-content">
        {/* Banner Section */}
        <section
          className="quiz-sec"
          style={{ backgroundImage: `url(${quizBg})` }}
        >
          <div className="quizBnr-wrpr">
            <div className="container">
              <div className="quiz-cntn">
                <h1 className="quiz-title1">Quiz of the Day</h1>
                <p>
                  Play our daily 10-question general SkillLearn quiz. Today’s
                  quiz is Quiz of the Day no. 86.
                </p>
                <div className="quiz-btnBox d-flex">
                  <Link
                    to="/quiz/question"
                    className="btn-secondary section-btn text-capitalize"
                  >
                    Play Now
                    <span className="ms-2 d-flex align-items-center justify-content-center">
                      <svg
                        width="13"
                        height="17"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                  
                </div>
              </div>
              <div className="breadcrumb-box ">
    {/* Style attribute ko React object format mein likha gaya hai */}
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb flex-nowrap text-nowrap">
            {/* href ki jagah 'to' ka use karein */}
            <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item">
                <Link to="/quiz" className="text-decoration-none">Quiz</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                Quiz Overview
            </li>
        </ol>
    </nav>
</div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="overview-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-9">
                <div className="switch-quiz d-flex align-items-center justify-content-between">
                  {["Overview", "Leaderboard", "Reviews"].map((tab) => (
                    <button
                      key={tab}
                      className={`switch-btn ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab === "Overview" && (
                  <div className="overview-tab active">
                    <h2 className="title2">Overview</h2>
                    <p>
                      Test your knowledge of Space Exploration with this
                      comprehensive trivia quiz.
                    </p>
                    <h2 className="title2">Requirements</h2>
                    <p>
                      Basic knowledge of Marvel movies. No specific preparation
                      needed.
                    </p>
                    <h2 className="title2">Tags</h2>
                    <div className="tags-bar">
                      <button className="topic-tags active">Marvel</button>
                      <button className="topic-tags">Web Design</button>
                      <button className="topic-tags">Graphics</button>
                      <button className="topic-tags">AI</button>
                      <button className="topic-tags">Coding</button>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-6 mb-3">
                        <div
                          className="concept-topic topic1"
                          style={{ backgroundImage: `url(${topic1})` }}
                        >
                          <h3 className="title3">
                            Java Script Advanced Concepts
                          </h3>
                          <a
                            href="quiz-qstn.html"
                            className="btn-secondary section-btn text-capitalize"
                          >
                            Play Now
                            <span className="d-flex align-items-center justify-content-center">
                              <svg
                                width="13"
                                height="17"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div
                          className="concept-topic topic2"
                          style={{ backgroundImage: `url(${topic2})` }}
                        >
                          <h3 className="title3">
                            CSS Flex Box & Grid Mastery
                          </h3>
                          <a
                            href="quiz-qstn.html"
                            className="btn-secondary section-btn text-capitalize"
                          >
                            Play Now
                            <span className="d-flex align-items-center justify-content-center">
                              <svg
                                width="13"
                                height="17"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Spot Box */}
              <div className="col-12 col-xl-3">
                <div className="spot-box">
                  <div className="spot-hdr d-flex justify-content-between align-items-center">
                    <h3 className="title3">Spot Fill</h3>
                    <p>09/10</p>
                  </div>

                  {/* Progress Bar Container */}
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Quiz progress"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "90%" }}
                    ></div>
                  </div>

                  <p className="text-danger mt-2">
                    Almost Full only 01 spots left
                  </p>

                  <div className="spotCategory-box">
                    <div className="spot-category">
                      <h4 className="title4">Category</h4>
                      <p>Web Development</p>
                    </div>
                    <div className="spot-category">
                      <h4 className="title4">Question</h4>
                      <p>08</p>
                    </div>
                    <div className="spot-category">
                      <h4 className="title4">Time Limit</h4>
                      <p>20 Minute</p>
                    </div>
                    <div className="spot-category">
                      <h4 className="title4">Difficulty</h4>
                      <p>Medium</p>
                    </div>
                  </div>

                  <div className="quiz-mentor">
                    <div className="mentor-top d-flex align-items-center gap-2">
                      <div className="mentor-img">
                        <img src={mentor1} alt="Mentor" className="img-fluid" />
                      </div>
                      <div className="mentor-details">
                        <h4 className="title4">David Calvin</h4>
                        <p className="mb-0">Expert quiz creator</p>
                      </div>
                    </div>
                    <div className="mentor-bottom d-flex justify-content-between align-items-center mt-2">
                      <p className="mb-0">
                        Quizzes: <span>42</span>
                      </p>
                      <p className="mb-0">
                        Updated: <span>2025-10-15</span>
                      </p>
                    </div>
                  </div>

                  {/* Play Now Button Centered Horizontally */}
                  <div className="quiz-btnBox d-flex justify-content-center">
                    <Link
                      to="/QuizQuestion"
                      className="btn-secondary section-btn text-capitalize text-decoration-none d-flex align-items-center justify-content-center w-100"
                    >
                      Play Now
                      <span className="d-flex align-items-center justify-content-center">
                        <svg
                          width="13"
                          height="17"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>

                  {/* Overview Icons */}
                  <div className="overview-iconBox text-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"
                          stroke-width="0.3"
                          stroke="#fff"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22"
                          stroke-width="0.3"
                          stroke="#fff"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="#fff"
                          d="M1021.06 839.968L833.798 493.664c19.104-43.36 29.792-91.28 29.792-141.696C863.59 157.664 706.07.16 511.782.16c-194.336 0-351.84 157.52-351.84 351.808c0 51.632 11.216 100.624 31.184 144.784L3.03 839.808c-6.065 11.024-5.057 24.624 2.527 34.688c7.6 10.033 20.432 14.752 32.687 11.873l160.624-36.848l54.976 153.12c4.288 11.904 15.152 20.16 27.744 21.088c.817.064 1.6.096 2.368.096a32 32 0 0 0 28.192-16.88L475.844 701.97a355 355 0 0 0 35.92 1.808c11.12 0 22.095-.576 32.943-1.6l167.248 305.008a31.98 31.98 0 0 0 30.56 16.527c12.56-1.008 23.376-9.248 27.631-21.088l54.976-153.12l160.624 36.848c12.32 2.975 25.024-1.809 32.624-11.809c7.632-9.984 8.656-23.52 2.688-34.576zm-731.282 73.376L249.52 801.183c-5.504-15.248-21.471-24.128-37.28-20.368l-118.8 27.248l135.41-246.976c44.592 60.24 107.952 105.68 181.44 127.793zm-65.553-561.377c0-158.544 129.009-287.536 287.568-287.536c158.544 0 287.536 128.992 287.536 287.536S670.337 639.535 511.793 639.535c-158.576 0-287.568-129.024-287.568-287.568m587.52 428.847c-15.872-3.744-31.776 5.12-37.28 20.367l-40.529 112.976l-123.152-224.56c75.44-22.096 140.337-68.735 185.505-130.735L931.137 808.19z"
                          stroke-width="25.5"
                          stroke="#fff"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="result-sec">
            <div className="container">
                {/* Header Section */}
                <div className="result-hdr d-flex justify-content-between align-items-center">
                    <h3 className="title3">Live Result</h3>
                    <Link to="/all-results" className="btn-secondary section-btn text-capitalize text-decoration-none d-flex align-items-center">
                        View All
                        <span className="ms-2 d-flex align-items-center justify-content-center">
                            <svg width="13" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    fillRule="evenodd" 
                                    clipRule="evenodd" 
                                    d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z" 
                                    fill="black" 
                                />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Results Cards Grid */}
                <div className="result-cardGrid mt-4">
                    {results.map((item) => (
                        <div key={item.id} className="result-card shadow-sm">
                            <div className="mentor-top d-flex align-items-center gap-2 mb-3">
                                <div className="mentor-img">
                                    <img src={item.img} alt={item.name} className="rounded-circle" style={{width: '40px', height: '40px', objectFit: 'cover'}} />
                                </div>
                                <div className="mentor-details">
                                    <h4 className="title4 mb-0">{item.name}</h4>
                                    <p className="small text-muted mb-0">{item.time}</p>
                                </div>
                            </div>
                            <div className="mentor-bottom d-flex align-items-top gap-3">
                                <span className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 14 14">
                                        <path 
                                            fill="#08119B" 
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.463 9.692C13.463 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-3.231 1.616-4.868 4.847-6.505L4.24 1.077A.7.7 0 0 1 4.843 0H9.41a.7.7 0 0 1 .603 1.023L8.616 3.208c3.23 1.615 4.847 3.252 4.847 6.484M7.625 4.887a.625.625 0 1 0-1.25 0v.627a1.74 1.74 0 0 0-.298 3.44l1.473.322a.625.625 0 0 1-.133 1.236h-.834a.625.625 0 0 1-.59-.416a.625.625 0 1 0-1.178.416a1.88 1.88 0 0 0 1.56 1.239v.636a.625.625 0 1 0 1.25 0v-.636a1.876 1.876 0 0 0 .192-3.696l-1.473-.322a.49.49 0 0 1 .105-.97h.968a.62.62 0 0 1 .59.416a.625.625 0 0 0 1.178-.417a1.87 1.87 0 0 0-1.56-1.238z"
                                        />
                                    </svg>
                                </span>
                                <span className="small">
                                    Won $5.75 Playing from “Science Trivia” by answering questions correctly and using knowledge to earn real money.
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="process-sec">
            <div className="container">
                {/* Header Text */}
                <div className="process-hdrCntn d-flex flex-column align-items-center text-center mb-4">
                    <div className="process-box mb-3">
                        Simple Process
                    </div>
                    <h2 className="title2">How It Works</h2>
                    <p>
                        Getting started with our quiz platform is easy. Follow these simple steps to begin your quiz journey.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="process-cardGrid">
                    {steps.map((step) => (
                        <div 
                            key={step.id} 
                            className={`process-card ${step.className}`}
                            style={{ backgroundImage: `url(${step.img})` }}
                        >
                            <div className="processCard-cntn">
                                <h4 className="title4">{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="process-bottomCntn text-center mt-5">
                    <p>
                        Ready to start your quiz journey? Browse categories, find your interests, and begin challenging yourself today!
                    </p>
                    <div className="process-box">
                        2500 + online Now
                    </div>
                </div>
            </div>
        </section>
      </main>
      
    </>
  );
};

export default QuizOverview;
