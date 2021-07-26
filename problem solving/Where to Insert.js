let insert = (arr,num) => {
    let array = arr.sort();
    for(let i=0;i<array.length;i++){
      if(array[i]>num){
        array.splice(i,0,num)
        return array;
      }
    }
  }
  let a = insert([5,4,1,3],2);
  console.log(a); // [1, 2, 3, 4, 5]