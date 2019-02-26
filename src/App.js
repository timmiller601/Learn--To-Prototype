import React, { Component } from 'react';
import Header from './Header.js';
import PlayingCard from './PlayingCard.js';
// import { timsQuestionDataset } from './data';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true, 
      studyQuestions: [],
      studyList: [],
      showAllQuestions: false,
      guessedQuestions: [],
      error: null
    }
  }
  
  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/TMQuestionDataset")
      .then(results => results.json())
      .then((result) => {
        this.setState({
          loading: false,
          studyQuestions: result.TMQuestionDataset.studyQuestions
        })
      })
      .catch(err => {
        this.setState({ error: err })
      })
    }

  populateStudyList = () => {
    if (Object.keys(localStorage).length > 0) {
      const savedStudyList = JSON.parse(localStorage.getItem('StudyList'))
      this.setState({
        studyList: savedStudyList
      });
    }
  }

  toggleAllQuestions = () => {
    this.setState({
      showAllQuestions: !this.state.showAllQuestions,
    });
  }

  updateStudyList = (id, answer) => {
    const questions = [...this.state.questions];
    const studyList = [...this.state.studyList];
    const guess = questions.find((question) => {
      return question.id === id
    })

    if (!studyList.includes(guess.id) && answer === false) {
      studyList.push(guess.id)
    } else if (studyList.includes(guess.id) && !this.state.showAllQuestions) {
      let index = studyList.indexOf(guess.id)
      studyList.splice(index, 1)
    }

    this.setState({
      studyList: studyList
    }, () => {
      localStorage.setItem('StudyList', JSON.stringify(studyList))
      this.updateGuessedCards(id);
    })
  }  

  updateGuessedCards = (id) => {
    const questionsArr = [...this.state.questions];
    const guessedArr = [...this.state.guessedQuestions];
    const guessed = questionsArr.find((elem) => {
      return elem.id === id
    })
    if (!guessedArr.includes(guessed.id)) {
      guessedArr.push(guessed.id)
    }
    this.setState({
      guessedQuestions: guessedArr
    })
  }

  resetQuiz = () => {
    this.setState({
      studyList: [],
      guessedQuestions: [],
      showAllQuestions: false
    });
    localStorage.clear();
  }


  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loading && 
        <PlayingCard
         studyQuestions={this.state.studyQuestions}
          />}
        
      </div>
    );
  }
}


