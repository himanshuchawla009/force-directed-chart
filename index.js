var express=require('express')
var path = require('path')
var app=express()
port=process.env.PORT || 8000
app.use(express.static(path.join(__dirname, 'public')));
app.get("/",function(req,res){
    res.render("index.html")
})
app.listen(port,function(){
    console.log("i m listenning")
})