//INDEX SIGNATURE
interface FeeObjType1 {
  //CREATE AN INDEX SIGNATURE TO GETHER WITH OPTIONAL PROPERTY
  [index: string]: number | undefined; //WHEN USING OPTIOANL PROPERTY, THE VALUE OF THE PROPERTY CAN BE UNDEFINED
  book: number;
  food: number;
  vegetable: number;
  newBook?: number;
}

const feeObj1: FeeObjType1 = {
  book: 30,
  food: 20,
  vegetable: 10,
};

//WE CAN REASSGIN THE PROPERTY
feeObj1.newBook = 24;

//USE READONLY TO PREVENT ALL REASSIGNMENT
const feeObj2: Readonly<FeeObjType1> = {
  book: 30,
  food: 20,
  vegetable: 10,
};

///WE CAN NOT REASSGIN THE PROPERTY

// feeObj2.newBook = 24;

//USE READONLY FOR SELECTED PROPERTIES
interface FeeObjType2 {
  //THE DATA TYPE OF THE PROPERTY AS WELL AS THE INDEX IS STRING AND THE DATA TYPE OF THE RETURNED VALUE CAN BE TYPES INCLUDED IN THE OBJECT
  [index: string]: number | undefined;
  readonly book: number;
  food: number;
  vegetable: number;
  newBook?: number;
}

const feeObj3: FeeObjType2 = {
  book: 20,
  food: 14,
  vegetable: 13,
};
feeObj3.newBook = 20;

//WE CAN NOT ASSIGN A NEW VALUE FOR THE BOOK PROPERTY
// feeObj3.book = 12;

//FUNCTION TO CALCULATE THE TOTAL FEE
const sumFunc = function (feeObj: FeeObjType2): number {
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

//INTERFACE FOR AN OBJECT WITH ONLY INDEX SIGNATURE HELPS ANNOTATE THIS OBJECT WITH THE MOST GENERAL DATA TYPE DEFINITIONS
interface FeeObjType3 {
  [index: string]: number;
}

const feeObj4: FeeObjType3 = {
  food: 12,
};

//WE CAN ADD MORE AND MORE PROPERTIES THAT WE WANT WITHOUT THE NEED TO DEFINE THE DATA TYPE FOR THE NEW ADDED PROPERTIES IN THE INTERFACE
feeObj4.play = 16;

const sumFunc2 = function (feeObj: FeeObjType3): number {
  let total = 0;
  //SINCE THE PROPERTY NOW IS LITTERAL SO WE DO NOT NEED TO NARROW ITS DATA TYPES
  for (const property in feeObj) {
    total = total + feeObj[property];
  }
  return total;
};

//TYPESCRIPT CAN NOT SEE THE FUTURE SO IT DOES NOT SHOW ANY ERROR WHEN YOU TRY TO ACCESS AN NON EXISTING PROPERTY
console.log(feeObj4.swim);

//INTERFACE FOR AN OBJECT WITH ONLY INDEX SIGNATURE AND READONLY
interface FeeObjType4 {
  readonly [index: string]: number; //All properties are readonly
}

const feeObj5: FeeObjType4 = {
  food: 13,
};

interface FeeObjType5 {
  readonly [index: string]: number; //All properties are readonly except food
  food: number;
}

const feeObj6: FeeObjType5 = {
  food: 13,
  name: 15,
};
//WE CAN ASSIGN A NEW VALUE FOR THE FOOD SINCE FOOD IS NOT ANNOTATED WITH READONLY
feeObj6.food = 15;
//CAN NOT ASSIGN NEW VALUE FOR THE NAME PROPERTY SINCE IT IS READONLY
// feeObj6.name = 48;

//CAN NOT REASSIGN
// feeObj5.food = 25;

//USE INDEX SIGNATURE FOR AN ARRAY
type arrType = {
  readonly [index: number]: number;
};

const array12: arrType = [1, 2, 3, 4, 5];

//READONLY PREVENTS ASSIGNMENT FOR ALL ELEMENTS
// array12[0] = 2;

//WHAT HAPPEN WHEN WE USE READONLY FOR THE INDEX SIGNATURE
interface Obj1234 {
  readonly [index: string]: string | number;
  name: string;
}

const obj1234: Obj1234 = {
  name: "simon",
  age: 18,
};

//ALL PROPERTIES ARE READONLY BUT NAME IS NOT READONLY
obj1234["name"] = "feaewf";
//WE CAN NOT CHANGE AGE OR ADD NEW PROPERTIES SINCE THEY ARE READONLY
// obj1234["age"] = 29;
// obj1234["food"] = "abc";

//USE KEYOF OPERATOR TO ADD TYPE ASSERTION FOR AN INDEX
interface NewObjType {
  name: string;
  age: number;
}

const newObj: NewObjType = {
  name: "simon",
  age: 18,
};

for (const prop in newObj) {
  console.log(`${prop}:${newObj[prop as keyof NewObjType]}`);
}

//IF WE DO NOT KNOW THE INTERFACE OF THE OBJECT, WE CAN DO THIS
for (const prop in newObj) {
  console.log(`${prop}:${newObj[prop as keyof typeof newObj]}`);
}

//WE CAN USE KEYOF IN PARAMETERS
const showData = function (obj: NewObjType, key: keyof NewObjType): void {
  console.log(`${key}:${obj[key]}`);
};

showData(newObj, "age");

//USE RECORD UTILITY TYPE TO ANNOTATE FOR AN OBJECT
//CAN NOT ANNOTATE THE DATA TYPE FOR A SPECIFIC PROPERTY
//CAN USE LITERAL TYPE TO ANNOTATE THE INDEX WITH THE RECORD UTILITY
type KeyType123 = "a" | "b" | "c";
type KeyAndValueType = Record<KeyType123, number>; //The index data type is annotated with the literal type and the data type of the values is number
const objectWithLiteralType: KeyAndValueType = {
  a: 1,
  b: 3,
  c: 2,
};
for (const prop in objectWithLiteralType) {
  console.log(
    `${prop}:${objectWithLiteralType[prop as keyof KeyAndValueType]}` //WE NEED TO USE KEYOF TO IMPLEMENT ASSERTION FOR THE INDEX VARIABLE IF WE USE THE RECORD UTILITY TYPE
  );
}
