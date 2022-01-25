const salaJS = [9, 8, 7.5, 4, 5.5, 6, 6.5, 10];
const salaC = [5.5, 9, 7, 8.5];
const salaPython = [7.5, 3, 9.5, 10, 10];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0);
    return somaDasNotas / notasDaSala.length;
}
/*REDUCE (faz um for na lista):
1) atual = valor do índice atual
2) acumulador = ele sempre joga o valor atual no acumulador, e todos os valores atuais jogados no acumulador vão sendo somados uns com os outros.
3) "atual + acumulador" é o timo de cálculo que fazemos com os dois parâmetros.
4) "0" é o valor inicial do acumulador no início da execução
*/


console.log(`Média da sala de JavaScript: ${mediaSala(salaJS)}`);
console.log(`Média sa sala de C: ${mediaSala(salaC)}`);
console.log(`Média da sala de Python: ${mediaSala(salaPython)}`);