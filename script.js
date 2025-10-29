console.log("Olá, mundo!");

//variavel: são usadas para armazenar os dados dos usuarios
//estrutura
//tipo da variavel + nome da variavel + valor;

//tipos de variaveis
// var, let e const

let idade = 18;
console.log(idade);

idade = 19;
console.log(idade);

// let é uma variavel que pode ser reatribuida
let nome = "Marina";
console.log(nome);

//const
const cpf = 123455678911;
console.log(cpf);

const sobrenome = "Pereira";
console.log(sobrenome);

let quantidade = 10;

let n1 = 1;
let n2 = 3;
console.log(n1 + n2);

n2 = "3";
console.log(n1 + n2);


// variaveis são espaços na memória onde podemos armazenar dados
// regras para criar nomes de variáveis:
// 1. não pode começar com número
// 2. não pode ter espaços
// 3. não pode usar caracteres especiais (ex: @, #, $, %, &, *)
// 4. não pode usar palavras reservadas (ex: let, const, var, if, else, function, return, etc)
// 5. usar camelCase para nomes compostos (ex: nomeCompleto, idadeUsuario, etc)
// 6. Javascript é case sensitive (maiusculas e minusculas fazem diferença)

// 3 tipos de variaveis 
// var (não usar mais)
// let (usar quando o valor da variável pode mudar)
// const (usar quando o valor da variável não pode mudar)

let numeroCelular = "(11) 99999-9999";
console.log(numeroCelular);

numeroCelular = "(11) 88888-8888";
console.log(numeroCelular);

const nacionalidade = "brasileira";
console.log(nacionalidade);

// nacionalidade = "argentina"; // isso vai dar erro, pois const não pode ser reatribuída

// tipos de dados
// string "" ou '' que são textos, caracteres, palavras
let nomeDoVisitante = "Surpresa!";
console.log(nomeDoVisitante);

// number -> dado numerico usado para armazenar numero = 123, 12.5, -10 que são números
let quantidadeDeLivros = 10;
console.log(quantidadeDeLivros);

// boolean -> é um tipo de dado que usamos para true ou false (verdadeiro ou falso)
let visitanteAtivo = true;
console.log(visitanteAtivo);

// null -> é um valor nulo, ou seja, a variável não possui valor nenhum
let saldoBancario = null;
console.log(saldoBancario);

// undefined -> é quando criamos uma variável mas não atribuímos nenhum valor a ela
let presencaDoVisitante;
console.log(presencaDoVisitante);