function isPrototype(){
    var obj1 = {x: 1};
    var obj2 = Object.create(obj1)
    console.log(
      obj1.isPrototypeOf(obj2)       
  );
  } 
  isPrototype() // true