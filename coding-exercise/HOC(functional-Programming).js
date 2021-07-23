const radius = [1,2,3,4];

const area = function(radius) {
    return Math.PI * radius * radius;
}

const diameter = function(radius) {
    return 2 * radius;
}

const calculate = function(radius,logic){
    let arr=[];
    for(let i=0;i<radius.length;i++){
        return arr.push(logic(radius[i]))
    }
}

console.log(calculate(radius,area));
console.log(radius.calculate(area))


// similar as map function

Array.prototype.calculate = function(logic){
    let arr=[];
    for(let i=0;i<this.length;i++){
        return arr.push(logic(this[i]))
    }
}

console.log(radius.map(area));
