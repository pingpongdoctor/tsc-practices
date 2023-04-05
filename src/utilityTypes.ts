//UTILITY TYPES HELP TYPE TRANSFORMATION
//PARTIAL CONSTRUCT A TYPE WITH ALL OPTINAL PROPERTIES FROM THESUBSETS OF AN ORIGINAL TYPE
interface Assignment {
  id: number;
  name: string;
  age: number;
  verify?: boolean;
}

const updateAssignment = function (
  currentAssignment: Assignment,
  updateAssignment: Partial<Assignment>
): Assignment {
  return { ...currentAssignment, ...updateAssignment };
};
console.log(updateAssignment({ id: 1, name: "simon2", age: 18 }, { id: 2 }));

//REQUIRED CONSTRUCT A TYPE WITH ALL PROPERTIES SET REQUIRED
const returnAssigment = function (assignment: Required<Assignment>) {
  return assignment;
};

returnAssigment({ id: 1, name: "fafaw", age: 17, verify: true });

//READONLY CONSTRUCTS A TYPE WITH ALL PROPERTIES SET TO READONLY
const newAssignment: Readonly<Assignment> = {
  id: 3,
  name: "abc",
  age: 17,
  verify: false,
};

// newAssignment.id = 1; //YOU CAN NOT CHANGE ANY OF THE PROPERTIES SINCE THEY ARE READONLY

//RECORD CONSTRUCT A TYPE THAT HAVE KEY AND VALYE DATA ANNOTATION
type GameName = "A" | "B" | "C"; //THE OBJECT MUST INCLUDE ALL OF THESE PROPS
type GamePrice = 18 | 29 | 49; //THE VALUES MUST BE INCLUDED IN THIS UNION TYPE
type GameInfor = Record<GameName, GamePrice>;

const newGameObj: GameInfor = {
  A: 49,
  B: 18,
  C: 29,
};

//PICK CONSTRUCTS A TYPE THAT HAS PROPS PICKED FROM AN ORIGINAL TYPE
const newAssignment1: Pick<Assignment, "name" | "age" | "verify"> = {
  name: "abc",
  age: 18,
  verify: true,
};

//OMIT CONSTRUCTS A TYPE BASED ON OMITTING SOME PROPS FROM AN ORIGINAL TYPE
const newAssignment2: Omit<Assignment, "name" | "verify"> = {
  age: 18,
  id: 1,
};

//EXCLUDE AND EXTRACT ARE USED WHEN YOU WORK WITH UNION TYPE
type UnionType = "A" | "B" | "C";
const a: Exclude<UnionType, "A" | "C"> = "B";
const b: Extract<UnionType, "A" | "B"> = "A";
type NewUnionType = Exclude<UnionType, "A">;
const c: NewUnionType = "B";

//NONNULLABLE TYPE EXCLUDE THE UNDEFINED AND NULL DATA TYPES
type PossibleTypes = string | number | boolean | undefined | null;
type NewPossibleTypes = NonNullable<PossibleTypes>;

//RETURN TYPE IS USED TO GET THE DATA TYPE OF THE RETURNED VALUE FROM A FUNCTION
//WE USE RETURN TYPE WHEN WE WORK WITH THE FUNCTIONS IN LIBRARIES
//WHEN THE RETURNED VALUES' DATA TYPES ARE CHANGED, THEY CAN BE CAUGHT BY USING THE RETURN TYPE
const returnObject = function (name: string, age: number) {
  if (name === "abc") {
    return "abc";
  }
  return { name: name, age: age };
};
type returnType = ReturnType<typeof returnObject>;

const returnValue123: returnType = returnObject("simon", 18);
console.log(returnValue123);

const returnValue1234: returnType = returnObject("abc", 18);
console.log(returnValue1234);

//PARAMETERS CONSTRUCT A TUPLE TYPE BASED ON THE PARAMETERS AND THEIR TYPES IN A FUNCTION
type paraTypes = Parameters<typeof returnObject>; //THE TUPLE TYPE IS [string, number]
const paraArr: paraTypes = ["simon", 18];
const returnValue234: returnType = returnObject(...paraArr);

//WHEN SPREADING AN ARRAY TO ELEMENTS THAT ARE USED AS PARAMETERS IN A FUNCTION, WE NEED TO ADD TUPLE TYPE FOR THE ARRAY
const ara: [number, number, number] = [1, 2, 3];
const fun = function (a: number, b: number, c: number) {
  console.log(a, b, c);
};

fun(...ara);

//AWAITED HELPS GET RETURN TYPE FROM A PROMISE
const API =
  "https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_ScDDRW6TjG2ASdalj0rTNXi3dc65Kz1AuRQh5QYlg06NMO52DdpkaKPWhzOWHxHI";

//GETDATA IS HANDLING A PROMISE
const getData = async function () {
  const data = await fetch(API);
  return data;
};

type DataType = Awaited<ReturnType<typeof getData>>;

getData()
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
