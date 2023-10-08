const User1 = {
  firstname: "Harsh",
  lastname: "Raghav",
  age: 20,
  userInfo: function (post, exp) {
    return `${this.firstname} ${this.lastname} is ${this.age} year old and he is ${post} with ${exp} year of experience.`;
  },
};
const User2 = {
  firstname: "Anmol",
  lastname: "Raghav",
  age: 18,
};

console.log(User1.userInfo.apply(User1, ["Software Engineer", 2]));

Function.prototype.MyApply = function (context, args) {
  if (typeof this !== "function")
    throw new TypeErrorI(`${this}.MyApply is not a function.`);
  if (!Array.isArray(args)) throw new TypeError(`${args} is not valid array`);
  const index = Date.now();
  context[index] = this;
  const result = context[index](...args);
  return result;
};
console.log(User1.userInfo.MyApply(User1, ["Software Engineer", 2]));
