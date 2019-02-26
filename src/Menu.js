import React, { Component } from 'react';

class Menu extends Component {
  render() {
    let { toggleInstructionsShown, toggle } = this.props
      return(
        <div className="user-controls">
          <button className="toggle-instructions-btn" onClick={toggleInstructionsShown} >Instructions</button>
          <button className="reset-quiz">Reset Questions</button>
          <button className="cards-to-show">Show Questions</button>
        </div>
      )
  }
}

export default Menu;
          
