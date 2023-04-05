//DEFINE A CLASS
class User {
  constructor(
    //PUBLIC MAKE THIS PROPERTY ACCESSED BY THE CLASS SO THAT WE ONLY NEED TO ANNOTATE THE PARAMETERS IN THE CONSTRUCTOR
    public name: string,
    //PRIVATE MEANS THAT THIS PROPERTY CAN ONLY BE ACCESSED INSIDE THIS CLASS, NOT IN THE SUBCLASSES
    private age: number = 18,
    //WE CAN USE THE DEFAULT VALUE FOR SOME PROPERTIES
    //PROTECTED MEANS THAT THE PROPERTY IS ONLY ACCESSED INSIDE THIS CLASS AND ITS SUBCLASSES
    protected lang: string = "Java"
  ) {
    this.name = name;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return this.age;
  }
}

const user12 = new User("sss", 28, "c");
console.log(user12.getAge());

class NewUser extends User {
  constructor(name: string, age: number, public gender: string) {
    super(name, age);
    this.gender = gender;
  }

  public getLang() {
    return this.lang;
  }
}

const user123 = new NewUser("simon", 18, "male");
console.log(user123.getLang());
console.log(user12);
console.log(user123);

//USE INTERFACE TO ANNOTATE FOR A CLASS

interface FirstClassType {
  name: string;
  age: number;
  func123(): string;
}

class FirstClass implements FirstClassType {
  //DEFINE THE DATA TYPES FOR THE PROPERITES
  name: string;
  age: number;
  //DEFINE THE DATA TYPE FOR THE PARAMETERS
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  func123() {
    return this.name;
  }
}

//INSTEAD, WE CAN USE SHORTHAND TO DEFINE THE DATA TYPE FOR BOTH PROPERTIES AND PARAMETERS AT THE SAME TIME
class SecondClass implements FirstClassType {
  //USE PUBLIC TO EXECUTE SHORTHAND THAT HELPS ANNOTATE PROPERTIES AND PARAMETERS AT THE SAME TIME
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  func123() {
    return this.name;
  }
}

//CREATE A CLASS WITH STATIC MEMBERS
class Singer {
  static count: number = 0;
  static getCount(): number {
    return Singer.count;
  }
  //IF WE DO NOT USE THE PUBLIC VISIBILITY MODIFIER, TS WILL AUTOMATICALLY INFER IT AS PUBLIC, BUT SOMETIMES, THERE IS ERRORS
  //WE USE PUBLIC VISIBILITY MODIFIER TO LET THE PROPERTIES ACCESSED OUTSIDE OF THE CLASS (IN INSTANCES)
  public id: number;
  constructor(public name: string) {
    // Singer.count = Singer.count + 1;
    this.id = ++Singer.count; //++ used to increase the count property. ++ at the beginning implements the increment from 1 and at the end executes the increment from 0
    this.name = name;
  }
}

const newSinger = new Singer("simon");
const newSinger2 = new Singer("simon2");
console.log(Singer.count); //WE ACCESS THE STATIC MEMBERS THROUGH THE CLASS

//USE GET AND SET TO GET DATA AND SET DATA
//WITHOUT SET, THE PROPERTY IS INFERRED AS BEING READ ONLY

class Bands {
  //ANNOTATE THE DATASTATE TYPE WITH THE VISIBILITY MODIFIER PRIVATE
  private dataState: string[];
  constructor() {
    //SET THE INITIAL VALUE
    this.dataState = [];
  }
  //METHOD TO GET DATA
  public get dataArr(): string[] {
    return this.dataState;
  }
  //METHOD TO SET DATA
  //TS WILL CHECK IF THE DATA TYPE OF RETURNED VALUE IN GET FUNCTION MATCHES WITH THE THE DATA TYPE OF SETTING VALUE IN THE SET FUNCTION
  //GETTER AND SETTER DO NOT RETURN ANY TYPE ANNOTATION
  public set dataArr(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((ele) => typeof ele === "string" && ele !== "abc")
    ) {
      this.dataState = value;
      return; //Return to break the code execution
    } else {
      throw new Error("Errorfuewnfuewnfuewn");
    }
  }
}
//WHEN CALLING THE SETTER, WE CALL THE NAME OF IT WITHOUT () AND USE EQUAL OPERATOR TO PASS THE VALUE TO THE PARAMETER
const newBand = new Bands();
//WHEN USING THROWING ERROR, WE NEED TO CATCH IT. OTHERWISE, YOU WILL SEE UNCAUGHT ERROR
try {
  newBand.dataArr = ["hello", "haha", "abc"];
} catch (error) {
  console.log(error);
}
newBand.dataArr = [...newBand.dataArr, "new"]; //USE THE GETTER TO GET THE ARRAY AND THEN USE THE SPREAD OPERATOR TO CREATE A NEW ARRAY FOR UPDATING
//WHEN CALLING THE GETTER, WE CALL THE NAME OF IT WITHOUT ()
console.log(newBand.dataArr);
