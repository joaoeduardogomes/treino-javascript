var titulo = document.querySelector(".titulo");

titulo.textContent = "Nutricionismo Aparecida";

/* ----------------------------- */
//encontrando o paciente "paulo":
var paciente = document.querySelector("#primeiro-paciente");

// encontrando peso e altura de "Paulo". Aqui pulei uma etapa definindo as variáveis enquanto já pegava o texto das td.
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

// Pegando o campo de IMC na tabela do HTML:
var tdImc = paciente.querySelector(".info-imc");

//validando os dados:
var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoValido = false;
}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaValida = false;
}

if(pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}