function abc(...ele){
  return new Promise((resolve,reject)=>{
    if(ele.length>3){
      resolve('Element has more than 4')
    }else{
      reject('less than 3 elements')
    }
  })
}

abc(1,2)
.then(result=>console.log(result))
.catch(error=>console.log(error))


//async and await

async function hello() {
  return  await Promise.resolve("Hello");
};

hello().then(alert);