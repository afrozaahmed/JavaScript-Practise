//Event bubbling & Capturing.
true - capturing (top to bottom)
false - bubbling (bottom to top)

First capturing then bubbling.

document.querySelector('#grandparent).addEventListener('click', ()=> {
console.log("grandParent clicked")}, true/false)

document.querySelector('#parent).addEventListener('click', ()=> {
console.log("Parent clicked")}, true/false)

document.querySelector('#child).addEventListener('click', ()=> {
console.log("grandParent clicked")}, true/false)

How to stop bubbling and capturing

document.querySelector('#grandparent).addEventListener('click', (e)=> {
console.log("grandParent clicked")
e.stopPropagation();
}, true/false)