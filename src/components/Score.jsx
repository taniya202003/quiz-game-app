import React, { useContext } from "react";
import { ContextProvider } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

export const Score = () => {
  const {
    setCurrentQuestionIndex,
    score,
    setScore,
    setQuizStarted,
    setIsSubmited,
  } = useContext(ContextProvider);

const navigate = useNavigate()

  return (
    <div>
      <h2>Quiz Completed</h2>
      <h4>Your Score: {score}</h4>

      <button
        onClick={() => {
          navigate('/questions')
          setCurrentQuestionIndex(0);
          setScore(0);
          setQuizStarted(true);
          setIsSubmited(false);
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
};