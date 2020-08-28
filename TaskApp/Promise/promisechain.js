const User = require('../src/models/users');
require('../src/db/mongoose');
const Task=require('../src/models/task')
//5f47763707da910d1c91b546


//findByIdAndDelete

// Task.findByIdAndDelete('5f47794e9650c93ef04afad2').then((task)=>{
//     console.log(task);
//     console.log('Deleted Succesfully');
//      return Task.countDocuments({ completed : false})
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


//Async Function And Await 



//findByIdAndUpdate

// User.findByIdAndUpdate('5f47763707da910d1c91b546',{age:11}).then((res)=>{

//     console.log(res);
//     return User.countDocuments({age:1});

// }).then((user)=>{
//     //console.log(user);
// }).catch((e)=>{
//     console.log(e);
// })
 


const updateAndCount=async(id,age)=>{
const update1=await User.findByIdAndUpdate(id,{age});
const count=await User.countDocuments({age:age});
return count;


}

updateAndCount('5f47795e9650c93ef04afad3',14).then((cnt)=>{
    console.log(cnt);
})







//find And Delete BY iD usinf async function


const findbyIdandDelete=async (id)=>{

    const dlt=await User.findByIdAndDelete(id);
    const ct=await User.countDocuments({password:'asdfg'});
   return ct;

}

findbyIdandDelete('5f47795e9650c93ef04afad3').then((ress)=>{
console.log(ress);
}).catch((ee)=>{
    console.log(ee);
})








