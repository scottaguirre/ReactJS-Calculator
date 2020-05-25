import React, { Component, useState } from "react";

const Answers = ({ answers, selected }) => {
  const [arrayAnswers, setAnswers] = useState(answers);

  return (
    <div className="btn-div">
      {arrayAnswers.map((answer, ind) => (
        <button
          style={{ listStyle: "none" }}
          key={ind}
          onClick={() => {
            setAnswers([answer]);
            selected(answer);
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
