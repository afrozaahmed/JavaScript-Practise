var tempFunc1 = function () {
    return {}
}


function check(){
    var object1 = new tempFunc1();
    var object2 = tempFunc1();
    return (object1 instanceof tempFunc1 === object2 instanceof tempFunc1);     
}
console.log(check())

// true