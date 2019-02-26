import React, { Component } from 'react'
import QuestionContainer from './QuestionContainer'
import './styles/Master.scss'

class PlayingCard extends Component {
    render() {
      return (
        <div className="card-container">
                <QuestionCard
                />
        </div>
      )
    }
  }

export default PlayingCard;