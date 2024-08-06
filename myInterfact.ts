interface User {
  readonly _id: number;
  name: string;
  email: string;
  googleId?: string;

  // you can use one of the two methods
  // startTrial:()=>string
  startTrial(): string;
  getCoupon(name: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "learner" | "ta";
}

const user: Admin = {
  _id: 123,
  name: "melina",
  role: "admin",
  email: "m@m.com",
  githubToken: "1adfafdaf",
  startTrial: () => {
    return "melina";
    // return 10;
  },
  getCoupon: (name: "melina", off: 10) => {
    return 10;
  },
};
