function concat(str1,str2){
    if(str1){
      if(str2){
        if(typeof(str1) == "string" && typeof(str2) == "string"){
          console.log(str1+str2);
        }else{
          throw("not string")
        }
      }else{
        throw("Second argument is not defined")
      }
    }
    else if(str2){
      throw("First argument is not defined")
    }
    else{
      throw("Both arguments are not defined")
    }
    
  }

try{
    concat("a","b") // "ab"
}catch(e){
    console.log(e)
}

try{
    concat("a") 
}catch(e){
    console.log(e) // Second argument is not defined
}

try{
    concat(1,"c") 
}catch(e){
    console.log(e) // not string
}

try{
    conact(undefined,"x") 
}catch(e){
    console.log(e) // First argument is not defined
}

try{
    concat() 
}catch(e){
    console.log(e) //Both arguments are not defined
}
