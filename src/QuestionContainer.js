import React, { Component } from 'react';
import CorrectAnswer from './CorrectAnswer'
import IncorrectAnswer from './IncorrectAnswer'


class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className='question-card' id={this.props.key}>
        <h3 className="catagory-title">Catagory: {this.props.catagory.toUpperCase()}</h3>
        <p>Question: {this.props.question}</p>
        <div className="answer-btns">
          {
            this.props.solutions.map((solution) => {
              return (
                <button className="guess-button"> {solution} </button>
              )
            })
          }
        </div>
      </div>
    )
  }

}
  
    
export default QuestionContainer;