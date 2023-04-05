let ageStr: string = "2";
let age: number = 18;
//ADD TYPE NOTATION WITHOUT ASSIGNING VALUES
let myName: String;
myName = "simon";
//DEFINE UNION TYPE
let id: number | string; //id can be number or string
//ADD TYPE ANOTATION FOR PARAMETERS
let sum = function (a: number = 1, b: number) {
  return a + b;
};
//ADD TYPE ANOTATION FOR REGEX
let reg: RegExp = /\w+/g;
//DEFINE THE ANY TYPE
let anyId: any;
