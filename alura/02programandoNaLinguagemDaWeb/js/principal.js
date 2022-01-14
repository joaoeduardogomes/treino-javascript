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
    event.preventDefault(); //bloqueia o comportamento padrão do botão
    
    var form = document.querySelector("#form-adiciona"); //pega o form do HTML

    // ACESSANDO OS INPUTS DO FORM PELO ATRIBUTO "name" (form.[ATRIBUTO NAME].value):
        //usa-se ".value" para pegar o valor digitado dentro do input.
    var nome = form.nome.value; 
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //CRIANDO UM ELEMENTO NO HTML PELO JS (tr e td's):
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //COLOCANDO OS VALORES DENTRO DAS TD:
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent =gordura;

    //DEFININDO AS TD COMO ELEMENTOS-FILHOS DA TR:
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //ATRIBUINDO A TR COMO ELEMENTO-FILHO DA TABELA
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});