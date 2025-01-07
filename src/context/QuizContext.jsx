import { createContext, useState } from "react";
import { QuizQuestions } from "../components/QuizQuestions";

export const ContextProvider = createContext();

export const QuizContext = ({ children }) => {
  const [questions, setQuestions] = useState(QuizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isSubmited,setIsSubmited] = useState(false)

  console.log(currentQuestionIndex, "currentQuestionIndex");
  console.log(questions, "questions");
  console.log(score, "score");
  console.log(quizStarted, "quizStarted");


  const handleAnswerClick = (selectedAnswer) =>{
    if(selectedAnswer === questions[currentQuestionIndex].answer){
        setScore(prevScore => prevScore + 1)
    }
    }

    const handleNextQuestion = () =>{
        if(currentQuestionIndex + 1  ===  questions.length){
           setIsSubmited(true) 
        } 
        setCurrentQuestionIndex(nextQuestion => nextQuestion + 1)
    }
    
    const handlePrevQuestion = () => {
            setCurrentQuestionIndex (prevQuestion => prevQuestion - 1)
    }

  return (
    <ContextProvider.Provider value={{questions, setQuestions, currentQuestionIndex, setCurrentQuestionIndex, score, setScore, quizStarted, setQuizStarted, isSubmited,setIsSubmited, handleAnswerClick, handleNextQuestion, handlePrevQuestion}}>{children}</ContextProvider.Provider>
  );
};


