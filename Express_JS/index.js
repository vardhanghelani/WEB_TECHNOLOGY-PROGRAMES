const express = require("express");
const app = express();
const path= require("path")
app.get("",(req,res)=>{
    res.send("Hello World");
})
app.get("/home",(req,res)=>{
    res.send("Hello World from home");
})
app.get("/about",(req,res)=>{
    res.send("Hello World from about");
})
app.get("/help",(req,res)=>{
    res.send("Hello World from help");
})
app.get("/abc",(req,res)=>{
    res.sendFile(path.join(__dirname,"abc.html"));
})
app.get("/first",(req,res)=>{
    res.sendFile(path.join(__dirname,"first.html"));
})
app.get("/second",(req,res)=>{
    res.sendFile(path.join(__dirname,"second.html"));
})
app.get("/third",(req,res)=>{
    res.sendFile(path.join(__dirname,"third.html"));
})

app.get("/user/:name",(req,res)=>{
    const myname=req.params.name
    res.send(`Hello ${myname}`);
})
app.listen(8000,()=>{
    console.log("server is running on port 8000");
})