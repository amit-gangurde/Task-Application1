//Crud operation read,update,delete

const mongodb=require('mongodb');
const connectionUrl='mongodb://localhost:27017';
const databaseName='taskapp';
const{MongoClient,ObjectID}=require('mongodb');
const id=ObjectID();
console.log(id); 
 console.log(id.getTimestamp());
 console.log(id.id);
 console.log(id.toHexString().length);


MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{

if(error)
{
    console.log('Connection Failed');
}
console.log('Connection Created with MongoDB');
const db=client.db(databaseName);

db.collection('user').insertMany([{
   "Role":"Engg",
   "Emp":"gajanana"

},{
    "Role":"zxvc",
    "Emp":"sdf"
 }
],(error,result)=>{
    if(error)
    {
        console.log('Data not inserted many to many');
    }
    else
    {
      
        console.log(result.ops);

    }
})

db.collection('users').insertOne(
    {
        "Name":"Sameer",
        "LastName":"Shaikh"
    },(error,result)=>{
        if(error)
        {
          console.log('Data Not Inserted ');

        }         
        console.log(result.ops);        
        })   

console.log('connection created');
// const db=client.db(databaseName);


db.collection('users').findOne({'Name':'Ashish'},(error,user)=>{

if(error)
{
  return console.log('Unable to fetch');

}
else
{
  console.log(user);
}
})


console.log('*********');
console.log('Find One Data');  
db.collection('users').findOne({ _id:ObjectID("5f46008f80d09e26a4642203")},(error,result)=>{
    if(error)
    {
        console.log('NOt present');
    }
else{ 
console.log(result);
}})


//find one code
console.log('*********');
console.log('Find Data');
db.collection('users').find({"LastName" : "patil"}).toArray((error,result)=>{
if(error){
    console.log(mongodb.MongoError);
}
else
{
    console.log(result);
}})

//Update function

db.collection('users').updateOne({
    _id:new ObjectID("5f45fdc3f9dede1978896083")
},
{
    $set:{
        Name:"ASdfhjhbsdadfx"


    }
})

db.collection('users').updateMany({
    "LastName" : "Enzigma"
},
{
    $set:{
        "LastName" : "Patil"
    }
}).then((count)=>{
    console.log('Updated Count'+count.modifiedCount);
}).catch((error)=>{
    console.log(error);
})

db.collection('user').deleteMany({
    "Emp" : "sdf"

}).then((result)=>{
    
        console.log(result);
   
}).catch((error)=>{
    console.log(error);

})

})



