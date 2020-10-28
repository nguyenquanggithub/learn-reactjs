import React from 'react';

const randomAge = (props) => {
  return props.age;
}

const person = (props) => {
  //let {age, name} = props; 
  //const something = 'value';
  return (
    <div>
      <p>I'm a {props.name} Person. I'm {randomAge(props)} years old.</p>
      <div>{props.children}</div>
      <div>{props.children}</div>
    </div>
  )
}

export default person;