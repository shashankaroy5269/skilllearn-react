import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';

 import './quiz.css';
 import quizBg from '../../assets/QuizPage/quizBg9.png'; 
import categoryImg from '../../assets/QuizPage/category1.png';
import progress from'../../assets/QuizPage/progress-bg.png';
import step1 from '../../assets/QuizPage/step1.png';
import cmplt1 from '../../assets/QuizPage/cmplt1.png';
import score1 from '../../assets/QuizPage/score1.png';
import step2 from '../../assets/QuizPage/step2.png';
import cmplt2 from '../../assets/QuizPage/cmplt2.png';
import score2 from '../../assets/QuizPage/score2.png';

const Quiz = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const achievements = [
    { id: 1, title: "First Step", desc: "Complete your first quiz", img: step1, bg: "blue-bg" },
    { id: 2, title: "Quick Learner", desc: "Complete 3 quizzes", img: cmplt1, bg: "blue-bg" },
    { id: 3, title: "Perfect Score", desc: "Score 100% on any quiz", img: score1, bg: "blue-bg" },
    { id: 4, title: "First Step", desc: "Complete your first quiz", img: step2, bg: "grey-bg" },
    { id: 5, title: "Quick Learner", desc: "Complete 3 quizzes", img: cmplt2, bg: "grey-bg" },
    { id: 6, title: "Perfect Score", desc: "Score 100% on any quiz", img: score2, bg: "grey-bg" },
  ];

  return (
    <main>
      {/* Banner Section */}
      <section className="quiz-sec" style={{ backgroundImage: `url(${quizBg})` }}>
       
        <div className="quizBnr-wrpr">
          <div className="container">
            <div className="quiz-cntn">
              <h1 className="quiz-title1">Quiz of the Day</h1>
              <p>
                Play our daily 10- question general SkillLearn quiz. Today’s
                quiz is Quiz of the Day no. 86.
              </p>
              <div className="quiz-btnBox d-flex">
                <Link to="/quiz/question" className="btn-secondary section-btn text-capitalize">
                  Play Now
                  <span className="d-flex align-items-center justify-content-center">
                    <svg width="13" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path fillRule="evenodd" clipRule="evenodd" d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z" fill="black" />
                    </svg>
                  </span>
                </Link>
                <Link to="/quiz/overview" className="btn-secondary btn-tertiary section-btn bg-white text-capitalize">
                  How to Play
                  <span className="d-flex align-items-center justify-content-center">
                    <svg width="13" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clip-rule="evenodd" d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z" fill="black" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="breadcrumb-box">
              <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Quiz</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="popular-sec">
        <div className="container">
          <div className="row">
            {["Today’s Most Popular Quiz", "New Game Sprint Quiz", "Quiz of the Day!"].map((title, index) => (
              <div key={index} className={`col-12 col-sm-6 col-lg-4 ${index === 2 ? 'm-auto' : ''}`}>
                <div className="quiz-card">
                  <div className="card-cntn">
                    <h2>{title}</h2>
                    <p>Name the 20 Most Spoken Language</p>
                    <Link to="/quiz/question" className="btn-secondary section-btn text-capitalize">
                      Play Now
                      <span className="d-flex align-items-center justify-content-center">
                        <svg width="13" height="17" viewBox="0 0 13 13" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z" fill="black" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Categories Section */}
      <section className="category-sec">
        <div className="container">
          <div className="category-cntn d-flex align-items-center gap-4">
            <h2 className="category-headr">Categories</h2>
            <button className="filter" onClick={toggleFilter}>
              <i className="bi bi-funnel"></i>
            </button>
          </div>
          <div className={`category-list align-items-center ${isFilterOpen ? 'show' : ''}`}>
            {["Technology", "Education", "Business", "Devlopment", "History", "Engineering", "Photography"].map((cat) => (
              <button key={cat} className="list-items">{cat}</button>
            ))}
          </div>
          <div className="grid-card">
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="col-lg-4 col-md-6 col-12">
                  <div className="category-card">
                    <div className="cardImg">
                      <img src={categoryImg} alt="category" />
                    </div>
                    <div className="cardCategory-cntn">
                      <h3>Web Development Fundamentals</h3>
                      <div className="card-details d-flex justify-content-between">
                        <div className="qstn d-flex align-items-center">
                          <span><i class="bi bi-book"></i></span>
                          <p>8 Questions</p>
                        </div>
                        <div className="qstn d-flex align-items-center">
                          <span><i className="bi bi-clock"></i></span>
                          <p>8 Minutes</p>
                        </div>
                      </div>
                      <div className="categoryCard-btn align-items-center">
                        <Link to="/quiz/question" className="btn-secondary section-btn text-capitalize w-100 justify-content-center">
                          Play Now<span class="d-flex align-items-center justify-content-center">
                        <svg width="13" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                            fill="black" />
                        </svg> </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="progress-sec" style={{ backgroundImage: `url(${progress})` }}>
        <div className="container">
          <div className="progressBar-details d-flex justify-content-between align-items-center">
            <div className="progress-cntn">
              <h2>Your Learning Progress</h2>
              <label className="form-label">Keep growing. You are doing well!</label>
            </div>
            <div className="progress-level">50%</div>
          </div>
          <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: "50%" }}></div>
          </div>
          <div className="cmplt">
            <p>3 of 6 Quizzes complete</p>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="achv-sec">
        <div className="container">
          <div className="progress-cntn mb-4">
            <h2>Achievements</h2>
          </div>
          <div className="row">
            {achievements.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <div className={`achv-card ${item.bg} d-flex align-items-center`}>
                  <div className="achv-logo">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="achcCard-cntn">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default Quiz;