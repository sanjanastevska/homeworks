const {Person} = require('./person'); 

// Instantiate Person:
const person = new Person("Laurie", "Chu", 25,"Grand Ave", "Toronto", "Canada", 6984, "laurie.chu@example.com", "834-783-1028");
person.getInfo();
person.getLocation(); 
person.getContact();

module.exports = person;