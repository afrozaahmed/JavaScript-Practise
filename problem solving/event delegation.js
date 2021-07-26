<html>
    <head>
    </head>
    <body>
        <ul id="RemoveCartItems">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
            <li><a href="#">Item 5</a></li>
        </ul>
    </body>
</html>


var tar = document.getElementById('RemoveCartItems')
tar.addEventListener('click', function (event) { 
    var ele = event.target.parentNode
    ele.parentNode.removeChild(ele);
    event.preventDefault();
});


// Event Delegation using Event Bubbling