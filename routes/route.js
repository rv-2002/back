var express=require('express');

var route=express.Router();

var user=require('../model/usermodel');

route.post('/new',async(req,res)=>
{
 const data=await user({
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,
    pass:req.body.pass,
    mobile:req.body.mobile
 })
 data.save();
 res.send({'status':true,'message':'account Created'});
 console.log(data);
})

route.get('/views',async(req,res)=>
{
    const data=await user.find();
    res.send(data);
})
route.get('/views/:id',async(req,res)=>
    {
        const data=await user.findOne({_id:req.params.id});
        res.send(data);
    })
route.get('/delete/:id',async(req,res)=>
{
    const dell= await user.deleteOne({_id:req.params.id});
    res.send(dell);
})
route.post('/update/:id',async(req,res)=>
{
    
  const edit= await user.updateOne({_id:req.params.id},{$set:
        {
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            pass:req.body.pass,
            mobile:req.body.mobile
        }
    });
    res.send(edit);
})
route.post('/login',async(req,res)=>
{
    if(await user.findOne({email:req.body.email}))
    {
        if(await user.findOne({pass:req.body.pass}))
        {
            res.send({'status':true,'message':'Login Succes'});
        }
        else

        {
            res.send({'status':false,'message':'Invalid Password'});
        }
    }
    else
    {
        res.send({'status':false,'message':'Login Failed'});
    }
})
module.exports=route;