const functionResult = async function(){
    return new Promise((resolve, reject)=>{
        if(Math.random() > 0.5){
            resolve("Success")
        }else{
            reject("Fail")
        }
    })
}

const resultFunction = async ()=>{
    try{
        let result = await functionResult()
        console.log(result);
    }catch(error){
        console.log(error);
    }
}
resultFunction()