// ADICIONANDO FUNCIONALIDADE DO FORMULÁRIO DO HTML:
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); //bloqueia o comportamento padrão do botão
    
    var form = document.querySelector("#form-adiciona"); //pega o form do HTML

    var paciente = obtemPacienteDoFormulario(form); //aqui criamos um objeto
    


    // VERIFICAÇÃO DE ERROS NOS DADOS INSERIDOS
    var erros = validaPaciente(paciente);
    if(erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); //limpa o formulário após cada cadastro de paciente

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});


function obtemPacienteDoFormulario(form) {
    // ACESSANDO OS INPUTS DO FORM PELO ATRIBUTO "name" (form.[ATRIBUTO NAME].value):

    var paciente = {
        //usa-se ".value" para pegar o valor digitado dentro do input.
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value) //usando a função do "calcula-imc.js"
    }
    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //CRIANDO AS TD E AS DEFININDO COMO ELEMENTOS-FILHOS DA TR:
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //limpa as mensagens de erro para atualizá-las ao invés de somá-las.

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent= erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    //CRIANDO UM ELEMENTO NO HTML PELO JS (tr):
    var pacienteTr = montaTr(paciente);
    //ATRIBUINDO A TR COMO ELEMENTO-FILHO DA TABELA
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}