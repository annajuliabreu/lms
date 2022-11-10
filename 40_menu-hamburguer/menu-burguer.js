let fechar = document.querySelector(".fechar");
let botao_modal = document.querySelector("#abrir_modal");
let modal_overlay = document.querySelector("#menu-overlay")

function abrir_fechar_modal(){
    modal_overlay.classList.toggle("active");
}

fechar.addEventListener("click", abrir_fechar_modal);
botao_modal.addEventListener("click", abrir_fechar_modal);
