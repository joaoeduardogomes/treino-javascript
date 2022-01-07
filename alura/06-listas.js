console.log("Trabalhando com listas");

// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro", "Curitiba", "Florianópolis");

listaDeDestinos.push("Porto Alegre"); //add item na lista

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);