import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Human from './Human/Human';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Person name='Quang' age='10'/>
        <Person name='Ngoc' age='20'>I like an apple.</Person>
        <Person name='Duyen' age='15'/>

        <Human name='Quang' age='10'/>
        <Human name='Ngoc' age='20'>I like an apple.</Human>
        <Human name='Duyen' age='15'/>
      </div>
    )
  }
}

export default App;
