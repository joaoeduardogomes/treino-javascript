const nomes = ['João', 'Luciano', 'Angelo', 'Samanta'];
const notas = [4, 10, 4.5, 9.5];

const reprovados = nomes.filter((_, indice) => notas[indice] < 6); //aqui adicionamos na variável de reprovados aqueles que tiverem nota menor do que 6.
//o parâmetro "_" é usado quando o programa não precisa trabalhar com aquela variável (retiramos "nome"). Mas ainda assim ele retorna o nome da pessoa, porque o "filter" está associado à lista "nomes"

console.log(`Reprovados: ${reprovados}`);