//trabajando con los elementos
const lis = document.querySelectorAll("li")
lis.forEach(function(li){
    li.addEventListener("click", function(e){
        console.log(this)
    })
})
// mismo resultado con el padre
const myul = document.querySelectorAll("ul")
myul.addEventListener(function(e){
    if(e.target.tagName == "LI"){
        console.log(e.target)
    }
})

