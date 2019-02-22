import React, { Component } from 'react';
import Header from './Header.js';
import './Styles/Master.scss';

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


