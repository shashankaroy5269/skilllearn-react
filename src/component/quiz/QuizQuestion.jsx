import React, { useState } from 'react';
import './Quizquestion.css'


const QuizQuestion = () => {
  // 1. State to track which option is selected for each question
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelect = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option
    });
  };

  const quizData = [
    {
      id: 1,
      question: "Which hook is used to manage state in a functional ?",
      options: ["UseEffects", "UseContent", "UseState", "UseRef"],
    },
    {
      id: 2,
      question: "Which hook is used to perfrom side effects in Reacts ?",
      options: ["UseEffects", "UseContent", "UseState", "UseRef"],
    },
    {
      id: 3,
      question: "What does JSX stand for ?",
      options: ["Java Syntax Extension", "JavaScript XML", "JSON XML", "Java Source Extension"],
    },
  ];

  return (
    <>
  {/* <div> </div> */}
    <main>
      <section className="question-sec">
        {/* Breadcrumb Header */}
        <div className="about-about-hdr">
          <div className="container">
            <ul className="list-unstyled d-flex py-3">
              <li><a href="/" className="brdcrumb fw-light me-1 text-decoration-none">Home &gt;</a></li>
              <li><a href="/quiz" className="brdcrumb fw-light me-1 text-decoration-none">Quiz &gt;</a></li>
              <li className="brdcrumb fw-light">Quiz Test</li>
            </ul>
          </div>
        </div>

        <div className="about-about-wrpr bg-white py-4">
          <div className="container">
            {/* Progress Header */}
            <div className="question-progress">
              <div className="progress-hdr d-flex align-items-center justify-content-between">
                <h4 className="title4">Web Devolpoment</h4>
                <p className="mb-0">Question 1 Out Of 08</p>
              </div>
              <div className="progress mt-2" style={{ height: '10px' }}>
                <div className="progress-bar" style={{ width: "25%", backgroundColor: "#097877" }}></div>
              </div>
            </div>

            {/* Questions Loop */}
            {quizData.map((item) => (
              <div key={item.id} className="question-card text-center text-capitalize mt-5 p-4 shadow-sm border rounded">
                <h2 className="title3 ">{item.question}</h2>
                <div className="answer-grid ">
                  {item.options.map((option, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSelect(item.id, option)}
                      className={`answer-btn btn px-4 py-2 border ${selectedOptions[item.id] === option ? 'selected-opt' : ''}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="submit-button text-end mt-4">
                  <button className="btn btn-secondary section-btn text-capitalize">
                    Submit answer
                    <span className="ms-2">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z" fill="white" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    
    </>
  );
};

export default QuizQuestion;