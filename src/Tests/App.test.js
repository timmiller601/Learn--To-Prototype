import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';

const question = [
  {
    "id": 1,
    "question": "What array prototype method would return a sum of the elements in an array?",
    "answers": [
      ".sort()",
      ".reduce()",
      ".forEach()"
    ],
    "correct_answer": ".reduce()",
    "concept": "prototypes"
  }];
const guessedQuestions = [];
const id = 1;
const studyList = [4, 6];


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      questions: [],
      });
  });  
  
 });
})



