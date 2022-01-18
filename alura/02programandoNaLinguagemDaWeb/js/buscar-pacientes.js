var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // função pra receber a resposta da requisição enviada:
    xhr.addEventListener("load", function() {

        //acessando span com mensagem de erro:
        var erroAjax = document.querySelector("#erro-ajax");

        //executar apenas se a requisição não tiver nenhum erro:
        if(xhr.status == 200) {

            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);//transforma o JSON em array JS.

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }   
        else{
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send(); //envia a requisição
});