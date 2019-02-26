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
        <h3>{this.props.catagory}</h3>
        <p>{this.props.question}</p>
        <ul>
          {
            this.props.solutions.map((solution) => {
              return (
                <li>{solution}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}
  
    
export default QuestionContainer;