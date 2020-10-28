import React, { Component } from 'react';

class Human extends Component {
  render() {
    const randomAge = () => {
      return this.props.age;
    }
    return (
      <div className="App">
        <h1>I'm a {this.props.name} person.I'm {randomAge()} years old.</h1>
        <div>{this.props.children}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Human