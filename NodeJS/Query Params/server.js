const http = require("http")
const url = require("url")

const requestHandler = (req, res)=>{
    //Parsing the url using the url Module in JS
    const parsedURL = url.parse(req.url, true)
    const queryParams = parsedURL.query;
    console.log(queryParams);
    
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Page Not Found");
}

const server = http.createServer(requestHandler);

const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
})