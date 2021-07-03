//

document.querySelector('#category').addEventListner('click',(e) => {
console.log(e.target.id);
window.location.href = "/" + e.target.id;
});

//

document.querySelector('#category').addEventListner('click',(e) => {
console.log(e.target.id);
if(e.target.tagName == "LI"){
window.location.href = "/" + e.target.id;
}
});

//using data-uppercase in input element.

document.querySelector("#form").addEventListner('Keyup', (e) => {
console.log(e);
if(e.target.dataset.uppercase != undefined){
e.target.value = e.target.value.toUpperCase();
}
})