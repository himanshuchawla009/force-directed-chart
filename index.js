var express=require('express')
var path = require('path')
var app=express()
app.use(express.static(path.join(__dirname, 'public')));
app.listen(2200,function(){
    console.log("i m listenning")
})