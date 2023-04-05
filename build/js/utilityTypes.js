"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = function (currentAssignment, updateAssignment) {
    return Object.assign(Object.assign({}, currentAssignment), updateAssignment);
};
console.log(updateAssignment({ id: 1, name: "simon2", age: 18 }, { id: 2 }));
//REQUIRED CONSTRUCT A TYPE WITH ALL PROPERTIES SET REQUIRED
const returnAssigment = function (assignment) {
    return assignment;
};
returnAssigment({ id: 1, name: "fafaw", age: 17, verify: true });
//READONLY CONSTRUCTS A TYPE WITH ALL PROPERTIES SET TO READONLY
const newAssignment = {
    id: 3,
    name: "abc",
    age: 17,
    verify: false,
};
const newGameObj = {
    A: 49,
    B: 18,
    C: 29,
};
//PICK CONSTRUCTS A TYPE THAT HAS PROPS PICKED FROM AN ORIGINAL TYPE
const newAssignment1 = {
    name: "abc",
    age: 18,
    verify: true,
};
//OMIT CONSTRUCTS A TYPE BASED ON OMITTING SOME PROPS FROM AN ORIGINAL TYPE
const newAssignment2 = {
    age: 18,
    id: 1,
};
const a = "B";
const b = "A";
const c = "B";
//RETURN TYPE IS USED TO GET THE DATA TYPE OF THE RETURNED VALUE FROM A FUNCTION
//WE USE RETURN TYPE WHEN WE WORK WITH THE FUNCTIONS IN LIBRARIES
//WHEN THE RETURNED VALUES' DATA TYPES ARE CHANGED, THEY CAN BE CAUGHT BY USING THE RETURN TYPE
const returnObject = function (name, age) {
    if (name === "abc") {
        return "abc";
    }
    return { name: name, age: age };
};
const returnValue123 = returnObject("simon", 18);
console.log(returnValue123);
const returnValue1234 = returnObject("abc", 18);
console.log(returnValue1234);
const paraArr = ["simon", 18];
const returnValue234 = returnObject(...paraArr);
//WHEN SPREADING AN ARRAY TO ELEMENTS THAT ARE USED AS PARAMETERS IN A FUNCTION, WE NEED TO ADD TUPLE TYPE FOR THE ARRAY
const ara = [1, 2, 3];
const fun = function (a, b, c) {
    console.log(a, b, c);
};
fun(...ara);
//AWAITED HELPS GET RETURN TYPE FROM A PROMISE
const API = "https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_ScDDRW6TjG2ASdalj0rTNXi3dc65Kz1AuRQh5QYlg06NMO52DdpkaKPWhzOWHxHI";
//GETDATA IS HANDLING A PROMISE
const getData = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(API);
        return data;
    });
};
getData()
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
