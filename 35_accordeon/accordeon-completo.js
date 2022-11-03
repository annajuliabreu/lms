let conteudos = document.querySelectorAll(".section .conteudo");
let titulos = document.querySelectorAll(".section .titulo");

console.log(titulos, conteudos);

function abrir_conteudo(){
    let conteudo = this.nextElementSibling;
    console.log(conteudo);
    conteudo.classList.toggle("active");
}

for(let titulo of titulos){
    titulo.addEventListener("click", abrir_conteudo);
}