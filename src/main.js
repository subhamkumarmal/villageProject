
//express objects
const { static } = require('express');
const express=require('express');
const expObj=express();

//PATH OBJECT
const path=require('path');

//PORT NO
const port=process.env.PORT || 4004;

// HBS INITIONLIZATION 
expObj.set('view engine','hbs');

//PUBLIC FILE
const publicPath=path.join(__dirname,'../public');
expObj.use(express.static(publicPath));



expObj.get('/',(req,res)=>{
res.render('homePage');
});

expObj.get('/school',(req,res)=>{
    res.render('school');
})

expObj.get('/about',(req,res)=>{
    res.end("Hi I'm subham kumar mal");
    });

expObj.listen(port,()=>{
    console.log("server is listaning...");
});
