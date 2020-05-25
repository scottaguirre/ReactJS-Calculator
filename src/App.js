import React, { Component } from "react";
import quiz_service from "./quizService/index";
import Header from "./Header";
import Questions from "./Questions";
import Reset from "./reset";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };

  getQuestions = () => {
    quiz_service().then(arrayQuestions => {
      this.setState({ questionBank: arrayQuestions });
    });
  };

  handleScore = (correctAnswer, answer) => {
    if (correctAnswer === answer) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({ responses: this.state.responses + 1 });
  };

  componentDidMount() {
    this.getQuestions();
  }

  reset = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };

  render() {
    let show;
    const { questionBank } = this.state;
    if (this.state.responses < 5) {
      show = questionBank.map((ele, ind) => (
        <div key={ele.questionId}>
          <h5 className="heading-questions ">{ind + 1}. </h5>
          <Questions
            question={ele.question}
            answers={ele.answers}
            correct={ele.correct}
            selected={this.handleScore}
          />
        </div>
      ));
    } else {
      show = (
        <div className="center">
          <h4 className="center">
            You got {this.state.score} / 5 correct answers
          </h4>
          <Reset reset={this.reset} />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Header />
            {show}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
