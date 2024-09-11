//import modules
const http = require("http");
//define the handler
const requestHandler = (req, res)=>{
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World")
    
}
//create server
const server = http.createServer(requestHandler)
//start server
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
})