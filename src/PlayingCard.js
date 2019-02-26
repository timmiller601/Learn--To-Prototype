import React, { Component } from 'react'
import QuestionContainer from './QuestionContainer'


class PlayingCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { studyQuestions } = this.props;
    console.log(studyQuestions);
    return (
      <div classname-="card-container">
        {studyQuestions.map((element) => {
          let { question, solutions, correct_solution, catagory, link, id } = element;

            return (
              <QuestionContainer
                question={question}
                solutions={solutions}
                correct_solution={correct_solution}
                catagory={catagory}
                link={link}
                key={id}
              />
            )
      })}
      </div>
    )
    }
  }

export default PlayingCard;