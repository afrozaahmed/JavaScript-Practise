function abc(arr,sum){
    let ans=0;
    for(let i=0;i<arr.length-2;i++){
      for(let j=i+1;j<arr.length-1;j++){
        for(let k=j+1;k<arr.length;k++){
          if(arr[i]+arr[j]+arr[k] < 12)
          {
            ans++;
          }
        }
      }
    }
    console.log(ans)
  }
  
  abc([5, 1, 3, 4, 7],12)