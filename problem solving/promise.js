function evenOdd(num){
    return new Promise(function(resolve,reject){
      if(!isNaN(num)){
          if(num%2 == 0){
            setTimeout(function(){
              resolve('Even');
            },1000)
            
          }else{
            setTimeout(function(){
              resolve('Odd')
            },1000)
            
          }
      }else{
        reject('Not a Number')
      }
    })
    
    if(!NaN(num)){
      
    }
  }
  
  function test(number){
    return evenOdd(number).then(function(result){
      console.log(result);
    }).catch(function(error){
      console.log(error);
    })
  }
  
  test(12313); // Odd