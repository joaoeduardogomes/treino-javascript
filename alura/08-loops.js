console.log("Trabalhando com Loops");


const listaDeDestinos = new Array("São Paulo", "Curitiba", "Florianópolis", "Porto Alegre");

const idadeComprador = 16;
const acompanhado = true;
let passagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos disponíveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || acompanhado == true;
let contador = 0;

let destinoExiste = false;
while(contador < 4) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    else { //este "else" é opcional, pois o padrão da variável já é "false"
        destinoExiste = false;
    }
    contador++; //ou "contador += 1;"
}

console.log("Destino disponível: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!")
}
else {
    console.log("Desculpe. Tivemos um erro no processamento da sua viagem.")
}
for(let cont = 0; cont < 4; cont++) {
    if (listaDeDestinos[cont] == destino) {
        destinoExiste = true;
        break;
    }
}