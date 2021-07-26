function feelings(val, func) {
    console.log("I am " + val + ", " + func(2));
  }
  var laughing = function(num) {
    var laugh = "";
    for (var i = 0; i < num; i++) {
      laugh = laugh + "ha";
    }
    return laugh;
  };
  
  function display() {
    feelings("happy", laughing);
  }
  display() 

  // I am happy, haha