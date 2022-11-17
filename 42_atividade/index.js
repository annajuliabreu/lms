// menu retratil
let button = document.querySelector(".navegador .header button");
let menu_retratil = document.querySelector(".navegador .menu-retratil");

button.addEventListener("click", function(){
    menu_retratil.classList.toggle("active");
    feedMargin.classList.toggle("active");
});

// feed e modal
let feedMargin = document.querySelector(".feed");
let menu = document.querySelector(".navegador");
let buttonPost = document.querySelector(".navegador .button-post");

let overlayModal = document.querySelector(".overlay-modal");

let newPost = document.querySelector(".feed .publication");
let submit = document.querySelector(".overlay-modal .modal .modal-content .button");

let inputName = document.querySelector(".overlay-modal .modal .modal-content .input-name");
let inputContent = document.querySelector(".overlay-modal .modal .modal-content .input-content");

buttonPost.addEventListener("click", function(){
    overlayModal.classList.add("active")
})

function add_post(event){
    event.preventDefault();
    let name = inputName.value;
    let content = inputContent.value;

    let feed = document.querySelector(".feed");
    let post = document.createElement("div");
    post.classList.add("publication")
    feed.appendChild(post);

    let text_post = document.createElement("h3");
    text_p = document.createTextNode(name);
    text_post.classList.add("name");
    text_post.appendChild(text_p);
    post.appendChild(text_post);

    let text_content = document.createElement("p");
    let text_c = document.createTextNode(content);
    text_content.classList.add("content");
    text_content.appendChild(text_c);
    post.appendChild(text_content);


    overlayModal.classList.remove("active")
}

submit.addEventListener("click", add_post);

// image slider
let seta_esquerda = document.querySelector(".slideshow .seta-esquerda");
let seta_direita = document.querySelector(".slideshow .seta-direita");
let imagens = document.querySelectorAll(".slideshow img");
let indicators = document.querySelectorAll(".slideshow .indicators .indicator")

let imagem_ativa = 0;

seta_direita.addEventListener("click", function() {
    imagens[imagem_ativa].classList.remove("active");
    indicators[imagem_ativa].classList.remove("active");

    imagem_ativa = imagem_ativa + 1;
    if(imagem_ativa >= imagens.length){
        imagem_ativa = 0;
    }
    indicators[imagem_ativa].classList.add("active");
    imagens[imagem_ativa].classList.add("active");
})

seta_esquerda.addEventListener("click", function(){
    imagens[imagem_ativa].classList.remove("active");
    indicators[imagem_ativa].classList.remove("active");

    imagem_ativa = imagem_ativa - 1;
    if(imagem_ativa < 0){
        imagem_ativa = imagens.length-1;
    }

    indicators[imagem_ativa].classList.add("active");
    imagens[imagem_ativa].classList.add("active");
})