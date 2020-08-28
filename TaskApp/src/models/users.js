const mongoose=require('mongoose');
const validator=require('validator');

const User=mongoose.model('User',{
 name:{
     type:String,
     required:true,
     trim:true
     
 },
 email:
 {
     type:String,
     required:true,
     lowercase:true,
     validate(value)
     {
       if(!validator.isEmail(value))
       {
           throw Error('Entered Email Not Syntanticly true');
       }
     }

 },
 password:
 {
     type:String,
     required:true,
     trim:true,
     maxlength:10,
     minlength:5,
     validate(value)
     {

        if(value.toLowerCase().includes('password'))
        {
            throw Error('not allowed');
        }
     }
     
 },
 age:{
     type:Number,
     default:0,
     validate(value)
     {
         if(value<0)
         {
             throw Error('Please enter the correct age');
         }
                  
     }
    
 }
})
module.exports=User