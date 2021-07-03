//bind

let multiply = function(x,y){
console.log(x*y);
console.log(x)
}
let multiplyByTwo = multiply.bind(this,3);
multiplyByTwo(4);

let multiplyByTwo = multiply.bind(this,3,5);
multiplyByTwo(4);


let multiplyByTwo = multiply.bind(this);
multiplyByTwo(8,10);


//closures

let multiply = function (x){
return function (y){
console.log(x)
console.log(x*y)
}
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3)
