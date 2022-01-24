const alunos = ['João', 'Luciano', 'Angelo', 'Julian'];
const mediaAlunos = [8, 10, 7, 9];

let listaAlunosNotas = [alunos, mediaAlunos];

    // FUNÇÃO QUE BUSCA UM ALUNO:
//                   param. necessário
const mostraNomeNota = (nomeDoAluno) => {
    if(listaAlunosNotas[0].includes(nomeDoAluno)) {
        let indice = listaAlunosNotas[0].indexOf(nomeDoAluno);
        return listaAlunosNotas[0][indice] + ', sua média é: ' + listaAlunosNotas[1][indice]
    }
    else {
        return 'Aluno não encontrado.'
    }
}

console.log(mostraNomeNota("João"));