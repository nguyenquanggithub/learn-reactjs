import React from 'react';

const randomAge = (props) => {
  return props.age;
}

const person = (props) => {
  return <p>I'm a {props.name} Person. I'm {randomAge(props)} years old.</p>
}

export default person;