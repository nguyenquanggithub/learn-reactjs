import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Human from './Human/Human';

const app = (props) => {
  const [personsState, setpersonsState] = useState({
    persons: [
      { name: 'Quang', age: 28 },
      { name: 'Ngoc', age: 29 },
      { name: 'Duyen', age: 30 },
    ],
    otherState: 'some other value',
  });

  const switchNameHandler = () => {
    // this -> App
    //this.state.persons[0].name = 'Quang Nguyen'; //Don't do this
    setpersonsState({
      persons: [
        { name: 'QuangNguyen', age: 12 },
        { name: 'NgocBao', age: 15 },
        { name: 'DuyenKieu', age: 17 },
      ],
    });
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        I like an apple.
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />

      <Person>
        <p>Children ReactJS</p>
      </Person>

      <Human name="Quang" age="10" />
      <Human name="Ngoc" age="20">
        I like an apple.
      </Human>
      <Human name="Duyen" age="15" />

      <Human>
        <p>Child ReactJSS</p>
      </Human>
    </div>
  );
};

export default app;

//var something = "some value"; // error
//something = 'some value'; // That is OK

// switchNameHandler = () => {
//   // this -> App
//   //this.state.persons[0].name = 'Quang Nguyen'; //Don't do this
//   this.setState({
//     persons: [
//       { name: 'QuangNguyen', age: 12 },
//       { name: 'NgocBao', age: 15 },
//       { name: 'DuyenKieu', age: 17 },
//     ],
//   });
// };
