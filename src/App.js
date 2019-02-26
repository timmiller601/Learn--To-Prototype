import React, { Component } from 'react';
import Header from './Header.js';
import PlayingCard from './PlayingCard.js';
// import { timsQuestionDataset } from './data';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true, 
      studyQuestions: []
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


