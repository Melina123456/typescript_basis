// let user: (string | number)[] = [3, "hello", 1, 2];

let user: [string, boolean, number];

user = ["mleina", true, 2];
//in precise order

let rgb: [number, number, number] = [111, 222, 444];

type User = [number, string];

const newUser: User = [111, "Melina"];

newUser[1] = "melina@melina.com";

// newUser.push(true);
