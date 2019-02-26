import React, { Component } from 'react';
import Header from './Header.js';
import { timsQuestionDataset } from './data';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}


