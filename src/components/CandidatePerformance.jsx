import React, { useContext } from "react";
import { ContextProvider } from "../context/QuizContext";
import '../assets/quizApp.css';
import { useNavigate } from "react-router-dom";

export const CandidatePerformance = () => {
const {questions, currentQuestionIndex, quizStarted, setQuizStarted}= useContext(ContextProvider)

const navigate = useNavigate()

const handleStartQuiz = () =>{
    navigate('/questions')
        setQuizStarted(true)
}

  return (
   <div className="CandidatePerformance-container">
        <h3>Quiz App</h3>
        {/* {!quizStarted ? ( */}
            <div >
            <h2>Smart Test</h2>
            <button className="CandidatePerformance-btn" onClick={handleStartQuiz}>Start Test</button>
        </div> 
        {/* ):currentQuestionIndex < questions.length ? (
            <div>
            <Question handleAnswerClick={handleAnswerClick} handleNextQuestion={handleNextQuestion} handlePrevQuestion={handlePrevQuestion}/>
        </div>
        ):(
            <div>
                <Score/>
            </div>
        )} */}
   </div>
      
  );
};
