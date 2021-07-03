function a(){
    let x = 2;
    return function b(){
        console.log(x)
    }
}
let z = a();
z();


