import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Quizquestion.css'

const QuizQuestion = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [timeLeft, setTimeLeft] = useState(60); // 1 minute = 60 seconds

    const quizData = [
        { id: 1, question: "Which hook is used to manage state in a functional ?", options: ["UseEffects", "UseContent", "UseState", "UseRef"] },
        { id: 2, question: "Which hook is used to perform side effects in React ?", options: ["UseEffects", "UseContent", "UseState", "UseRef"] },
        { id: 3, question: "What does JSX stand for ?", options: ["Java Syntax Extension", "JavaScript XML", "JSON XML", "Java Source Extension"] },
        { id: 4, question: "Which company developed React ?", options: ["Google", "Facebook", "Microsoft", "Amazon"] },
        { id: 5, question: "Which method is used to render React elements to the DOM ?", options: ["render()", "ReactDOM.render()", "DOM.render()", "createRoot()"] },
        { id: 6, question: "What is the default port number for React app ?", options: ["3000", "8080", "5000", "4200"] },
        { id: 7, question: "Which hook is used to handle lifecycle methods in React ?", options: ["useState", "useEffect", "useRef", "useMemo"] },
        { id: 8, question: "What is React mainly used for ?", options: ["Database Management", "User Interface Development", "Server Side Logic", "File Handling"] },
        { id: 9, question: "Which of the following is NOT a React hook ?", options: ["useState", "useEffect", "useClass", "useRef"] },
        { id: 10, question: "Props in React are _____ ?", options: ["Mutable", "Immutable", "Optional", "Private"] },
        { id: 11, question: "Which hook is used to access DOM elements directly ?", options: ["useState", "useEffect", "useRef", "useContext"] },
        { id: 12, question: "What is the correct way to pass data to a component ?", options: ["Using props", "Using state", "Using hooks", "Using render"] },
        { id: 13, question: "Which keyword is used to export a component ?", options: ["export", "exports", "default", "module"] },
        { id: 14, question: "What is the purpose of keys in React lists ?", options: ["To style list items", "To uniquely identify elements", "To sort elements", "To remove duplicates"] },
        { id: 15, question: "Which hook is used to share data globally in React ?", options: ["useState", "useEffect", "useContext", "useRef"] },
    ];

    // Timer Logic
    useEffect(() => {
        if (timeLeft === 0) {
            handleNextQuestion(); // Time khatam hone par next question
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [timeLeft]);

    const handleSelect = (questionId, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionId]: option
        });
    };

    // Is function ko apne QuizQuestion.js mein replace karein
const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimeLeft(60); 
    } else {
        const finalResult = { 
            userAnswers: selectedOptions, 
            questions: quizData 
        };
        localStorage.setItem('quizResult', JSON.stringify(finalResult));
        navigate("/quiz/completed", { state: finalResult });
    }
};
    const currentQuestion = quizData[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    

    return (
        <>
            {/* <Header /> */}
            <main>
                <section className="question-sec">
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
                            {/* Timer Display */}
                            <div className="text-center mb-3">
                                <h5 style={{ color: timeLeft < 10 ? 'red' : '#097877' }}>
                                    Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                                </h5>
                            </div>

                            <div className="question-progress">
                                <div className="progress-hdr d-flex align-items-center justify-content-between">
                                    <h4 className="title4">Web Development</h4>
                                    <p className="mb-0">Question {currentQuestionIndex + 1} Out Of {quizData.length}</p>
                                </div>
                                <div className="progress mt-2" style={{ height: '10px' }}>
                                    <div className="progress-bar" style={{ width: `${progressPercentage}%`, backgroundColor: "#097877", transition: '0.3s' }}></div>
                                </div>
                            </div>

                            {/* Single Question Display */}
                            <div className="question-card text-center text-capitalize mt-5 p-4 shadow-sm border rounded">
                                <h2 className="title3 ">{currentQuestion.question}</h2>
                                <div className="answer-grid mt-4">
                                    {currentQuestion.options.map((option, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSelect(currentQuestion.id, option)}
                                            className={`answer-btn btn px-4 py-2 m-2 border ${selectedOptions[currentQuestion.id] === option ? 'btn-success text-white' : 'btn-outline-dark'}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                
                                <div className="submit-button w-100 text-end mt-4">
                                    <button 
                                        onClick={handleNextQuestion}
                                        className="btn btn-secondary section-btn text-capitalize"
                                        disabled={!selectedOptions[currentQuestion.id]} // Option select karna zaroori hai
                                    >
                                        {currentQuestionIndex === quizData.length - 1 ? "Submit Quiz" : "Submit Answer"}
                                        <span className="ms-2">
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M12.0637 0.0004902L12.0637 9.2353L1.28033 12.5941L10.2535 1.49956L3.57843 1.49956" stroke="white" strokeWidth="2"/>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Main Quiz Submit Button (Optional - if you want to end anytime) */}
                            <div className="text-center mt-5">
                                <button 
  className="btn btn-danger"
  onClick={() => {
    const finalResult = {
      userAnswers: selectedOptions,
      questions: quizData
    };

    localStorage.setItem('quizResult', JSON.stringify(finalResult));
    navigate("/quiz/completed", { state: finalResult });
  }}
>
  End Quiz & Submit All
</button>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
           
        </>
    );
};

export default QuizQuestion;