import React from "react";

import Quiz from "../component/quiz/Quiz";
import QuizCompleted from "../component/quiz/QuizCompleted";
import QuizOverview from "../component/quiz/QuizOverview";
import QuizQuestion from "../component/quiz/QuizQuestion";




const QuizSection = () => {
  return(<>
  
  
  <Quiz/>
  <QuizCompleted/>
  <QuizOverview/>
  <QuizQuestion/>
  
  
  </>);
};

export default QuizSection;
