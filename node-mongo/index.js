const mongoclient=require('mongodb').MongoClient;
const assert=require('assert');
const dboper=require('./operation');

const url='mongodb://localhost:27017/';
const dbname='confusion';

mongoclient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connected to the server');
    const db=client.db(dbname);
   
    dboper.insertDocument(db,{name:"vadonut",description:'test'},'dishes',(result)=>{
        console.log('Insert Document:\n',result.ops);
        dboper.findDocument(db,'dishes',(docs)=>{
            console.log('Found Documents:\n',docs);
            dboper.updateDocument(db,{name:'vadonut'},{description:'updated test'},'dishes',(result)=>{
                console.log('Updated Document:\n',result.result);
                dboper.findDocument(db,'dishes',(docs)=>{
                    console.log('Found Documents:\n',docs);
                db.dropCollection('dishes',(result)=>{
                    console.log('Dropped collection: ',result)
                    client.close();
                });
            });
        });
    });
});
});