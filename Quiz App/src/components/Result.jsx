import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((ans) => ans).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of{questions.length} questions{" "}
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((questions, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}.{questions.question}
              <b>
                {userAnswers[index]
                  ? ""
                  : ` -${
                      questions.answerOptions.find((ans) => ans.isCorrect).text
                    }`}
              </b>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
