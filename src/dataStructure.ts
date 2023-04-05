//ADD TYPE ANOTATION FOR AN ARRAY
let arr1: string[] = ["simon", "abc"];
// arr1.push(2); => error

//ADD TYPE ANNOTATION USING UNION
let arr: (string | number)[] = ["simon", 12];
// arr.push(true); => error

//USE TUPLE TO DEFINE DATA TYPE FOR AN ARRAY
let arr2: [string, number, boolean] = ["abc", 12, true];
// arr2[0] = 2; => error

//TYPESCRIPT AUTOMATICALLY INFERS TYPE ANOTATION BASED ON CURRENT ELEMENTS
let arr3 = ["abc", 12, true]; //This array accepts string, number and boolean values

//ADD TYPE ANOTATION DIRECTLY TO AN OBJECT
let obj: { name: string; age: number; hobby?: string } = {
  name: "simon ",
  age: 18,
};
// obj.age = "18"; => error
obj.hobby = "music"; //This is valid

//USE TYPE ALIAS AND INTERFACE TO CREATE A TYPE ANOTATION FOR AN OBJECT
type ObjType1 = {
  name?: string; //Add ? before the colon to make the property optional
  id: string | number;
  state: boolean;
};

let obj1: ObjType1 = {
  id: 1, //Since name is optional so we can create an obj without having this property
  state: true,
};

//USE INTERFACE TO CREATE A TYPE ANOTATION FOR AN OBJECT
//INTERFACE IS VERY SIMILAR TO TYPE ALIAS BUT IT CAN EXTEND
//INTERFACE IS USED MAINLY FOR OBJECT TYPE ANOTATION AND TYPE IS USED FOR THE OTHER CASES
interface ObjType2 {
  name?: string; //Add ? before the colon to make the property optional
  id: string | number;
  state: boolean;
}
//EXTEND THE TYPE ANNOTATION USING INTERFACE AND THE EXTENDS KEYWORD
interface ObjType3 extends ObjType2 {
  arr: (string | number)[];
}

let obj2: ObjType3 = {
  id: 1, //Since name is optional so we can create an obj without having this property
  state: true,
  arr: [12, "simon"],
};
// obj2.id = true; => error

//USE THE TYPE ANOTATION CREATED BY INTERFACE OR TYPE ALIAS TO ANOTATE THE PARAMETER
//THE RETURN VALUE CAN BE ANOTATED BUT IT IS NOT NEEDED SINCE TYPESCRIPT CAN INFER THE DATA TYPE BASED ON THE STATEMENT IN THE FUNCTION
const newFunc = function (para: ObjType3): string {
  return `The object is ${para}`;
};

//USE ENUM TO CREATE A SET OF CONSTANTS
//THIS IS NOT A TYPE-LEVEL ADDED TO JS
enum Level {
  A = 1, //1
  B, //2
  C, //3
}
