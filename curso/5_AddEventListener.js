function bye(){
    alert("me voy")
}

document.querySelector("button");
document.addEventListener("click", function(){
    console.log("Click!!")
}, true)
//agrega una accion
document.addEventListener("click", bye)
//remueve la accion
document.removeEventListener("click", bye)
