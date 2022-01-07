console.log("Atribuição de Variáveis");

const idade = 28;
let nome = "Caio";
const sobrenome = "Silva";

console.log(nome, sobrenome);
// OU
console.log(nome + " " + sobrenome) //mesmo resultadode "Nome" + "espaço" + "Sobrenome"

console.log(`Meu nome é: ${nome} ${sobrenome}`);
// a crase também serve pra textos

nome = nome + " " + sobrenome; //sem o espaço, ele cola os dois
/*Porém, a melhor prática é usar variáveis constantes, criando novas quando necessário. 
Então, neste caso, seria melhor manter o nome como constante e criar uma variável nomeCompleto*/

console.log(nome);