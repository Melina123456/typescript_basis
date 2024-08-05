// function addNum(num) {
//   num.toUpperCase();
//   return num + 10;
// }

// addNum(5);
//since it is of type any it will not give any error in this case.

function addNum(num: number): number {
  // num.toUpperCase(); // error: num is of type number, not string
  return num + 10;
  //   return "hello ";  if i dont give type to function  , it will also be accepted as well.
}

addNum(5); // it will not give any error as the input is of type number

function toUpperCase(word: String) {
  return word.toUpperCase();
}

toUpperCase("Melina");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("melina", "melina@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("melina", "melina@gmail.com");

let myValue = addNum(4);

// this function if we try to assign the type boolean , it will return error in else part and vice versa.how to handle it ?
let getValue = (val: number) => {
  if (val > 10) {
    return true;
  } else return "200 ok";
};

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "hulk", "iron man"];
// const heros=[1,2,3];

heros.map((hero): string => {
  return `hero: ${hero}`;
  // return 1
});

function consoleError(errmsg: string): void {
  // return "melina";
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
