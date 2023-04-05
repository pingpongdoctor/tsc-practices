"use strict";
const feeObj1 = {
    book: 30,
    food: 20,
    vegetable: 10,
};
//WE CAN REASSGIN THE PROPERTY
feeObj1.newBook = 24;
//USE READONLY TO PREVENT ALL REASSIGNMENT
const feeObj2 = {
    book: 30,
    food: 20,
    vegetable: 10,
};
const feeObj3 = {
    book: 20,
    food: 14,
    vegetable: 13,
};
feeObj3.newBook = 20;
//WE CAN NOT ASSIGN A NEW VALUE FOR THE BOOK PROPERTY
// feeObj3.book = 12;
//FUNCTION TO CALCULATE THE TOTAL FEE
const sumFunc = function (feeObj) {
    let total = 0;
    for (const property in feeObj) {
        //SINCE THE PROPERTY'S VALUE IS NOT LITERAL AS IT CAN BE UNDEFINED AND THE TYPE GUARD CAN NOT HELP NARROW THE TYPES, WE NEED TO STORE THE VALUE OF IT IN ANOTHER VARIABLE
        let fee = feeObj[property];
        if (property && typeof fee != "undefined") {
            total = total + fee;
        }
    }
    return total;
};
console.log(sumFunc(feeObj3));
const feeObj4 = {
    food: 12,
};
//WE CAN ADD MORE AND MORE PROPERTIES THAT WE WANT WITHOUT THE NEED TO DEFINE THE DATA TYPE FOR THE NEW ADDED PROPERTIES IN THE INTERFACE
feeObj4.play = 16;
const sumFunc2 = function (feeObj) {
    let total = 0;
    //SINCE THE PROPERTY NOW IS LITTERAL SO WE DO NOT NEED TO NARROW ITS DATA TYPES
    for (const property in feeObj) {
        total = total + feeObj[property];
    }
    return total;
};
//TYPESCRIPT CAN NOT SEE THE FUTURE SO IT DOES NOT SHOW ANY ERROR WHEN YOU TRY TO ACCESS AN NON EXISTING PROPERTY
console.log(feeObj4.swim);
const feeObj5 = {
    food: 13,
};
const feeObj6 = {
    food: 13,
    name: 15,
};
//WE CAN ASSIGN A NEW VALUE FOR THE FOOD SINCE FOOD IS NOT ANNOTATED WITH READONLY
feeObj6.food = 15;
const array12 = [1, 2, 3, 4, 5];
const obj1234 = {
    name: "simon",
    age: 18,
};
//ALL PROPERTIES ARE READONLY BUT NAME IS NOT READONLY
obj1234["name"] = "feaewf";
const newObj = {
    name: "simon",
    age: 18,
};
for (const prop in newObj) {
    console.log(`${prop}:${newObj[prop]}`);
}
//IF WE DO NOT KNOW THE INTERFACE OF THE OBJECT, WE CAN DO THIS
for (const prop in newObj) {
    console.log(`${prop}:${newObj[prop]}`);
}
//WE CAN USE KEYOF IN PARAMETERS
const showData = function (obj, key) {
    console.log(`${key}:${obj[key]}`);
};
showData(newObj, "age");
const objectWithLiteralType = {
    a: 1,
    b: 3,
    c: 2,
};
for (const prop in objectWithLiteralType) {
    console.log(`${prop}:${objectWithLiteralType[prop]}` //WE NEED TO USE KEYOF TO IMPLEMENT ASSERTION FOR THE INDEX VARIABLE IF WE USE THE RECORD UTILITY TYPE
    );
}
