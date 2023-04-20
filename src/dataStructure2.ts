//USE TYPE ALIAS === TYPE CREATED TO USE IN ANOTHER TYPE
type NameType = string;

type ArrType = (string | number)[];
type StudentObj = {
  name: NameType;
  age: number;
};
type StudentArr = ArrType;

//LITERAL TYPE HELPS IMPLEMENT LITERAL ASSIGNMENT
//WE ANNOTATE VARIABLES WITH SPECIFIC VALUES
let user: "simon" | "andy" | "greg";
user = "simon";

type UserTypeLiteral = "a" | "b" | "c";

let newUser: UserTypeLiteral;

//ANNOTATE THE FUNCTION WITH VOID DATA TYPE IN CASE THE FUNCTION DOES NOT RETURN ANY VALUE
const showMessage = function (message: string): void {
  console.log(message);
};

//USE TYPE ALIAS TO CREATE DATA TYPE ANNOTATION FOR A FUNCTION
type MathFunction = (a: number, b: number) => number;

let sum1: MathFunction = function (a, b) {
  return a + b;
};

//YOU CAN CREATE A TYPE ALIAS FOR A FUNCTION USING INTERFACE, BUT IT IS NOT RECOMMENDED SINCE INTERFACE IS USED FOR CREATING TYPE ALIAS FOR OBJECTS
interface MathFunction1 {
  (a: number, b: number): number;
}

//FUNCTION WITH OPTIONAL PARAMETERS
type SumAllFunc = (a: number, b: number, c?: number) => number;
let sumAll: SumAllFunc = function (a, b, c) {
  //SINCE C IS OPTIONAL, IT CAN BE UNDEFINED SO WE HAVE TO USE TYPE CARD TO CHECK ITS EXISTENCE
  if (typeof c != "undefined") {
    return a + b + c;
  }
  //IF C IS UNDEFINED, WE NEED TO RETURN A NUMBER SINCE THE RETURNED VALUE TYPE ASSIGNED IS A NUMBER
  return a + b;
};

//IF YOU WANT TO USE DEFAULT VALUE, YOU HAVE TO USE IT DIRECTLY
let sumAll2 = function (a: number = 10, b: number, c: number = 2) {
  return a + b + c;
};
//OR YOU CAN USE IT WITH OPTIONAL PARAMETER
type SumAllFunc2 = (a?: number, b?: number, c?: number) => number;
let sumAll23: SumAllFunc2 = function (a = 10, b = 3, c = 8) {
  return a + b + c;
};
console.log(sumAll23(7, undefined, undefined));
//USE UNDEFINE TO APPLY THE DEFAULT VALUES
console.log(sumAll2(undefined, 2, undefined));

//USE REST PARAMETER TO INPUT AN ARRAY AS A AN ARGUMENT VALUE INTO A FUNCTION WITHOUT USING THE SQUARE BRACKET
let newFunc1 = function (a: number, ...numsArr: number[]): number {
  return a + numsArr.reduce((prev, curr) => prev + curr);
};
console.log(newFunc1(1, 2, 3, 5)); //a=1 and 2,3,5 =[2,3,5]

//NEVER TYPE IS AUTOMATICALLY INFFERED FOR A FUNCTION BY TYPESCRIPT WHEN THE FUNCTION THROW AN ERROR
const errorFunc = function (message: string): never {
  throw new Error("There is an error");
};

//NEVER TYPE IS AUTOMATICALLY INFFERED FOR A FUNCTION BY TYPESCRIPT WHEN THE FUNCTION HAS AN INFINITE LOOP
const infiniteFunc = function () {
  //USE WHILE TRUE TO LOOP FOREVER
  let i = 0;
  while (true) {
    i++;
  }
};
