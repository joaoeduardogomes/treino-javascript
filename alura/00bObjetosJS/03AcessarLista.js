const cliente = {
    nome: 'Caio',
    idade: 34,
    cpf: '546987213',
    email: 'algumemail@mail.com'
};

const chaves = ['nome', 'idade', 'cpf', 'email'];

console.log(cliente[chaves[0]])
/* Quando queremos acessar um valor do objeto, podemos usar o ponto.
Ex: cliente.nome = 
Porém, quando queremos acessar através de uma variável, conforme acima, temos que passar por colchetes.
Ex: cliente[chaves[0]]
*/

chaves.forEach(info => console.log(cliente[info]));
//ele percorre a variável de chaves e pesquisa a informação em cada uma daquelas posições(nome, idade, cpf e email)

//Outra maneira de acessar o valor da chave do objeto:
console.log(cliente['nome'])