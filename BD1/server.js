
//step1: create a folder
//step2:  move into that folder
//step3: npm init -y
//step4: Open folder using VSCODE
//step5: npm i express
//step6: create server.js

//Server Instatiate
const express=require("express");

const app=express();
const  port=5000

//used to parse req.body in express ->PUT OR POST
const bodyParser=require('body-parser');

//specifically parse JSON data & add it to the request.Body Object
app.use(bodyParser.json())

//active the server on 5000
app.listen(port,()=>{
    console.log("server start at port no",port)
})

app.get('/',(req,res)=>{
    res.send("it's get request ")
})

app.post('/api/car',(req,res)=>{
    const {name ,band}=req.body;
    console.log(name);
    console.log(band);
    res.send("car submitted successfully")
})
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/datacreated',{
    useNewurlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongodb conntected")
}).catch((error)=>{
    console.log("show error",error)
})
