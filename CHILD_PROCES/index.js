const cp= require("child_process");

cp.exec("java Odd_Even.java" ,(data,stdout,stdin)=>{

    console.log(stdout);
})