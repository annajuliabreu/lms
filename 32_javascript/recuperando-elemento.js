// Sempre retorna um elemnto único
let  div_id1 = document.getElementById("id1");
console.log(div_id1);

// sempre retorna lista
let divs = document.getElementsByTagName("div");
console.log(divs);

let elementos_teste = document.getElementsByClassName("teste");
console.log(elementos_teste);

// retorna só o primeiro elemento que é selecionado pelo seletor
let div_teste_teste = document.querySelector(".teste .teste");
console.log(div_teste_teste);

// retorna lista de elementos do seletor
let todos_teste = document.querySelectorAll(".teste");
console.log(todos_teste);