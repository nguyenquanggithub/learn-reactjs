class Human {
  constructor() {
    this.gender = 'Male';
  }

  printGender() {
    console.log(this.gender);
  }

}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
    this.gender = 'Female';
  }

  printMyName() {
    console.log(this.name);
    console.log(this.gender);
  }

}

const person = new Person();
person.printMyName();