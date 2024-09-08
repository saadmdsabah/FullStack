const promiseChain1 = function(){
    return new Promise((resolve, reject)=>{
        resolve("Step 1 Completed");
    })
}

const promiseChain2 = function () {
  return new Promise((resolve, reject) => {
    resolve("Step 2 Completed");
  });
};

const promiseChain3 = function () {
  return new Promise((resolve, reject) => {
    resolve("Step 3 Completed");
  });
};

promiseChain1().then((result, err)=>{
    console.log(result);
    return promiseChain2();
}).then((result)=>{
    console.log(result);
    return promiseChain3()
}).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})