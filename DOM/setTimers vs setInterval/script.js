let count = 0;
const setIntervalId = setInterval(() => {
    count++;
    if(count == 5){
        clearInterval(setIntervalId);
    }
    console.log(count);
}, 3000);