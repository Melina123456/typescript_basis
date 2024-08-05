let score: number | string = 100;
score = 200;
score = "200";

type user = {
  name: string;
  id: number;
};

type admin = {
  username: string;
  id: number;
};

let melina: user | admin = { name: "melina", id: 1 };

melina = { username: "admin", id: 2 };

// function dbId(id: number | string) {
//   console.log(`id: ${id}`);
// }

dbId(1);
dbId("2");

function dbId(id: number | string) {
  // id.toUpperCase();
  if (typeof id === "string") {
    id.toLocaleLowerCase();
  } else {
    id.toFixed();
  }
}

const data: number[] = [1, 2, 3, 4, 5];
const datas: string[] = ["1", "2", "3", "4", "5"];

// const datum :number[] |  string[] = [1,2,3,"4","5"];   this is wrong method
// const datum :number |  string[] = [1,2,3,"4","5"];   this is wrong method

const datum: (number | string)[] = [1, 2, 3, "4", "5"];

let seatAllotment: "ailse" | "window" | "middle";
seatAllotment = "window";
// seatAllotment="crew"; //error
