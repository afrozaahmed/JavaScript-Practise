<html>
 <head>
 </head>
 <body>
    <button id="debounce"> 
        Click here
    </button> 
    
    <script> 
    var button = document.getElementById("debounce");
     
    const debounce = (func, wait, immediate)=> {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;
            
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        
        clearTimeout(timeout);

        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
        };
    };
    button.addEventListener('click', debounce(function() { 
            alert("This alert box will be displayed after 2 seconds no matter how many times you press the button.") 
                            }, 2000)); 
    </script> 
 </body>
</html>