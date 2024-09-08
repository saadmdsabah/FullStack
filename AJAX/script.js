const url = "https://jsonplaceholder.typicode.com/posts";

//create a new XMLHttpRequest
const xhr = new XMLHttpRequest();

//configure the request
xhr.open('GET', url, true)

//Attach event listener to handle changes in the request state
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(JSON.parse(xhr.responseText));
    }else{
        console.log(xhr.statusText);
    }
}

xhr.send();
