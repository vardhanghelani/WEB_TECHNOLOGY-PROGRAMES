const http = require("http");
const fs=require("fs");
// const server=http.createServer((req,res)=>{
//     res.end("hello world")
// })


 const server=http.createServer((req,res)=>{
    if(req.url == "/about"){
        fs.readFile("about.html",(err,data)=>{
            if(err){
                res.end(err)
            }else{
                res.writeHead(200,"content-type","text/html");
                res.end(data)
            }
        })
    }
    else if(req.url == "/contact"){
        fs.readFile("contact.html",(err,data)=>{
            if(err){
                res.end(err)
            }else{
                res.writeHead(200,"content-type","text/html");
                res.end(data)
            }
        })
    }
    else{
        fs.readFile("home.html",(err,data)=>{
            if(err){
                res.end(err)
            }else{
                res.writeHead(200,"content-type","text/html");
                res.end(data)
            }
        })
    }
  
 })
 server.listen(3000,()=>{
    console.log("Server started at port 3000");
})