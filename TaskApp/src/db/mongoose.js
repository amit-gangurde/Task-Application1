const mongodb=require('mongodb');
const mongoose=require('mongoose');
const validatot=require('validator');

mongoose.connect('mongodb://localhost:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})



