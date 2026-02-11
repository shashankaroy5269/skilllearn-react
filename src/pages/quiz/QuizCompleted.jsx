import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './QuizCompleted.css'; // Apni CSS file ka path sahi rakhein

const QuizCompleted = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [showReview, setShowReview] = useState(false); // Review toggle ke liye

  // ✅ Correct Answers Map
  const correctAnswers = {
    1: "UseState", 2: "UseEffects", 3: "JavaScript XML", 4: "Facebook",
    5: "createRoot()", 6: "3000", 7: "useEffect", 8: "User Interface Development",
    9: "useClass", 10: "Immutable", 11: "useRef", 12: "Using props",
    13: "export", 14: "To uniquely identify elements", 15: "useContext"
  };

  useEffect(() => {
    const savedData = localStorage.getItem('quizResult');
    if (location.state && location.state.userAnswers) {
      setData(location.state);
    } else if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, [location.state]);

  if (!data) {
    return (
      <div className="text-center py-5">
        <h2>No Data Found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/quiz')}>Go to Quiz</button>
      </div>
    );
  }

  // ✅ Dynamic Calculations
  const { userAnswers, questions } = data;
  let correctCount = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === correctAnswers[q.id]) {
      correctCount++;
    }
  });

  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <main>
      <section className="quiz-c-sec">
        {/* Breadcrumb Section */}
        <div className="about-about-hdr">
          <div className="container">
            <ul className="list-unstyled d-flex mb-0">
              <li>
                <Link to="/" className="brdcrumb fw-light me-1 text-decoration-none text-white">Home {'>'}</Link>
              </li>
              <li className="brdcrumb fw-light text-white">Quiz</li>
            </ul>
          </div>
        </div>

        <div className="quiz-c-wrpr">
          <div className="container">
            <div className="quize-c-card">
              {/* Card Top Banner */}
              <div className="quize-c-cardTop text-center">
                <h1 className="title1 fw-bold text-white">Quiz Completed</h1>
                <h2 className="fw-normal text-white opacity-75">
                  {percentage >= 60 ? "Great job! Keep it up!" : "Nice try! Practice makes perfect!"}
                </h2>
              </div>

              <div className="quize-c-cardBtm">
                {/* Score Ring */}
                <div className="score-ring">
                  <div className="score-center mx-auto mb-4 d-flex align-items-center justify-content-center">
                    <h2 className="title1 h2 fw-bold mb-0 text-center">
                      {percentage}% <br/><span className="sec-hdr h6 text-muted">score</span>
                    </h2>
                  </div>
                </div>

                {/* Difficulty Badges */}
                <div className="quize-badges justify-content-center d-flex gap-2 gap-sm-4">
                  <div className="badge active-badge">
                    <h3 className="title3 text-white fw-medium mb-0">Beginner</h3>
                  </div>
                  <div className="badge">
                    <h3 className="title3 text-white fw-medium mb-0">Intermediate</h3>
                  </div>
                  <div className="badge">
                    <h3 className="title3 text-white fw-medium mb-0">Advanced</h3>
                  </div>
                </div>

                {/* Big Boxes: Stats */}
                <div className="big-boxes">
                  <div className="row">
                    <div className="col-6">
                      <div className="box big-box text-center">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 0C5.625 0 0 5.625 0 12.5C0 19.375 5.625 25 12.5 25C19.375 25 25 19.375 25 12.5C25 5.625 19.375 0 12.5 0ZM10 18.75L3.75 12.5L5.5125 10.7375L10 15.2125L19.4875 5.725L21.25 7.5L10 18.75Z" fill="#19F958" />
                        </svg>
                        <p className="fw-medium mb-1">Correct Answer</p>
                        <div className="sec-hdr m-0 fw-bold">{correctCount}/{totalQuestions}</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="box big-box text-center">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 10.8585 24.6767 9.23303 24.0485 7.71646C23.4203 6.19989 22.4996 4.8219 21.3388 3.66117C20.1781 2.50043 18.8001 1.57969 17.2835 0.951506C15.767 0.323322 14.1415 0 12.5 0ZM17.75 17.75L11.25 13.75V6.25H13.125V12.75L18.75 16.125L17.75 17.75Z" fill="#FE7E0F" />
                        </svg>
                        <p className="fw-medium mb-1">Time Taken</p>
                        <div className="sec-hdr m-0 fw-bold">1m 00s</div> 
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accuracy Stats */}
                <div className="quize-stats">
                  <div className="stat d-flex justify-content-between align-items-center">
                    <h3 className="title3 fw-medium mb-0">Average time per question</h3>
                    <h3 className="title3 fw-medium mb-0">4 seconds</h3>
                  </div>
                  <div className="stat d-flex justify-content-between align-items-center">
                    <h3 className="title3 fw-medium mb-0">Accuracy rate</h3>
                    <h3 className="title3 fw-medium mb-0">{percentage}%</h3>
                  </div>
                  <div className="stat d-flex justify-content-between align-items-center">
                    <h3 className="title3 fw-medium mb-0">Quiz Completed</h3>
                    <h3 className="title3 fw-medium mb-0">Yes</h3>
                  </div>
                </div>

                {/* Small Buttons: Actions */}
                <div className="small-boxes">
                  <div className="row g-2">
                    <div className="col-4">
                      <button 
                        className={`box small-box d-flex flex-column flex-sm-row align-items-center justify-content-center ${showReview ? 'bg-light' : ''}`}
                        onClick={() => setShowReview(!showReview)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 5.25C12.3978 5.25 12.7794 5.09196 13.0607 4.81066C13.342 4.52936 13.5 4.14782 13.5 3.75C13.5 3.35218 13.342 2.97064 13.0607 2.68934C12.7794 2.40804 12.3978 2.25 12 2.25C11.6022 2.25 11.2206 2.40804 10.9393 2.68934C10.658 2.97064 10.5 3.35218 10.5 3.75C10.5 4.14782 10.658 4.52936 10.9393 4.81066C11.2206 5.09196 11.6022 5.25 12 5.25ZM12 0C12.8645 -0.000176 13.7025 0.298338 14.3722 0.84502C15.0419 1.3917 15.5021 2.15298 15.675 3H19.5C20.5607 3 21 3.43934 21 4.5V22.5C21 23.5607 20.5607 24 19.5 24H4.5C3.43934 24 3 23.5607 3 22.5V4.5C3 3.43934 3.43934 3 4.5 3H8.325C8.4979 2.15298 8.95814 1.3917 9.62782 0.84502C10.2975 0.298338 11.1355 -0.000176 12 0ZM10.5 7.5H15.75V5.25H18.75V21.75H5.25V5.25H8.25V7.5H10.5Z" fill="#100F0F" />
                        </svg>
                        <p className="fw-medium mb-0 ms-0 ms-sm-2">{showReview ? "Hide Review" : "Review Answer"}</p>
                      </button>
                    </div>
                    <div className="col-4">
                      <button className="box small-box d-flex flex-column flex-sm-row align-items-center justify-content-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 12V9.53L10.88 2.65C11.08 2.45 11.39 2.45 11.59 2.65L13.36 4.42C13.56 4.62 13.56 4.93 13.36 5.13L6.47 12H4ZM15 12H8.5L10.5 10H15C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12Z" fill="#100F0F" />
                        </svg>
                        <p className="fw-medium mb-0 ms-0 ms-sm-2">Discussion</p>
                      </button>
                    </div>
                    <div className="col-4">
                      <button 
                        className="box small-box d-flex flex-column flex-sm-row align-items-center justify-content-center"
                        onClick={() => navigate('/quiz')}
                      >
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.5225 0.04346C12.5073 -0.13328 14.502 0.23097 16.3113 1.10054C18.1206 1.97011 19.6824 3.31517 20.8438 5.00396V2.62496C20.8438 2.32659 20.9573 2.04045 21.1595 1.82947C21.6359 1.49996 21.9219 1.49996 22.2078 1.49996V8.99996H16.8906C16.1283 8.67046 15.8125 7.87496 15.8125 7.87496H19.3732C16.9779 3.87534 11.7959 2.07087 9.99419 2.37786C5.17305 4.82573 2.43513 9.63596 2.43513 9.63596C1.12387 10.4703 0.31744 9.5321 0.31744 9.5321C0.92509 6.6636 4.04339 2.86578 10.5225 0.04346ZM5.635 22.3215C10.696 23.9692 15.9275 23.0729 20.2178 19.8229C22.655 14.91 21.8671 13.5615 21.8671 13.5615C20.5634 14.364 17.8253 19.1731 13.0049 21.6204C7.68877 20.9003 3.62681 17.25 3.62681 17.25H6.10938C6.87172 16.9205 7.1875 16.125 7.1875 16.125H0V21.375C0.79218 22.5 1.07812 22.5 1.07812 22.5C2.15625 21.375 3.08312 20.3434 5.635 22.3215Z" fill="#100F0F" />
                        </svg>
                        <p className="fw-medium mb-0 ms-0 ms-sm-2">Try Again</p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Review Section (Added this for connectivity) */}
                {showReview && (
                  <div className="review-list mt-4 p-3 border rounded bg-light">
                    <h4 className="mb-3">Answers Review:</h4>
                    {questions.map((q, idx) => (
                      <div key={q.id} className="mb-2 p-2 border-bottom">
                        <p className="mb-1 fw-bold">{idx + 1}. {q.question}</p>
                        <p className={`mb-0 ${userAnswers[q.id] === correctAnswers[q.id] ? 'text-success' : 'text-danger'}`}>
                          Your Answer: {userAnswers[q.id] || "Skipped"}
                        </p>
                        {userAnswers[q.id] !== correctAnswers[q.id] && (
                          <p className="text-muted small">Correct: {correctAnswers[q.id]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievements Unlocked */}
                <div className="achive-box mt-5">
                  <div className="achive-hdr d-flex align-items-center mb-3">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.875 0.8125C4.875 0.597 4.9606 0.390 5.1129 0.237C5.472 0 5.6875 0 5.6875 0H23.5625C24.375 0 24.375 0.812 24.375 0.812V1.625H28.4375C29.25 1.625 29.25 2.437 29.25 2.437V7.312C29.25 11.375 25.1875 11.375 25.1875 11.375H23.8201C20.9004 15.586 16.25 17.740 16.25 17.740V22.75H21.125V29.25H8.125V22.75H13V17.740C8.3496 15.586 5.4299 11.375 5.4299 11.375H4.0625C0 11.375 0 7.312 0 7.312V2.437C0 1.625 0.8125 1.625 0.8125 1.625H4.875V0.8125ZM24.375 8.125V3.25H27.625V7.312C27.625 9.75 25.1875 9.75 25.1875 9.75H24.375V8.125ZM4.875 3.25H1.625V7.312C1.625 9.75 4.0625 9.75 4.0625 9.75H4.875V3.25Z" fill="#FE7E0F" />
                    </svg>
                    <h3 className="title3 mb-0 ms-2">Achievements Unlocked</h3>
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <div className="box mid-box d-flex align-items-center p-3">
                        <span className="flex-shrink-0" style={{ backgroundColor: '#edb007', width: '24px', height: '24px', borderRadius: '50%' }}></span>
                        <h3 className="title3 mb-0 ms-3">Completed in record time</h3>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="box mid-box d-flex align-items-center p-3">
                        <span className="flex-shrink-0 green-circle" style={{ backgroundColor: '#19F958', width: '24px', height: '24px', borderRadius: '50%' }}></span>
                        <h3 className="title3 mb-0 ms-3">React Specialist Badge</h3>
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

export default QuizCompleted;