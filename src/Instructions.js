import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <h3>What to do</h3>
        <div className="dots">
          <li>Each card is a multiple choice question. Choose the answer you believe to be correct</li>
          <li>If you get the answer incorrect, it will be added to your Study List to continue practicing.</li>
          <li>If you want to view the questions you missed, choose Study List Only from the dropdown!</li>
        </div>
        <button onClick={this.props.toggleInstructions}>Now do the thing!</button>
      </div>
    )
  }

}

export default Instructions;

