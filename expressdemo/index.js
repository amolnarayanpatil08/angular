const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const dishrouter=require('./routes/dishrouter');
const promotionrouter=require('./routes/promotion');
const leaderrouter=require('./routes/leader');
const port =3000;
const hostname='localhost';

const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use('/dishes',dishrouter);
app.use('/promotions',promotionrouter);
app.use('/leaders',leaderrouter);
app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello Express </h1></body></html');
});


const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server is running at https://${hostname}:${port}`);
})