// function addNum(num) {
//   num.toUpperCase();
//   return num + 10;
// }
// addNum(5);
//since it is of type any it will not give any error in this case.
function addNum(num) {
    // num.toUpperCase(); // error: num is of type number, not string
    return num + 10;
    //   return "hello ";  if i dont give type to function  , it will also be accepted as well.
}
addNum(5); // it will not give any error as the input is of type number
function toUpperCase(word) {
    return word.toUpperCase();
}
toUpperCase("Melina");
function signUpUser(name, email, isPaid) { }
signUpUser("melina", "melina@gmail.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("melina", "melina@gmail.com");
var myValue = addNum(4);
// this function if we try to assign the type boolean , it will return error in else part and vice versa.how to handle it ?
var getValue = function (val) {
    if (val > 10) {
        return true;
    }
    else
        return "200 ok";
};
var getHello = function (s) {
    return "";
};
var heros = ["thor", "hulk", "iron man"];
// const heros=[1,2,3];
heros.map(function (hero) {
    return "hero: ".concat(hero);
    // return 1
});
function consoleError(errmsg) {
    // return "melina";
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
