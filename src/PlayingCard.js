import React, { Component } from 'react'
import QuestionContainer from './QuestionContainer'


class PlayingCard extends Component {
    render() {
    let { questions } = this.props.questions;
    return (
      <div className-="card-container">
        {this.props.questions.map((element) => {
          let { id, question, solutions, correct_solution, catagory, link } = element;
            return (
              <QuestionContainer
                key={id}
                question={question}
                solutions={solutions}
                correct_solution={correct_solution}
                catagory={catagory}
                link={link}
              />
            )
      })}
      </div>
    )
    }
  }

export default PlayingCard;