const express=require('express');
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded());
const students=[
    {
        id:1167,
        name:'samarth',
        email:'samarth@darshan.ac.in',
        age:12
    },
    {
        id:1243,
        name:'dhrumil',
        email:'dhrumilh@abcd.ac.in',
        age:21
    },
]
//create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send('student created');
});
//read
app.get('/students',(req,res)=>{
res.send(students);
});

//readbyid
app.get('/students/:id',(req,res)=>{
    const id=req.params.id;
    const ans=students.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    })
res.send(ans);
});
//update
app.put('/students/:id',(req,res)=>{
    const indexToEdit=students.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    })
    students[indexToEdit]=req.body;
    res.send("student edited");
})
//delete
app.delete('/students/:id',(req,res)=>{
    const indexToDelete=students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
            }
            })
            students.splice(indexToDelete,1);
            res.send("student deleted");
        });
        
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})