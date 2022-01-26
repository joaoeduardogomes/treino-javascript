const cliente = {
    nome: 'Caio',
    idade: 34,
    cpf: '546987213',
    email: 'algumemail@mail.com'
};

console.log(cliente);

cliente.fone = '991333791';
/* basta passar NomeDoObjeto.Chave = valor 
É semelhante ao Dicionario['chave'] = valor do Python

*Se chamar 'cliente.fone=outroNumero' novamente, o JS substitui o valor da chave
*/

console.log(cliente);