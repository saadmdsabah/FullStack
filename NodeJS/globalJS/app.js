// console.log(global);
global.myMyGlobal = "Hello it's me from Global";

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Hello World");
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
