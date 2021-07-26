function practise(str){
    let str1=str.split(" ");
    let arr=[];
    let map = {
      "{":"}",
      "(":")",
      "[":"]"
    }
    for(let i =0;i<str1.length;i++){
      if(str1[i] == "{" || str1[i] == "[" || str1[i] == "("){
        arr.push(str1[i]);
      }
      else{
        let lastEle = arr.pop();
        console.log(lastEle)
        if(map[lastEle] != str1[i]){
          return false
        }
      }
    }
    if(arr.length != 0){
      return false
    }
    return true
  }
  
  let a = practise("{ [ ] ( ) }");
  console.log(a) // true