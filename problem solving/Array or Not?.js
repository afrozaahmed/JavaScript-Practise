function check(obj) {
    if (Object.prototype.toString.call(obj) === "[object Array]") {
      return true;
    } else {
      return false;
    }
  }
  console.log(check(123)); // false
  console.log(check("cat")); // flase
  console.log(check([1, 2, 3, 4])); // true