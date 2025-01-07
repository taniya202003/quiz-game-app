import React, { useContext, useState } from "react";
import { ContextProvider } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

export const Question = () => {
  const {
    questions,
    currentQuestionIndex,
    isSubmited,
    handleAnswerClick,
    handleNextQuestion,
    handlePrevQuestion,
  } = useContext(ContextProvider);

  const [seletedOption, setSelectedOption] = useState({});
  console.log(seletedOption, "seletedOption");

  const navigate = useNavigate();

  const optionIds = ["A", "B", "C", "D", "E"];

  const handleSelectedOption = (option) => {
    setSelectedOption((prev)=>({
      ...prev,
      [currentQuestionIndex]: option
    }));
    handleAnswerClick(option);
  };

  const handleSubmit = () => {
    navigate("/scores");
  };

  return (
    <div className="Question-container">
      <div className="quizCard">
        <h2>
          {questions[currentQuestionIndex].id}
          {") "}
          {questions[currentQuestionIndex].question}
        </h2>

        <div className="quizOptions">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              className="optionsBtn"
              key={index}
              onClick={() => handleSelectedOption(option)}
              style={{
                width: "100%",
                textAlign: "start",
                padding: "10px",
                display: "flex",
                backgroundColor: seletedOption[currentQuestionIndex] === option ? "lightgreen" : "white",
              }}
            >
              {optionIds[index]}
              {") "}
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div>
          <p>
            Question: {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        <div>
          {isSubmited || currentQuestionIndex === 4 ? (
            <div className="prevAndSubmit">
              <button className="prev-btn" onClick={handlePrevQuestion}>
                Previous Question
              </button>
              {/* <button className="submit-btn" onClick={handleNextQuestion}>Submit Test</button> */}
              <button className="submit-btn" onClick={handleSubmit}>
                Submit Test
              </button>
            </div>
          ) : (
            <div className="next-prev-btn">
              {currentQuestionIndex === 0 ? (
                <button className="prev-btn" onClick={() => navigate("/")}>
                  Back To Home Page
                </button>
              ) : (
                <button className="prev-btn" onClick={handlePrevQuestion}>
                  Previous Question
                </button>
              )}
              <button className="next-btn" onClick={handleNextQuestion}>
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
