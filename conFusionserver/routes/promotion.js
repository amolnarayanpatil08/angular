const express=require('express');
const bodyparser=require('body-parser');

const promotionrouter=express.Router();
promotionrouter.use(bodyparser.json());

promotionrouter.route('/')
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})

.post((req, res, next) => {
 res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotion');
})
 
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promotionrouter.route('/:promotionId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('will send details of the promotion ' +req.params.promotionId+' to you!');
})

 .post((req,res,next)=>{
    res.statusCode=403;
    res.end('post operation is not supported on promotionId:'+req.params.promotionId);})

 .put((req,res,next)=>{
    res.write('updating the promotion '+req.params.promotionId +'\n');
    res.end('will update the promotion '+req.body.name+' with the details '+req.body.discription);
})

 .delete((req,res,next)=>{
    res.end('deleting promotion:'+req.params.promotionId);});

module.exports=promotionrouter;