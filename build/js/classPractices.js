"use strict";
//DEFINE A CLASS
class User {
    constructor(
    //PUBLIC MAKE THIS PROPERTY ACCESSED BY THE CLASS SO THAT WE ONLY NEED TO ANNOTATE THE PARAMETERS IN THE CONSTRUCTOR
    name, 
    //PRIVATE MEANS THAT THIS PROPERTY CAN ONLY BE ACCESSED INSIDE THIS CLASS, NOT IN THE SUBCLASSES
    age = 18, 
    //WE CAN USE THE DEFAULT VALUE FOR SOME PROPERTIES
    //PROTECTED MEANS THAT THE PROPERTY IS ONLY ACCESSED INSIDE THIS CLASS AND ITS SUBCLASSES
    lang = "Java") {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const user12 = new User("sss", 28, "c");
console.log(user12.getAge());
class NewUser extends User {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
        this.gender = gender;
    }
    getLang() {
        return this.lang;
    }
}
const user123 = new NewUser("simon", 18, "male");
console.log(user123.getLang());
console.log(user12);
console.log(user123);
class FirstClass {
    //DEFINE THE DATA TYPE FOR THE PARAMETERS
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    func123() {
        return this.name;
    }
}
//INSTEAD, WE CAN USE SHORTHAND TO DEFINE THE DATA TYPE FOR BOTH PROPERTIES AND PARAMETERS AT THE SAME TIME
class SecondClass {
    //USE PUBLIC TO EXECUTE SHORTHAND THAT HELPS ANNOTATE PROPERTIES AND PARAMETERS AT THE SAME TIME
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    func123() {
        return this.name;
    }
}
//CREATE A CLASS WITH STATIC MEMBERS
class Singer {
    static getCount() {
        return Singer.count;
    }
    constructor(name) {
        this.name = name;
        // Singer.count = Singer.count + 1;
        this.id = ++Singer.count; //++ used to increase the count property. ++ at the beginning implements the increment from 1 and at the end executes the increment from 0
        this.name = name;
    }
}
Singer.count = 0;
const newSinger = new Singer("simon");
const newSinger2 = new Singer("simon2");
console.log(Singer.count); //WE ACCESS THE STATIC MEMBERS THROUGH THE CLASS
//USE GET AND SET TO GET DATA AND SET DATA
//WITHOUT SET, THE PROPERTY IS INFERRED AS BEING READ ONLY
class Bands {
    constructor() {
        //SET THE INITIAL VALUE
        this.dataState = [];
    }
    //METHOD TO GET DATA
    get dataArr() {
        return this.dataState;
    }
    //METHOD TO SET DATA
    //TS WILL CHECK IF THE DATA TYPE OF RETURNED VALUE IN GET FUNCTION MATCHES WITH THE THE DATA TYPE OF SETTING VALUE IN THE SET FUNCTION
    //GETTER AND SETTER DO NOT RETURN ANY TYPE ANNOTATION
    set dataArr(value) {
        if (Array.isArray(value) &&
            value.every((ele) => typeof ele === "string" && ele !== "abc")) {
            this.dataState = value;
            return; //Return to break the code execution
        }
        else {
            throw new Error("Errorfuewnfuewnfuewn");
        }
    }
}
//WHEN CALLING THE SETTER, WE CALL THE NAME OF IT WITHOUT () AND USE EQUAL OPERATOR TO PASS THE VALUE TO THE PARAMETER
const newBand = new Bands();
//WHEN USING THROWING ERROR, WE NEED TO CATCH IT. OTHERWISE, YOU WILL SEE UNCAUGHT ERROR
try {
    newBand.dataArr = ["hello", "haha", "abc"];
}
catch (error) {
    console.log(error);
}
newBand.dataArr = [...newBand.dataArr, "new"]; //USE THE GETTER TO GET THE ARRAY AND THEN USE THE SPREAD OPERATOR TO CREATE A NEW ARRAY FOR UPDATING
//WHEN CALLING THE GETTER, WE CALL THE NAME OF IT WITHOUT ()
console.log(newBand.dataArr);
