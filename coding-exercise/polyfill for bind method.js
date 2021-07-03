let name = {
firstname : "afroz",
lastname :"ahmed"
}

printMyName = function(x){
console.log(this.firstname + " "+ this.lastname+ " "+ x);
}

let myName = printMyName.bind(name);
myName();

Function.prototype.mybind = function(...args){
let obj = this
return function(){
obj.call(args[0])
}
}


let myName2 = printMyName.mybind(name,"rahul");
myName2();