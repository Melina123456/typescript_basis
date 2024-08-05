// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUsersss(user: User): User {
//   return { name: "dsa", email: "sdf", isActive: false };
// }

// createUsers({ name: "dsa", email: "sdf", isActive: false });

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "melina", isPaid: true });

// even if in main function we have name and isPaid but by creating newUser we are able to pass much more than what we passed in createUser function.

// let newUser = { name: "melina", isPaid: false, email: "melina@gmail.com" };

// createUser(newUser);

// function createCourse():{}{}
// first one is that you will return an object.

// function createCourse(): { name: string; price: number } {
//   return { name: "JavaScript Course", price: 100 };
// }

type Users = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

let myUser: Users = {
  _id: "123",
  name: "dsa",
  email: "dsa@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardDate &
  cardNumber & {
    cvv: number;
  };

myUser.creditCard = 1234567890123456;
myUser.email = "dsa1@gmail.com";
// myUser._id="1234567890";
