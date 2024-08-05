function createUsers(user) {
    return { name: "dsa", email: "sdf", isActive: false };
}
createUsers({ name: "dsa", email: "sdf", isActive: false });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "melina", isPaid: true });
// even if in main function we have name and isPaid but by creating newUser we are able to pass much more than what we passed in createUser function.
var newUser = { name: "melina", isPaid: false, email: "melina@gmail.com" };
createUser(newUser);
// function createCourse():{}{}
// first one is that you will return an object.
function createCourse() {
    return { name: "JavaScript Course", price: 100 };
}
var myUser = {
    _id: "123",
    name: "dsa",
    email: "dsa@gmail.com",
    isActive: false,
};
myUser.creditCard = 1234567890123456;
myUser.email = "dsa1@gmail.com";
// myUser._id="1234567890";
