import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <h3>What to do</h3>
        <div>
          <p>Each card is a multiple choice question. Choose the answer you believe to be correct</p>
          <p>If you get the answer incorrect, it will be added to your Study List to continue practicing.</p>
          <p>If you want to view the questions you missed, choose Study List Only from the dropdown!</p>
        </div>
        <button onClick={this.props.toggleInstructions}>Do the thing!</button>
      </div>
    )
  }

}

export default Instructions;

