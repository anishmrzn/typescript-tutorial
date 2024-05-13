// let character = "mario";
// // let age = 30;
// // let isBlackBelt = false;

// // // character = 20;
// character = "anish";
// console.log(character);
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };

// // console.log(circ(7.5));

// let names = ["anish", "astha", "snow"];

// // names.push(25);
// names.push("rayy");

// // names.forEach(function (t) {
// //   console.log(t);
// // });

// let ninja = {
//   name: "anish",
//   belt: "black",
//   age: "20",
// };

// ninja.age = "40";
// // console.log(ninja);

// // ninja.skills = ["fighting", "sneaking"]; error

// let characters: string;
// let fight: string[];

// const logMovies = (num1: number, num2: number) => {
//   return num1 + num2;
// };

// console.log(logMovies(1, 2));

let greet: Function;

// greet = 'hello';

greet = () => {
  console.log("hello", "again");
};
// console.log(greet);

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};

add(5, 20);

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greetAgain = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello`);
};
const greetAgain1 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

