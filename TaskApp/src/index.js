const express=require('express');
const app=express();
require('./db/mongoose');
const User=require('./models/users')
const Task=require('./models/task')
app.use(express.json());


//Post Method For Task
app.post('/tasks',(req,res)=>{
 const task=new Task(req.body); 
 task.save().then(()=>{   
     res.send(task);
 }).catch((e)=>{    
     res.status(400).send(e); 
 })

})


//Get All User
app.get('/users',(req,res)=>{
User.find({}).then((users)=>{
    res.send(users);    
}).catch((e)=>{
  res.status(500).send(e);
})
})


//get User by id
app.get('/users/:id',(req,res)=>{
    //console.log(req.params.id);
 const _id=req.params.id;

 User.findById(_id).then((user)=>{
     if(!user)
     {
         return res.status(404).send();
     }
   
    res.send(user);

 }).catch((e)=>{
    res.status(500).send(e); 

 })
})


//Get perticular task
app.get('/tasks/:id',async(req,res)=>{
//console.log(req.params.id);
const __id=req.params.id;

try {

    const user=await Task.findById(__id);
    if(!user)
    {
        return res.status(404).send()
    }
    res.send(user);

    
} catch (error) {

    res.status(500).send();
}



// Task.findById(__id).then((task)=>{
//     if(!task)
//     {
//         return res.status(404).send();
//     }
//     res.send(task)

// }).catch((e)=>{
// res.status(500).send(e);
// })
})


// post User 
app.post('/users',async(req,res)=>{
 
    const user=new User(req.body);
  try {
      await user.save();
      res.status(201).send(user)
      
  } catch (error) {
      res.status(400).send(error)      
  }

    // user.save().then(()=>{
    //     console.log(user);
    //     res.send(user)
    // }).catch((error)=>{
    //         console.log(error);
    // })
})


//Promises

const add=(num1,num2)=>{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{        
        resolve(num1+num2);
    },2000)
 })
}

//Nested Callback



// add(1,2).then((result)=>{
//     console.log(result);
//     add(result,2).then((f)=>{
//         console.log(f);
//     }).catch((e)=>{
//         console.log(e);
//     })
    
// }).catch((error)=>{
//     console.log(error);
// })



//Promise chaining

// add(1,1).then((sum)=>{
//     console.log(sum);
//     return add(sum,1);
// }).then((sum2)=>{
//     console.log(sum2);
// }).catch((e)=>{
//     console.log(e);
// })



//patch Http

app.patch('/users/:id',async(req,res)=>{
    const aloowtoUpdate=['name','email','password','age'];
    

try {
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
   if(!user)
   {
       res.status(200).send();
   }
   else{
       res.send(user);
   }

} catch (error) {
    res.send(error);
    
}
})


//Port No configuration
app.listen(3000,()=>{
console.log('Listning on port no 3000');
})