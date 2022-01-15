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
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        //"!pesoValido" é o mesmo que "pesoValido == false". O "!" é uma negação.
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoValido = false;

        //Atribui a classe para aplicar a modificação de estilo do CSS quando for o caso:
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;

         //Atribui a classe para aplicar a modificação de estilo do CSS quando for o caso:
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc; 
    }
}

function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
    //O "toFixed" vai reduzir as casas decimais para 2.
}

function validaPeso(peso) {
    if(peso > 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    }
    else {
        return false;
    }
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Nome do paciente não informado")
    }

    if(paciente.gordura.length == 0) {
        erros.push("Gordura do paciente não informada")
    }

    if(paciente.peso.length == 0) {
        erros.push("Peso do paciente não informado")
    }

    if(paciente.altura.length == 0) {
        erros.push("Altura do paciente não informada")
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("O peso informado é inválido")
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("A altura informada é inválida")
    }

    return erros;
}