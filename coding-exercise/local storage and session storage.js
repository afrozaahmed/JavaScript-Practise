-----localStorage store string.
localStorage.setItem("hello","world"); // set key-"hello" and pair-"world"

localStorage.setItem("hello","world2"); // override value-"world" for key-"hello";

localStorage.setItem("hello1","world2"); // set another key value pair with key-hello1 and pair - "world2"

localStorage.getItem("hello"); //"world2"

localStorage.removeItem("hello1"); // remove key - "hello1" and value - "world2" from localStorage

localStorage.clear(); // clear everything from localStorage.


--- localStorage for storing object.

const user = {name:"Akshay"}
localStorage.setItem("user",user); // store key - "user" and value - "[object object]"

-------
localStorage.setItem("user",JSON.stringfy(user)); // this will store properly
JSON.parse(localStorage.getItem("user")); 