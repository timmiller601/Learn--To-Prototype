import React, { Component }from 'react';
import Instructions from './Instructions';
import Menu from './Menu';
import './Styles/Master.scss';

  class Header extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showInstructions: false,
    }
  }

    toggleInstructionsShown = () => {
    this.setState({
      showInstructions: !this.state.showInstructions
    })
  }

  render() {
    let { toggle, resetQuiz, studyList, showAllQuestions } = this.props
    if (!this.state.showInstructions) {
      return (
        <header className="header">
          <h1>Prototypes Quiz</h1>
          <Menu
            studyList={studyList}
            showAllQuestions={showAllQuestions}
            toggleInstructionsShown={this.toggleInstructionsShown}
            resetQuiz={resetQuiz}
            toggle={toggle}
          />
        </header>
        )
      } else {
        return (
          <header className="header">
            <h1>Proto Quiz</h1>
              <Instructions 
                toggleInstructions={this.toggleInstructionsShown}
              />
          </header>
      )
    }
    }
}  


export default Header;