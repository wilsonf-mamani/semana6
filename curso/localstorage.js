let nombre = prompt("ingrese su nombre")

localStorage.setItem("nombreUsuario", nombre)

setTimeout(function(){
    let obtenido = localStorage.getItem("nombreUsuario")
    alert(obtenido)
}, 4000);



setTimeout(function(){
    localStorage.removeItem("nombreUsuario")
    alert(obtenido)
}, 12000);

setInterval(function(){
    console.log("Que tal");
}, 1000);