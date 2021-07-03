let arr = [13, 7, 6, 12]
let next;
for(let i=0;i<arr.length;i++){
  next=-1;
	for(let j=i+1;j<arr.length;j++){
  	if(arr[j]>arr[i]){
      next=arr[j]
      break;
  }
}
  console.log(arr[i] + " -- " + next)
}