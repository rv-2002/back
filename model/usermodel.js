var mongo=require('mongoose');

var userschema=new mongo.Schema({
    name:String,
    age:Number,
    email:String,
    pass:String,
    mobile:String
})

var user=mongo.model('table',userschema);
module.exports=user;