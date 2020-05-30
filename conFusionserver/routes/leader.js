const express=require('express');
const bodyparser=require('body-parser');

const leaderrouter=express.Router();
leaderrouter.use(bodyparser.json());

leaderrouter.route('/')
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})

.post((req, res, next) => {
 res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /leader');
})
 
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderrouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('will send details of the leader ' +req.params.leaderId+' to you!');
})

 .post((req,res,next)=>{
    res.statusCode=403;
    res.end('post operation is not supported on leaderId:'+req.params.leaderId);})

 .put((req,res,next)=>{
    res.write('updating the leader '+req.params.leaderId +'\n');
    res.end('will update the leader '+req.body.name+' with the details '+req.body.discription);
})

 .delete((req,res,next)=>{
    res.end('deleting leader:'+req.params.leaderId);});

module.exports=leaderrouter;