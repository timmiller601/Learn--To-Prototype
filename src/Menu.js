import React, { Component } from 'react';

class Menu extends Component {
  render() {
    let { toggleInstructionsShown, toggle } = this.props
      return(
        <div className="user-controls">
          <button className="toggle-instructions-btn" onClick={toggleInstructionsShown} >Show Instructions</button>
          <button className="reset-quiz">Reset Study List</button>
          <button className="cards-to-show">Show Study List</button>
        </div>
      )
  }
}

export default Menu;
          
