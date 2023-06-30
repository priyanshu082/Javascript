//  some sample promises

const Dummy1 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ hello: "Hello world first Time", time: t });
    }, t);
  });
  return pr;
};
const Dummy2 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ hello: "Hello world second time", time: t });
    }, t);
  });
  return pr;
};

const Dummy3 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ hello: "Hello world third time", time: t });
    }, t);
  });
  return pr;
};

Promise.all([Dummy1(5000), Dummy2(2000), Dummy3(4000)]).then((res) =>
  console.log(res)
);

const myPromiseAll = (tasks) => {
  let count = 0;
  const output = [];
  const pr = new Promise((res, rej) => {
    tasks.forEach((promise, index) => {
      promise
        .then((result) => {
          output[index] = result;
          count++;
          if (count === tasks.length) res(output);
        })
        .catch((err) => rej(err));
    });
  });
  return pr;
};
myPromiseAll([Dummy2(2000), Dummy1(5000), Dummy3(4000)]).then((res) =>
  console.log("mypromise.all", res)
);
