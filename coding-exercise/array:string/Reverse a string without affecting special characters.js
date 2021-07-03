function abc(str){
    let rev = str.split('');
    let regex = /[a-zA-Z]/g
    let first=0;
    let last=rev.length-1;
    while(first<last){
      if(!isAlphabet(str[first],regex)){
        first++;
      }
      else if(!isAlphabet(str[last],regex)){
        last--;
      }else{
        rev = swap(first,last,rev);
        first++;
        last--;
        console.log("----",rev.join(''))
      }
    }
    
    function isAlphabet(a,regex){
    if(a.match(regex)){
      return true;
    }
    return false;
  }
    
    function swap(first,last,rev){
    let temp="";
    temp=rev[first];
    rev[first]=rev[last];
    rev[last]=temp;
    return rev;
  }
  }
  abc('Ab,c,de!$')