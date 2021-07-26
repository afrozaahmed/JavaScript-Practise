const isValidDate = dateString => {
    const date = new Date(dateString);
    if (
      Object.prototype.toString.call(date) === "[object Date]" &&
      !isNaN(date.getTime())
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log(isValidDate("foo")); // false
  console.log(isValidDate("October 30, 2019")); // true
  console.log(isValidDate("May 8, 2016 10:12:00")); // true
  console.log(isValidDate("April 15, 2012 11:xyz")); // false