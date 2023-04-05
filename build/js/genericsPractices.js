"use strict";
//USE GENERICS TO ALLOW ANY TYPE VALUE
const isObj = function (input) {
    return typeof input === "object" && !Array.isArray(input);
};
console.log(isObj({})); //TRUE
console.log(isObj([])); //FALSE
//BY USING GENERICS TYPE BELOW, WE ENSURE THE THE TYPE OF THE VALUE PROPERTY IS THE SAME WITH THE TYPE OF THE INPUT
//WANT TO USE THE DATA TYPE OF THE INPUT AS THE TYPE OF THE OUTPUT
const isTrue = function (input) {
    //instead we can directly annotate the returned value TypeOfReturnValue<T>
    //IF EMPTY ARRAY, RETURN FALSE
    if (Array.isArray(input) && !input.length) {
        return { value: input, is: false };
    }
    //WE NEED TO USE TYPE ASSERTION TO LET TYPESCRIPT KNOW THAT INPUT IS AN OBJECT WHEN WE USE IT INSIDE OF THE OBJECT.KEYS
    if (isObj(input) && !Object.keys(input).length) {
        return { value: input, is: false };
    }
    return { value: input, is: !!input };
};
const showFilm = function (filmObj) {
    return { obj: filmObj };
};
console.log(showFilm({ id: 1, name: "simon" }));
//USE GENERIC TYPE TOGETHER WITH EXTENDS AND KEYOF
const filmArr = [
    {
        id: 1,
        name: "simon",
        age: 18,
    },
    { id: 2, name: "simon2", age: 20 },
];
//T EXTENDS IS USED TO DEFINE T AS AN OBJECT AND K EXTENDS KEYOF T TO ACCESS THE KEY OF T OBJECT
const showArr = function (filmArr, key) {
    //T[K] IS USED TO ACCESS THE KEY INSIDE THE T AND T[K][] EXPRESS AN ARRAY OF VALUES GOTTEN FROM T OBJECT BY USING K
    return filmArr.map((film) => film[key]);
};
console.log(showArr(filmArr, "age"));
//CREATE AC CLASS WITH GENERIC TYPE
//USE GENERIC TYPE TO BUILD THE RELATION BETWEEN THE DATA TYPE OF A PROPERTY AND THE INPUT DATA OF A SETTER
class StudentClass1 {
    constructor(data) {
        this.data = data;
        this.data = data;
    }
    get database() {
        return this.data;
    }
    set database(value) {
        this.data = value;
    }
}
const newStudent12345 = new StudentClass1(["e", "v"]);
newStudent12345.database = [...newStudent12345.database, "a", "b"];
console.log(newStudent12345.database);
