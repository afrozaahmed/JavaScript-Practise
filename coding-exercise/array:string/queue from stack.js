class Stack{
    constructor(){
    this.data = [];
    }
      push(record){
      this.data.push(record)
      }
      pop(){
      return this.data.pop()
      }
    }
    
    class Queue extends Stack{
    constructor(){
    super();
    this.first = new Stack();
      this.second = new Stack();
    }
      add(record){
      this.first.push(record);
      }
      remove(){
        if(this.second.data.length){
          return this.second.pop()
        }else{
          let i = this.first.data.length-1;
          while(i>=0){
              this.second.push(this.first.pop());
              i--;
          }     
          return this.second.pop()
        }
        
      }
    }
    
    let obj2=new Queue;
    