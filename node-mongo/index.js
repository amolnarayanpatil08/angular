const mongoclient=require('mongodb').MongoClient;
const assert=require('assert');
const dboper=require('./operation');

const url='mongodb://localhost:27017/';
const dbname='confusion';

mongoclient.connect(url).then((client)=>{
    console.log('Connected to the server');
    const db=client.db(dbname);
   
    dboper.insertDocument(db,{name:"vadonut",description:'test'},'dishes').then((result)=>{
        console.log('Insert Document:\n',result.ops);
       return  dboper.findDocument(db,'dishes');
    })
    .then((docs)=>{
            console.log('Found Documents:\n',docs);
            return dboper.updateDocument(db,{name:'vadonut'},{description:'updated test'},'dishes');
    })
            .then((result)=>{
                console.log('Updated Document:\n',result.result);
                return dboper.findDocument(db,'dishes');})
                .then((docs)=>{
                    console.log('Found Documents:\n',docs);
                return db.dropCollection('dishes');})
                .then((result)=>{
                    console.log('Dropped collection: ',result)
                   return client.close();
                })
                .catch((err)=>console.log(err));
})
.catch((err)=>console.log(err));