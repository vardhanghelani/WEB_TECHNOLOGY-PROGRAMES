const express = require("express")
const app = express();
const Validate1=(req,res,next)=>{
   console.log("validate 1 called");
   next();

}
const Validate2=(req,res,next)=>{
    console.log("validate 2 called");
 next();
 }

app.get("/home",Validate1,Validate2, (req,res,next) => {
    res.send("home page");
    next();

})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})