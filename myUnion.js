var score = 100;
score = 200;
score = "200";
var melina = { name: "melina", id: 1 };
melina = { username: "admin", id: 2 };
// function dbId(id: number | string) {
//   console.log(`id: ${id}`);
// }
dbId(1);
dbId("2");
function dbId(id) {
    // id.toUpperCase();
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
    else {
        id.toFixed();
    }
}
var data = [1, 2, 3, 4, 5];
var datas = ["1", "2", "3", "4", "5"];
// const datum :number[] |  string[] = [1,2,3,"4","5"];   this is wrong method
// const datum :number |  string[] = [1,2,3,"4","5"];   this is wrong method
var datum = [1, 2, 3, "4", "5"];
var seatAllotment;
seatAllotment = "window";
// seatAllotment="crew"; //error
