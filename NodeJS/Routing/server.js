const http = require("http")
const url = require("url")

const requestHandler = (req, res)=>{
    //Parsing the url using the url Module in JS
    const parsedURL = url.parse(req.url, true)
    
    //!Home Page
    if(parsedURL.pathname === "/" && req.method === "GET"){
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("This is the Home Page");
    }

    //!About Page
    else if (parsedURL.pathname === "/about" && req.method === "GET") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("This is the About Page");
    }

    //!Page Not Found
    else{
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Page Not Found");
    }
}

const server = http.createServer(requestHandler);

const PORT = 3000
server.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
})