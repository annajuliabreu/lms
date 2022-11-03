let conteudo = document.querySelector(".section .conteudo");
let titulo = document.querySelector(".section .titulo");

function abrir_conteudo(){
    conteudo.classList.toggle("active");
}

titulo.addEventListener("click", abrir_conteudo);