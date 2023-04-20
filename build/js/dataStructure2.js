"use strict";
//LITERAL TYPE HELPS IMPLEMENT LITERAL ASSIGNMENT
//WE ANNOTATE VARIABLES WITH SPECIFIC VALUES
let user;
user = "simon";
let newUser;
//ANNOTATE THE FUNCTION WITH VOID DATA TYPE IN CASE THE FUNCTION DOES NOT RETURN ANY VALUE
const showMessage = function (message) {
    console.log(message);
};
let sum1 = function (a, b) {
    return a + b;
};
let sumAll = function (a, b, c) {
    //SINCE C IS OPTIONAL, IT CAN BE UNDEFINED SO WE HAVE TO USE TYPE CARD TO CHECK ITS EXISTENCE
    if (typeof c != "undefined") {
        return a + b + c;
    }
    //IF C IS UNDEFINED, WE NEED TO RETURN A NUMBER SINCE THE RETURNED VALUE TYPE ASSIGNED IS A NUMBER
    return a + b;
};
//IF YOU WANT TO USE DEFAULT VALUE, YOU HAVE TO USE IT DIRECTLY
let sumAll2 = function (a = 10, b, c = 2) {
    return a + b + c;
};
let sumAll23 = function (a = 10, b = 3, c = 8) {
    return a + b + c;
};
console.log(sumAll23(7, undefined, undefined));
//USE UNDEFINE TO APPLY THE DEFAULT VALUES
console.log(sumAll2(undefined, 2, undefined));
//USE REST PARAMETER TO INPUT AN ARRAY AS A AN ARGUMENT VALUE INTO A FUNCTION WITHOUT USING THE SQUARE BRACKET
let newFunc1 = function (a, ...numsArr) {
    return a + numsArr.reduce((prev, curr) => prev + curr);
};
console.log(newFunc1(1, 2, 3, 5)); //a=1 and 2,3,5 =[2,3,5]
//NEVER TYPE IS AUTOMATICALLY INFFERED FOR A FUNCTION BY TYPESCRIPT WHEN THE FUNCTION THROW AN ERROR
const errorFunc = function (message) {
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
