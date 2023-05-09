function Person(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;
  this.isGreeted = false;
}

const person1 = new Person('John', '#123 Street', 20);
const person2 = new Person('Mayo', 'Dasmarinas City, Cavite', 22);

console.log(person1);
console.log(person2);
