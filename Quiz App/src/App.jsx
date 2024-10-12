import { useState } from "react";
import "./App.css";
import questions from "./constans/questions.json";
import Question from "./components/question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  //Keep all pf the logic in app.jsx
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  return (
    <div className="App">
      <h1>World Quiz</h1>
      {/* {Question Component} */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {/* {Result Component} */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
