import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Human from './Human/Human';

class App extends Component {
  //var something = "some value"; // error
  //something = 'some value'; // That is OK
  state = {
    persons: [
      { name: 'Quang', age: 28 },
      { name: 'Ngoc', age: 29 },
      { name: 'Duyen', age: 30 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = (newName) => {
    // this -> App
    //this.state.persons[0].name = 'Quang Nguyen'; //Don't do this
    this.setState({
      persons: [
        { name: newName, age: 12 },
        { name: newName, age: 15 },
        { name: newName, age: 17 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Quang', age: 12 },
        { name: event.target.value, age: 15 },
        { name: 'Quang', age: 17 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler('Maximun')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          I like an apple.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <Person>
          <p>Children ReactJS</p>
        </Person>

        <Human name="Quang" age="10" click={this.switchNameHandler} />
        <Human name="Ngoc" age="20">
          I like an apple.
        </Human>
        <Human name="Duyen" age="15" />

        <Human>
          <p>Child ReactJSS</p>
        </Human>
      </div>
    );
  }
}

export default App;
