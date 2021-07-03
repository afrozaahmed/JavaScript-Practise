class Parent{
     constructor(name){
    this.name=name;
    }

    getName = function () {
        console.log("name: ",this.name)
    }
}

class Child extends Parent{
    constructor(props){
        super(props);
    }
}

let obj = new Parent("Afroz");
obj.getName();