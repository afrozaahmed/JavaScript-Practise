class Animal {
    constructor() {
      this.count = 0;
    }
  
    static increaseCount() {
      this.count += 1;
    }
  
    static getCount() {
      return this.count;
    }
  }
  Animal.count = 0;
  
  function test(){
    Animal.increaseCount(); 
    console.log(Animal.getCount()); 
  }
  test()  // 1