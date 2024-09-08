const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("This is promise 1")
    }, 4000);
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is promise 2");
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
