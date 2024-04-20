const Pr = new Promise((res, rej) => {
  try {
    const result = fetch("https://dummyjson.com/products?limit=10");
    res("data1:-",result);
  } catch (error) {
    console.log("error", error);
  }
});
Pr.then((res) => console.log("Promise data",res));
console.log("hello world");

const fetchDataHandler = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=2");
  const data = await response.json();
  console.log("data", data);
  console.log("hello world");
};

fetchDataHandler();

console.log("hello main");
