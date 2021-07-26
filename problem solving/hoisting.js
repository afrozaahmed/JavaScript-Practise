function Add(){
    console.log(answer)
    var answer = 2
};
Add() // undefined


var temp= 'hi';
function display(){
    console.log(temp);
    var temp = 'bye';
};
display(); // undefined