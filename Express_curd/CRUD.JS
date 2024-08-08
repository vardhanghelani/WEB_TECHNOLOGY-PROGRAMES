const express = require("express");
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

const items = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" },
    { id: 4, name: "jhonny" }

]
//read
app.get("/name", (req, res) => {
    res.send(items)
})
//create
app.post("/addData", (req, res) => {
    const name = req.body
    items.push(name);
    res.status(200);
    res.send(items);
});
//get by id
app.get("/items/:id",(req,res)=>{
    const {id} =req.params;
    const itemIndex = items.findIndex((i) =>
     i.id=== parseInt(id));
    if (itemIndex !== -1) {
        res.send(items[itemIndex]);
        
    } else {
        res.status(404).send("index not valid");
    }
})
//update
app.patch("/items/:id/:name",(req,res)=>{
    const id =req.params.id;
    const name=req.params.name;
    const itemIndex = items.findIndex((i) =>
     i.id=== parseInt(id));
    if (itemIndex !== -1) {
    items[itemIndex].name = name;
        res.send(items);
        
    } else {
        res.status(404).send("index not valid");
    }
})
//delete
app.delete("/items/:id",(req,res)=>{
    const id =req.params.id;
    const itemIndex = items.findIndex((i) =>
    i.id=== parseInt(id));
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.send();
    }
    else{
        res.status(404).send("index not valid");
    }
})
app.listen(4000, () => {
    console.log("server started at 4000");
})