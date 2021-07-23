const users = [
    {firstName: "Afroz", lastName:"Ahmed", age:27},
    {firstName: "Donald", lastName:"Trumph", age:70},
    {firstName: "Elon", lastName:"Musk", age:50},
    {firstName: "Deepika", lastName:"Padukone", age:27}
];

//map function - return fullName

const array = users.map(itr => itr.firstName + " "+ itr.lastName);

console.log(array);

// reduce function - return age & count of same age {26: 2, 50: 1, 70:1}

const object = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})

console.log(object)

//filter function - return firstName whose age has less than 50

const array = users.filter(x => x.age < 50).map(itr => itr.firstName)
console.log(array);

//reduce function - return firstName whose age has less than 50;

const users = [
    {firstName: "Afroz", lastName:"Ahmed", age:27},
    {firstName: "Donald", lastName:"Trumph", age:70},
    {firstName: "Elon", lastName:"Musk", age:50},
    {firstName: "Deepika", lastName:"Padukone", age:27}
];

const array = users.reduce(function (acc,curr){
    if(curr.age < 50){
    acc.push(curr.firstName);
  }
  return acc;
},[])

console.log(array);
