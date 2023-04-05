"use strict";
//ADD TYPE ANOTATION FOR AN ARRAY
let arr1 = ["simon", "abc"];
// arr1.push(2); => error
//ADD TYPE ANNOTATION USING UNION
let arr = ["simon", 12];
// arr.push(true); => error
//USE TUPLE TO DEFINE DATA TYPE FOR AN ARRAY
let arr2 = ["abc", 12, true];
// arr2[0] = 2; => error
//TYPESCRIPT AUTOMATICALLY INFERS TYPE ANOTATION BASED ON CURRENT ELEMENTS
let arr3 = ["abc", 12, true]; //This array accepts string, number and boolean values
//ADD TYPE ANOTATION DIRECTLY TO AN OBJECT
let obj = {
    name: "simon ",
    age: 18,
};
// obj.age = "18"; => error
obj.hobby = "music"; //This is valid
let obj1 = {
    id: 1,
    state: true,
};
let obj2 = {
    id: 1,
    state: true,
    arr: [12, "simon"],
};
// obj2.id = true; => error
//USE THE TYPE ANOTATION CREATED BY INTERFACE OR TYPE ALIAS TO ANOTATE THE PARAMETER
//THE RETURN VALUE CAN BE ANOTATED BUT IT IS NOT NEEDED SINCE TYPESCRIPT CAN INFER THE DATA TYPE BASED ON THE STATEMENT IN THE FUNCTION
const newFunc = function (para) {
    return `The object is ${para}`;
};
//USE ENUM TO CREATE A SET OF CONSTANTS
//THIS IS NOT A TYPE-LEVEL ADDED TO JS
var Level;
(function (Level) {
    Level[Level["A"] = 1] = "A";
    Level[Level["B"] = 2] = "B";
    Level[Level["C"] = 3] = "C";
})(Level || (Level = {}));
