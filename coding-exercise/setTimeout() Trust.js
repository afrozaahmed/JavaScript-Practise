console.log("start");


setTimeout(function (){
console.log("callback")
},5000);


let start = new Date().getTime();
let end = start

while(end < start + 10000){
end = new Date().getTime();
};

console.log("end");