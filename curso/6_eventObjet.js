const button = document.querySelector("a")
// button.onclick = hello;

button.addEventListener("click", function(event){
    event.preventDefault()
    console.log(event)
})

button.addEventListener("click", function(){
    
})

// button.onclick = function hello(){
//     alert("hola")
// }