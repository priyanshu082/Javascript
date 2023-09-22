const Add2 = (num) => num + 2;

const Sub30 = (num) => num - 30;

const Multiply10 = (num) => num * 10;

const IsPositive = (num) => Math.abs(num);

const result = IsPositive(Multiply10(Sub30(Add2(10))));

const pipe =
  (...fns) =>
  (input) =>
    fns.reduce((currentValue, func) => func(currentValue), input);

const res = pipe(Add2, Sub30, Multiply10, IsPositive)(10);
console.log(res, result);