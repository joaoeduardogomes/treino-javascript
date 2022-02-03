import {Cliente} from "./Cliente.js"
import {Gerente} from "./funcionarios/gerente.js"
import {Diretor} from "./funcionarios/diretor.js"
import {SistemaAutenticacao} from "./sistemaAutenticacao.js"

const diretor = new Diretor("Ana", 10000, 789564123);
const gerente = new Gerente("Bia", 5000, 321568746);
const cliente = new Cliente("Arthus", 549846316, "789");

// Senha diretor:
diretor.cadastrarSenha("polenta");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "polenta");

//senha gerente:
gerente.cadastrarSenha("farofa");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "farofa");

//senha cliente:
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "789");


//teste de autenticação de login;
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);