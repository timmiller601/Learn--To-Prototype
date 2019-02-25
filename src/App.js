import React, { Component } from 'react';
import Header from './Header.js';
import Login from './Login';
import { timsQuestionDataset } from './data';
import './Styles/Master.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      questions: [],
      userStatus: '',
      userResult: '',
      quizQuestionsIds: [],
      quizQuestionsIndex: 0,
      currentQuestionId: '',
      correctCounter: 0
    }
  }
  
  

  render() {
    return (
      <div className="App">
        <Header />
        <Login />
      </div>
    );
  }
}


