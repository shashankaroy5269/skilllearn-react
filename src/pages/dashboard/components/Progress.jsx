import React, { useState, useEffect } from 'react';

const Progress = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://sdlc3.onrender.com/api/dashboard/progress')
      .then((res) => res.json())
      .then((json) => {
        setData(json.data || json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const clickClose = () => console.log("Sidebar Closed");
  const hamberger = () => console.log("Menu Toggle");

  if (loading) return <div className="loading-state">Loading Full Dashboard...</div>;

  return (
    <main>
      <section className="dashboard">
        <div className="container">
          <div className="row align-items-stretch">
            {/* --- SIDEBAR --- */}
            <div className="col-2">
              <aside className="left-sideNav bg-white z-3">
                <button className="close-btn" onClick={clickClose}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                  </svg>
                </button>
                <nav className="navBar">
                  <div className="brand-logo">
                    <img src="/assets/dashboard-assets/logo-icon.png" alt="Logo" />
                  </div>
                  <div className="dashboard-navbar">
                    <h2 className="title2 text-uppercase">Student Dashboard</h2>
                    <div className="dashboardNav-list">
                      <h3 className="title3">MAIN MENU</h3>
                      <ul className="nav-item">
                        <li className="item-list">
                          <a href="main_dashboard.html" className="list-link">
                            <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z" /></svg></span>
                            <span className="titles">Dashboard</span>
                          </a>
                        </li>
                        <li className="item-list">
                          <a href="course_dashboard.html" className="list-link">
                            <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z" /></svg></span>
                            <span className="titles">My Course</span>
                          </a>
                        </li>
                        <li className="item-list">
                          <a href="/quiz.html" className="list-link">
                            <span className="icons">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g stroke="#292929" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                  <path fill="#292929" fillOpacity="0" d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z" />
                                </g>
                              </svg>
                            </span>
                            <span className="titles">Quiz</span>
                          </a>
                        </li>
                        <li className="item-list">
                          <a href="progress_dashboard.html" className="list-link active">
                            <span className="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 15q.425 0 .738-.312t.312-.738t-.312-.737T14 12.9t-.737.313t-.313.737t.313.738T14 15M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z" /></svg></span>
                            <span className="titles">Progress</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navBar-end">
                    <button className="logout-btn">
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" /></svg></span>
                      <span className="titles">Logout</span>
                    </button>
                  </div>
                </nav>
              </aside>
            </div>

            {/* --- MAIN HEADER & CONTENT --- */}
            <div className="col-10">
              <div className="dashboard-top bg-white d-flex align-items-center">
                <div className="dashboard-hdr d-flex align-items-center justify-content-between w-100">
                  <div className="hdr-cntn">
                    <h1 className="title1">Progress</h1>
                    <ul className="dahsboard-brdcrmb d-flex">
                      <li><a href="main_dashboard.html" className="fw-light">Dashboard /</a></li>
                      <li className="fw-light ms-1">Progress</li>
                    </ul>
                  </div>
                  <ul className="hdr-menu d-flex align-items-center">
                    <li className="button-list">
                      <button className="menu-btn" onClick={hamberger}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18Z" /></svg>
                      </button>
                    </li>
                    <li className="button-list">
                      <label className="switch">
                        <input type="checkbox" className="input" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li className="button-list">
                      <button className="bell-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                          <g fill="none" stroke="#292929" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M12 3v2" /><path d="M12 5c-3.31 0-6 2.69-6 6l0 6c-1 0-2 1-2 2h8" />
                          </g>
                        </svg>
                      </button>
                    </li>
                    <li className="button-list">
                      <button className="user-btn rounded-circle">
                        <img src="/assets/dashboard-assets/user-icon.png" alt="user" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col60">
                  <div className="row">
                    {/* Weekly Goal Box */}
                    <div className="col-12">
                      <div className="pro-box goal-box">
                        <div className="pro-box-top">
                          <h2 className="title3">Weekly Study Goal <span>{data?.weeklyGoal?.hours || 8} / 10 hrs</span></h2>
                        </div>
                        <div className="progress" role="progressbar">
                          <div className="progress-bar bg-success" style={{width: `${data?.weeklyGoal?.percentage || 63}%`}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Courses Box */}
                    <div className="col-12">
                      <div className="pro-box course-box">
                        <div className="pro-box-top"><h2 className="title3">My Current Courses</h2></div>
                        <div className="pro-box-btm row">
                          {data?.courses?.map((course, i) => (
                            <div className="col-4" key={i}>
                              <div className="pro-course-card">
                                <div className="pro-course-img">
                                  <img src={course.image || `/assets/dashboard-assets/progress/pro-course-img${i+1}.png`} alt="" />
                                </div>
                                <h3 className="title2">{course.name}</h3>
                                <div className="course-pro-amount fw-semibold">{course.percentage}% <span>Completed</span></div>
                                <div className="progress"><div className="progress-bar bg-success" style={{width: `${course.percentage}%`}}></div></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Skill Progress Box */}
                    <div className="col-12">
                      <div className="pro-box skill-box">
                        <div className="pro-box-top"><h2 className="title3">Skill Progress</h2></div>
                        {data?.skills?.map((skill, i) => (
                          <div className="skill-box-wrpr d-flex align-items-center justify-content-between" key={i}>
                            <div className="box-wrpr-left">
                              <h2 className="title3 fw-medium text-uppercase">{skill.name}</h2>
                              <div className="progress"><div className="progress-bar bg-success" style={{width: `${skill.percentage}%`}}></div></div>
                            </div>
                            <div className="box-wrpr-right text-center">
                              <div className="course-pro-amount fw-semibold">{skill.percentage}% <span className="fw-medium">Completed</span></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- RIGHT COLUMN (col40) --- */}
                <div className="col40">
                  <div className="pro-box learning-box">
                    <div className="pro-box-top"><h2 className="title3">Overall Progress</h2></div>
                    <div className="learning-box-mid text-center">
                      <div className="progress-ring">
                        <div className="progress-inner">
                          <h2 className="learning-percent">75%</h2>
                          <span></span>
                          <p>Average Score</p>
                        </div>
                      </div>
                    </div>
                    <div className="learning-box-end">
                      <h3 className="sec-hdr">Detailed Analytics</h3>
                      <div className="progress-bar-wrpr">
                        <p className="title2">Theoretical Knowledge</p>
                        <div className="progress"><div className="progress-bar bg-info" style={{width: '80%'}}></div></div>
                      </div>
                      <div className="progress-bar-wrpr">
                        <p className="title2">Practical Application</p>
                        <div className="progress"><div className="progress-bar bg-warning" style={{width: '65%'}}></div></div>
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
  );
};

export default Progress;