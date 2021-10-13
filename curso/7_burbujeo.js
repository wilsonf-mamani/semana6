const myform = document.querySelector("form")
const mydiv = document.querySelector("div")
const myp = document.querySelector("p")
// true de padre a hijo
// false hijo a padre
myform.addEventListener("click", function(){
    alert("myform")
}, true)
mydiv.addEventListener("click", function(){
    alert("mydiv")
}, true)
myp.addEventListener("click", function(event){
    // event.stopPropagation()
    alert("mp")
})
