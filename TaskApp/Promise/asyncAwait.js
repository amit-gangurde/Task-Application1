const addition=(num1,num2)=>{
return new Promise((resolve,reject)=>{

    setTimeout(()=>{

        resolve(num1+num2);

    },2000)
   
})
}

const dowork=async()=>{
   const res=await addition(23,23);
   const res1=await addition(12,1);
   const res2=await addition(13,34);
     return res2;     
}


dowork().then((res)=>{
    console.log(res);
})



