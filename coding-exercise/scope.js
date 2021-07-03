let obj = {
    a: 1,
    b: 2,
    method: function(){
        return this.a+this.b;
    }
}
console.log(obj.method); //3
let c = obj.method();

console.log(c);



  {
    let x = 45;
  }
  
  console.log(x); // Gives reference error since x cannot be accessed outside of the block
  
  for(let i=0; i<2; i++){
    // do something
  }
  
  console.log(i);
