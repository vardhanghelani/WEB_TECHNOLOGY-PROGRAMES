const express = require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
const faculty=require('./Faculty');
const connectionString ='mongodb://localhost:27017/FAcultiesDB'
mongoose.connect(connectionString).then(()=>{
    console.log('connected to database');
}).catch(err => {
    console.log(err.message);
})
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(7000,()=>{
    console.log('server started at port 7000');
})
//API ROUTES
//GET 
app.get('/faculty',async(req,res)=>{
    const ans= await faculty.find();
    res.json(ans);
});
//get by id
app.get('/faculty/:id',async(req,res)=>{
    const ans = await faculty.findOne({id:req.params.id});
    res.json(ans);
    });
    //create
    app.post('/faculty',async(req,res)=>{
        const fac=new faculty({...req.body});
        const ans=await fac.save();
        res.json(ans);
        });
        //update
        app.patch('/faculty/:id',async (req,res)=>{
            const fac= await faculty.findOne({id:req.params.id});
            fac.name=req.body.name;
            fac.designation=req.body.designation;
            const ans = await fac.save();
            res.json(ans);

        });
        //delete
        app.delete('/faculty/:id',async (req,res)=>{
            const ans = await faculty.deleteOne({id:req.params.id});
          res.send(ans);
        })
//Search
app.get('/faculty/',async (req,res)=>{

})
