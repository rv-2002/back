var exprees=require('express');
var http=require('http');
var app=exprees();
var mongos=require('mongoose');
var hbs=require('hbs');
var body=require('body-parser');
var path=require('path');
var admin=require('./routes/route');
var cors=require('cors');
app.use(cors(
    {
      origin: "http://localhost:4200"
    }
  ));
mongos.connect('mongodb://localhost:27017/hand');
app.use(body.urlencoded({extended:true}));

app.use(body.json());

app.set('views',path.join(__dirname,'views'));

app.set('view engine','hbs');

app.use(admin);
app.listen(5000,(req,res)=>
{
    console.log("connect!!!");
    
})

