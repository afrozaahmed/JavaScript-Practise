const getTodo = callback => {
    setTimeout(function(){
      callback({ text: 'Complete Code Example' })
    },2000)
    
  }
  
  function display(){
      getTodo(todo=>{
        console.log(todo.text)
      })
  }
  
  display()


  // Complete Code Example