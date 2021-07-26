class Vehicle {                            
    constructor(fuel) { this.fuel = fuel; }      
    turnOn() { 
        console.log("Turned on")
    }
    turnOff(){
        console.log("Turned off")
    }                                      
}
 
class Car extends Vehicle {       
    constructor(fuel,isparked) {
        super(fuel);                           
        this.isparked = isparked
    }
    turnOn(){
        if ( this.fuel >= 500 ) {
            super.turnOn()
        }else{
            console.log("Refill Fuel")
        }
    }
    turnOff(){
        if(this.isparked == true){
            super.turnOff()
        }else{
            console.log("Car not parked")
        }
    }                               
}
var car1 = new Car(1000,true)
var car2 = new Car(400,true)
var car3 = new Car(1500,false)
car1.turnOn()
car1.turnOff()
car2.turnOn()
car2.turnOff()
car3.turnOn()
car3.turnOff()  


/*
Turned on
Turned off
Refill Fuel
Turned off
Turned on
Car not parked
*/