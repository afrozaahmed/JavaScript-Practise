function abc(arr){
    let temp="";
     for(let i=0;i<arr.length;i=i+2){
       if(arr[i]>arr[i+1]){
         temp=arr[i];
         arr[i]=arr[i+1];
         arr[i+1]=temp;
       }
       if(arr[i+1]<arr[i+2]){
         temp=arr[i+1];
         arr[i+1]=arr[i+2];
         arr[i+2]=temp;
       }
     }
    console.log(arr);
  }
  
  abc([1, 4, 3, 2]);