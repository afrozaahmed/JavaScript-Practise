<html id = "myhtml">
<head>
</head>
<body id = "mybody">
  <h1> Event Bubbling Example</h1>
  <div id="Box">
    <button id="myButton">Click Me!</button>
  </div>
</body>
</html>


var parent = document.getElementById('Box');
      parent.addEventListener('click', function(){
        console.log("Box is clicked")
});
var child = document.getElementById('myButton');
      child.addEventListener('click', function(){
        console.log("Button is clicked")
});
var child2 = document.getElementById('myhtml');
      child2.addEventListener('click', function(){
        console.log("HTML is clicked")
});
var child3 = document.getElementById('mybody');
      child3.addEventListener('click', function(){
        console.log("Body is clicked")
});


/*
output

Button is clicked
Div is clicked
Body is clicked
HTML is clicked


To cancel the event bubbling:-

event.stopPropagation()
event.cancelBubble


*/