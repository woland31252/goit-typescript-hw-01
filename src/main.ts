import './style.css'
import './basic/1.ts'
// src/main.ts

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

let isDone: boolean = false;
let demical: number = 10;
let float: number = 3.14;
let hex: number = 0xf00d;
let color: string = 'red';
let empty: null = null;
let notParam: undefined = undefined;

console.log(isDone, demical, float, hex, color, empty, notParam)

function foo(num: number, str: string, bool: boolean, empty: null) {
  console.log(num, str, bool, empty);
}
console.log(foo(1, 'radio', true, null))

function func(num=10, str='World', bool=false, empty=null) {
  console.log(num, str, bool, empty);
}
console.log(func(12, 'Etherrum', true, null))

const obj: object = {};
const dary: {} = {};

let user: {name: string, age: number} = {
  name: "Jon",
  age: 24,
}

console.log(obj, dary, user);

let newUser: {name: string, age: number} = {
  name: 'Mary',
  age: 30,
}

console.log(newUser)

type User={
  name: string,
  age: number,
}

let userOne: User = {
  name: 'Arnold',
  age: 44,
}

let userOwnType: User = {
  name: 'Samanta',
  age: 23,
}

console.log(userOne, userOwnType);

interface Users {
  name: string,
  age: number,
  rating: number,
}

let userMan: Users = {
  name: 'Daniel',
  age: 45,
  rating: 3.67,
}

console.log(userMan)

let arrString: string [];
arrString = ['ww', '4', 'dfg', 'as'];

let arrNum: number[]
arrNum = [1, 22, 44, 32]

let matrix: number[][]
matrix = [[1, 2], [3, 5]]

let mixed: (number | string)[]
mixed = [1, 3, 'ss', 33, 'qa']

let numbers: Array<number>
numbers = [1, 2, 3,]

let usersPerson: {
  name: string;
  age: number;
}[]
usersPerson = [
  { name: 'Tom', age: 20 },
  { name: 'Jon', age: 66 },
]

type Persons = {
  name: string,
  age: number,
}
let players: Persons[] = [
  {
    name: 'Deryc',
    age: 33,
  },
  {
    name: 'Piter',
    age: 22,
  }
]

console.log(players)

let notSure: any = 4;
notSure = "Hello";
notSure = false;
notSure = {}

let numDer: number;

numDer = notSure;

let fixed: [string, number];
fixed = ["feg", 10]

let fixArr: [...string[], number]
fixArr = ['ss', '10', '22', 33]

enum Role {
  ADMIN,
  USER,
}

const person = { role: Role.ADMIN }
if (person.role === Role.ADMIN) {
  console.log(Role.ADMIN)
}
