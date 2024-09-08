// const newPromise = new Promise((resolve, reject)=>{
//     const success = true;
//     if(success){
//         resolve("The promise was successful")
//     }else{
//         reject("the promise was a fail")
//     }
// })

// newPromise.then((result)=>{
//     console.log(result);
// }).catch((reject)=>{
//     console.log(reject);
// }).finally(()=>{
//     console.log("The is the finally statement");
// });


const everOddPromise = function (number){
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        resolve("This is an even number");
      } else {
        reject("This in not an even number");
      }
    });
}

everOddPromise(5).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("This is the finally statement");
})