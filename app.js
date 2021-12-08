const express=require('express');
const app=express()


app.get('/',(req,res)=>{
    res.send("hello alvi")
})

app.listen(8000,()=>{
    console.log('Server running')
})

console.log("180042114");