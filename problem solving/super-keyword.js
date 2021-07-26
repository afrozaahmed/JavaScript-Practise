function Human() {
    this.name = "Tommy"
    this.sex =  "Male"
  }
  
  Human.prototype.getName = function(){
    return this.name
  }
  
  class Child extends Human {
    constructor(){
      super()
    }
  }
  
  const child = new Child()
  console.log(child.getName())  // Tommy
  Human.prototype.getName = function() { return 'New name function for Human' }
  console.log(child.getName()) // New name function for Human
  Child.prototype.getName = function() { return 'New name function for Child' }
  console.log(child.getName()) // New name function for Child
