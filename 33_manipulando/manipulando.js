// let div_test = document.getElementById("teste");
let div_teste = document.querySelector("#teste");
// mudar o texto
div_teste.innerHTML = "hey soul sister";
div_teste.style.color = "blue";
div_teste.style.backgroundColor = "yellow";
console.log(div_teste);

let divs_copa = document.querySelectorAll(".classe1");
// faz um for para mudar varias vezes de uma vez
for(let div of divs_copa){
    div.innerHTML = "o hexa vem aí";
}
console.log(divs_copa);

let input_src = document.querySelector("#jogador");
input_src.value = "Gabigol"
input_src.type = "password";

// manipulando classes

let div2 = document.querySelector("#id2");
div2.classList.add("classe3");
div2.classList.remove("classe2");
div2.classList.toggle("classe3");