console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array("São Paulo", "Curitiba", "Florianópolis", "Porto Alegre");

const idadeComprador = 16;
const acompanhado = true;
const passagemComprada = true;

console.log("Destinos disponíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18) {
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}
else {
    if(acompanhado) { //"acompanhado" é o mesmo que "acompanhado == true".
        console.log("Comprador acompanhado.");
        listaDeDestinos.splice(1, 1);
        console.log(listaDeDestinos);
    }
    else {
        console.log("Venda indisponível para comprador menor de idade.")
    }
}

/* Também é possível usar:
if {}
else if {}
else {}
*/


/* Operadores lógicos:
        >
        <
        >=
        <=
        ==
        !=
*/

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);
console.log(idadeComprador != 18);

// OUTRA ALTERNATIVA:
if(idadeComprador >= 18 || acompanhado == true) {
    console.log("Compra autorizada.");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}
else {
    console.log("Venda indisponível para comprador menor de idade.")
}

console.log("Embarque: \n");
if((idadeComprador >= 18 || acompanhado == true) && passagemComprada == true) {
    console.log("Boa viagem!");
}
else {
    console.log("Embarque não autorizado.")
}