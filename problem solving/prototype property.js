function func1(name){
    this.name = name;
  }
  
  var obj1 = new func1("Bran");
  
  func1.prototype.talk = function(){
      console.log ("Welcome " + this.name);
  }
  
  
  function display(){
    var obj2 = new func1("Jon");
    obj2.talk() 
    obj1.talk() 
  }
  display() 

  // Welcome John
  // Welcome Bran