var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");


app.get("/",function(req,res){
    res.render("landing");
});

app.get("/start",function(req,res){
    res.render("start");
});

app.get("/question",function(req,res){
    res.render("question");
});

app.get("/result",function(req,res){
    res.render("result");
});

app.get("/again",function(req,res){
    res.render("again");
});

app.listen( process.env.PORT, process.env.IP, function(){
    console.log("Server up.");
});