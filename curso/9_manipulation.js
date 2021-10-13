// document.createElement("a")

// //se crean elementos
// let li = document.createElement("li")
// li.innerHTML = "<h2>hola li </h2>"
// li.style.color = "red"
// //elementos creados se agrega
// document.querySelector("ul").appendChild(li)
// // se eliminan elementos
// document.querySelector("ul").removeChild(li)


let li = document.createElement("li")
li.innerHTML = "Holla"
// document.querySelector("ul").replaceChild(li, document.querySelector("li"))
// document.querySelector("ul").insertBefore(li, document.querySelector("li"))

document.querySelector("ul").setAttribute("style", "color: red; text-decoration: underline")
// document.querySelector("ul").style.color = "yellow";

document.querySelector("ul").removeAttribute("style")

getComputedStyle(document.querySelector("ul")).background

getComputedStyle(document.querySelector("ul")).classList.toggle("thisisme")


