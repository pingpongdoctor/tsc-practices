"use strict";
//CONSTRUCTOR
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.updateName = function (name) {
    this.name = name;
  };
  this.showName = function () {
    console.log(this.name);
  };
}

console.log(Person.prototype);

const person1 = new Person("simon", 18);

Person.prototype.updateAge = function (age) {
  this.age = age;
};
Person.prototype.showAge = function () {
  console.log(this.age);
};

console.log(Person.prototype);

const person2 = new Person("Brow", 20);

//CLASS
class Userc {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  updateName(name) {
    this.name = name;
  }
}

class User2 extends Userc {
  constructor(name, age, height) {
    super(name, age);
    this.height = height;
  }
  updateHeight(height) {
    this.height = height;
  }
}

console.log(User2.prototype);

const user1 = new Userc("simon", 20);
const user2 = new User2("greg", 29, 170);
user2.updateName("greg2");
user2.updateHeight(180);
