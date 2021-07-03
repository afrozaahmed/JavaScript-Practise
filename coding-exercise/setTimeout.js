/*function x(){
    var i =1;
    console.log("abcd");
    setTimeout(function (){
console.log(i);
    })
    console.log("efgh")
}

x();*/

function a(){
    for(var i =1;i<=5;i++){
            setTimeout(function(){
                console.log(i);
            },i*1000)
        }
    }
    console.log("SetTimeOut Example");

a();


/*function a(){
    for(var i =1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            },i*1000)
        }   close(i)
        }
        
    }
    console.log("SetTimeOut Example");

a();*/