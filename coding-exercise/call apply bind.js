// call

let name = {
    firstName : "afroz",
    lastName : "ahmed",
    getName : function(){
            console.log(this.firstName + " " + this.lastName)
    }
}

let name1 = {
    firstName:"aftab",
    lastName:"ahmed"
}


console.log(name.getName.call(name1));

let name = {
    firstName : "afroz",
    lastName : "ahmed",
}

let getName = function () {
    console.log(this.firstName + " " + this.lastName);
}

getName.call(name);

let name2 = {
    firstName: "aftab",
    lastName: "ahmed"
}

getName.call(name2)

let name = {
    firstName : "afroz",
    lastName : "ahmed",
}

let getName = function (city,state) {
    console.log(this.firstName + " " + this.lastName + " from "+ city + " , "+state);
}

getName.call(name,"Bangalore","Karnataka");

let name2 = {
    firstName: "aftab",
    lastName: "ahmed"
}

getName.call(name2,"Allahabad","U.P.")
//apply

let name = {
    firstName : "afroz",
    lastName : "ahmed",
}

let getName = function (city,state) {
    console.log(this.firstName + " " + this.lastName + " from "+ city + " , "+state);
}

getName.apply(name,["Bangalore","Karnataka"]);

let name1 = {
    firstName : "aftab",
    lastName : "ahmed"
}

getName.apply(name1,["Allahabad","Uttar Pradesh"]);


//bind

let name = {
    firstName : "afroz",
    lastName : "ahmed",
}

let getName = function (city,state) {
    console.log(this.firstName + " " + this.lastName + " from "+ city + " , "+state);
}

getName.apply(name,["Bangalore","Karnataka"]);

let name1 = {
    firstName : "aftab",
    lastName : "ahmed"
}

let getName1 = getName.bind(name1,"Allahabad","Uttar Pradesh");

console.log(getName1());