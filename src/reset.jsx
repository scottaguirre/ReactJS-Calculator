import React, { Component } from "react";

const Reset = ({ reset }) => {
  return (
    <button className="btn btn-md btn-primary" onClick={reset}>
      Start Again
    </button>
  );
};

export default Reset;
