let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu")
})


let expandir = document.querySelector(".container-botao");

expandir.addEventListener("click", function(){
    document.querySelector(".grid-container-hidden").classList.toggle("show")
})