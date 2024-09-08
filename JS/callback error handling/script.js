const divideNumber = (dividend, divisor, callback)=>{
    console.log("Calculating ...");
    
    setTimeout(() => {
        if (divisor == 0) {
          callback(new Error("Cannot divide Element by Zero"), null);
        } else {
          callback(null, dividend / divisor);
        }
    }, 1000);
}

divideNumber(3,10,function (error, result){
    if(error){
        console.log(('Error', error.message));
        return;
    }else{
        console.log(`Result: ${result}`);
    }
})