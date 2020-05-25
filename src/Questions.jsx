import React, { Component } from "react";
import Answers from "./Answers";

const Questions = ({ question, answers, correct, selected }) => {
  const handleCorrect = answer => {
    selected(correct, answer);
  };
  return (
    <React.Fragment>
      <h5 className="heading-questions">{question}</h5>
      <br />
      <Answers answers={answers} selected={answer => handleCorrect(answer)} />
    </React.Fragment>
  );
};

export default Questions;
