const express=require('express');
const bodyparser=require('body-parser');

const dishrouter=express.Router();
dishrouter.use(bodyparser.json());

dishrouter.route('/')
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})

.post((req, res, next) => {
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})
 
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishrouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('will send details of the dish ' +req.params.dishId+' to you!');
})

 .post((req,res,next)=>{
    res.statusCode=403;
    res.end('post operation is not supported on dishId:'+req.params.dishId);})

 .put((req,res,next)=>{
    res.write('updating the dish '+req.params.dishId +'\n');
    res.end('will update the dish '+req.body.name+' with the details '+req.body.discription);
})

 .delete((req,res,next)=>{
    res.end('deleting dish:'+req.params.dishId);});

module.exports=dishrouter;