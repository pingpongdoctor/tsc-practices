//USE GENERICS TO ALLOW ANY TYPE VALUE
const isObj = function <T>(input: T): boolean {
  return typeof input === "object" && !Array.isArray(input);
};

console.log(isObj({})); //TRUE
console.log(isObj([])); //FALSE

//CREATE A FUNCTION WITH GENERICS TYPE AND INTERFACE
interface TypeOfReturnValue<T> {
  value: T;
  is: boolean;
}

//BY USING GENERICS TYPE BELOW, WE ENSURE THE THE TYPE OF THE VALUE PROPERTY IS THE SAME WITH THE TYPE OF THE INPUT
//WANT TO USE THE DATA TYPE OF THE INPUT AS THE TYPE OF THE OUTPUT
const isTrue = function <T>(input: T): TypeOfReturnValue<T> {
  //instead we can directly annotate the returned value TypeOfReturnValue<T>
  //IF EMPTY ARRAY, RETURN FALSE
  if (Array.isArray(input) && !input.length) {
    return { value: input, is: false };
  }
  //WE NEED TO USE TYPE ASSERTION TO LET TYPESCRIPT KNOW THAT INPUT IS AN OBJECT WHEN WE USE IT INSIDE OF THE OBJECT.KEYS
  if (isObj(input) && !Object.keys(input as Object).length) {
    return { value: input, is: false };
  }
  return { value: input, is: !!input };
};

//USE GENERIC TYPE WITH THE EXTENDS KEY WORD
interface FilmType {
  [index: string]: number | string;
  id: number;
}
interface ReturnFilm<T> {
  obj: T;
} //THE T IS EXTENDED FROM THE FILMTYPE SO THE OBJECT THAT IS INPUT AS AN ARGUMENT VALUE MUST HAS THE ID:NUMBER KEY VALUE PAIR
const showFilm = function <T extends FilmType>(filmObj: T): ReturnFilm<T> {
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
const showArr = function <T extends FilmType, K extends keyof T>(
  filmArr: T[],
  key: K
): T[K][] {
  //T[K] IS USED TO ACCESS THE KEY INSIDE THE T AND T[K][] EXPRESS AN ARRAY OF VALUES GOTTEN FROM T OBJECT BY USING K
  return filmArr.map((film) => film[key]);
};
console.log(showArr(filmArr, "age"));

//CREATE AC CLASS WITH GENERIC TYPE
//USE GENERIC TYPE TO BUILD THE RELATION BETWEEN THE DATA TYPE OF A PROPERTY AND THE INPUT DATA OF A SETTER

class StudentClass1<T> {
  constructor(private data: T) {
    this.data = data;
  }

  public get database() {
    return this.data;
  }

  public set database(value: T) {
    this.data = value;
  }
}

const newStudent12345 = new StudentClass1(["e", "v"]);
newStudent12345.database = [...newStudent12345.database, "a", "b"];
console.log(newStudent12345.database);
