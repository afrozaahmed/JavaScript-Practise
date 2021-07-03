let name = {
firstname: "afroz",
lastname: "ahmed"
}

let printMyName = function(city,state){
console.log(this.firstname + " "+ this.lastname + " from "+ city + ", "+ state)
}

printMyName.call(name,"Allahabad","Uttar Pradesh");

printMyName.apply(name,["Bangalore","Karnataka"])

myName = printMyName.bind(name,"newCity","newState");
myName();