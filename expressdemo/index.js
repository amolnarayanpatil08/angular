const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const port =3000;
const hostname='localhost';

const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());

app.all('/dishes',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('will send all dishes to yoy!');
});

app.post('/dishes',(req,res,next)=>{
    res.end('will add dish:'+req.body.name + ' with the discription'+ req.body.discription);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end('put operation is not supported on /dishes');
});

app.delete('/dishes',(req,res,next)=>{
    res.end('deleting all the dishes');
});

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('will send details of the dish' +req.params.dishId+'to yoy!');
});

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end('post operation is not supported on dishId:'+req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
    
    res.write('updating the dish '+req.params.dishId +'\n');
    res.end('will update the dish '+req.body.name+' with the details'+req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('deleting dish:'+req.params.dishId);
});


app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello Express </h1></body></html');
});

const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server is running at https://${hostname}:${port}`);
})