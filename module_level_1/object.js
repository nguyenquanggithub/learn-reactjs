const person = {
  name: 'Max'
};

const secondPerson = {
  ...person
}

person.name = 'Maximum';

console.log(secondPerson);