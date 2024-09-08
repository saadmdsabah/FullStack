async function asyncFunction(value) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(value);
        }, 3000);
    })
}

const resultCall = async ()=>{
    let result = await asyncFunction("This is an async await function call");
    console.log(result);
}
resultCall()