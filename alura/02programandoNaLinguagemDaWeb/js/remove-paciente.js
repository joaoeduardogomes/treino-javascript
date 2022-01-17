var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    // EXCLUIR SOMENTE O ELEMENTO-PAI DA TD (pra não excluir o h1 por acidente):
    if(event.target.tagName == 'TD') {
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
    //500 milissegundos = 5s;
    }
});

