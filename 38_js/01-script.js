// Saída de dados
console.log("Olá mundo 2!");

// Declaração de variáveis
// Dinamicamente tipada (o tipo vem do valor que é atribuído à variável)
var x = 2; // number (float e integer) (evitar declarar assim)
let y = 3;
let s = "abc";
let s1 = 'abc';
let b = true;

// if
if(x==2){
    console.log("É verdade!");
}else{
    console.log("É mentira!");
}

if(s=="abc"){
    console.log("É verdade!");
}else{
    console.log("É mentira!")
}

// Listas
let l = [];
let l1 = [1,2,3];
console.log(l1[0]);
console.log(l1[1]);
console.log(l1[2]);

console.log(l1.length);
// métpdp inserir novos elementos na lista - push
l1.push(5);
console.log(l1);

for(let i=0; i < l.length; i++){
    console.log(l[i]);
}

// Objetos
let pessoa = {
    nome: "Naju",
    sobrenome: "Abreu",
    idade: "22"
}
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa);

// Funções
function add(a,b){
    return a+b;
}
console.log(add(x,10));

let subtracao = function(a,b){
    let resultado = a-b;
    return resultado;
};
console.log(subtracao(10,5));

// arrow function js: uma sintaxe de funcao mais moderna
let dividir = (e,f) => (e/f);
console.log(dividir(10,5));

let multiplicar = (c,d) => {
    let resultado = c*d;
    return resultado;
};
console.log(multiplicar(10,5));

// // Objetos
// let a = {
//     nome: "Eduardo",
//     idade: 1500,
// };
// console.log(a);
// console.log(a.nome);
// a.idade = 1501;
// console.log(a);

// a.sobrenome = "Santos";
// console.log(a);

// // Laços
// // for
// for(let i=0; i<0; i++){
//     console.log(i);
// }

// let j = 0;
// while(j<10){
//     console.log(j);
//     j++;
// }

// for(let i=0; i< 10; i++){
//     console.log(i);
// }

// for(let i=0; i<l1.length; i++){
//     console.log(l1[i]);
// }

// console.log(l1);
// for(let e of l1){
//     console.log(e);
// }

// // Função
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));

// let add1 = function(a,b){
//     return a+b;
// }
// console.log(add1(2,2));

// let add2 = (a,b) => {
//     let soma = a+b;
//     return soma;
// }
// console.log(add2(2,3));

// let add3 = (a,b) => (a+b);
// console.log(add3(3,4));