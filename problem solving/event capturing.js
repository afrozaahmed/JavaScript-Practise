<html>
<head>
</head>
<body>
  <h1> Event Capturing Example</h1>
  <div id="Box">
    <button id="myButton">Click Me!</button>
  </div>
</body>
</html>


var parent = document.getElementById("Box");
parent.addEventListener(
  "click",
  function() {
    console.log("Box is clicked");
  },
  true
);
var child = document.getElementById("myButton");
child.addEventListener("click", function() {
  console.log("Button is clicked");
});


/*

output

 Div is clicked
 Button is clicked

*/