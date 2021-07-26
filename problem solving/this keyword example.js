length = 10;
function func() {
	console.log(this.length);
}

var obj = {
  length: 5,
  thisFunc: function(func) {
    func();
    arguments[0]();
  }
};

obj.thisFunc(func, 3); // 10 2


var MyDate = function(date) {
    this.date = date;
};

var obj4 = {};
obj4.foo = new Date();
obj4.bar = new MyDate(obj4.foo)
console.log(obj4.bar)  // A Date object where date is equal to current date