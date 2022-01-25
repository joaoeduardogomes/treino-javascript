const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);
//if ternário: [CONDIÇÃO] ? IF (true) : ELSE
//O "++" vem antes de "nota" porque queremos somar 1 ao valor nota e adicionar à lista, não só incrementar o 'nota'.
console.log(notasAtualizadas);