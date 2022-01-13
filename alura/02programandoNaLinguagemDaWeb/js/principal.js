var titulo = document.querySelector(".titulo");

titulo.textContent = "Nutricionismo Aparecida";

/* ----------------------------- */
//encontrando o paciente "paulo":
//var paciente = document.querySelector("#primeiro-paciente");
// ENCONTRANDO TODOS OS PACIENTES:
var pacientes = document.querySelectorAll(".paciente");

// encontrando peso e altura de "Paulo". Aqui pulei uma etapa definindo as variáveis enquanto já pegava o texto das td.
//var peso = paciente.querySelector(".info-peso").textContent;
//var altura = paciente.querySelector(".info-altura").textContent;

// USANDO LOOP PARA PEGAR OS DADOS DE TODOS OS PACIENTES:
for(var i = 0; i< pacientes.length; i++) {
    //pegar o paciente na posição "i" da lista de pacientes:
    var paciente = pacientes[i];

    // encontrando peso e altura dos pacientes:
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

        //Atribui a classe para aplicar a modificação de estilo do CSS quando for o caso:
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;

         //Atribui a classe para aplicar a modificação de estilo do CSS quando for o caso:
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); //O "toFixed" vai reduzir as casas decimais para 2.
    }
}

// ADICIONANDO FUNCIONALIDADE DO FORMULÁRIO DO HTML:
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Fui clicado!");
});