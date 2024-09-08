const url = "https://jsonplaceholder.typicode.com/posts";

// const fetchData = ()=>{
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// fetchData()

const fetchData = async ()=>{
    try{
        let result = await fetch(url);
        const data = await result.json();
        console.log(data);  
    }catch(error){
        console.log(error.message);
    }
}
fetchData()