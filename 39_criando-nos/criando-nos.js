// parte 1 -----

// let ul = document.querySelector("#lista-dorama");

// let li = document.createElement("li");

// let text_li = document.createTextNode("Alquimia das almas");

// li.appendChild(text_li);

// // concatenar filho - inserir novo filho ao pai - li em ul
// ul.appendChild(li);

// parte 2 -----
let ul = document.querySelector("#lista-dorama");

let input_dorama = document.querySelector("#dorama");
let submit = document.querySelector("#submit");

function add_dorama(event){
    event.preventDefault();
    let texto = input_dorama.value;
    console.log(texto);

    let li = document.createElement("li");
    let text_li = document.createTextNode(texto);
    li.appendChild(text_li);
    // concatenar filho - inserir novo filho ao pai - li em ul
    ul.appendChild(li);
}

submit.addEventListener("click", add_dorama);
