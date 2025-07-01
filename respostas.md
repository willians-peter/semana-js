// exercício 1
let soma = 0;
let numerosSomados = 0;
while (soma < 100) {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  soma += numeroAleatorio;
  numerosSomados++;
}
console.log(`Soma final: ${soma}`);
console.log(`Números somados: ${numerosSomados}`);
exercício onde soma 

___________________________
começa com variavel soma e numerosSomados com valor 0, loop while roda ate valor de soma ser menor que 100 numeroAleatorio gerado pelo math.floor para numero ficar inteiro e math.random para gerar o numero ate 10.
depois soma o numero aleatorio e incrementa ele ++, por fim imprime a soma final e os numeros somados
___________________________
// exercício 2 tabuada de um numero (n)
function tabuadaPersonal(numero) {
  for (let tabuada = 1; tabuada <= 10; tabuada++) {
    console.log(`${numero} x ${tabuada} = ${tabuada * numero}`);
  }
  console.log(); // pula linha entre as tabuadas
}

tabuadaPersonal(7);
__________________________________
função que imprimi a  tabuada de um numero N, 
loop tabuada é igual a 1 e o loop repete ate tabuada ser = a 10 e incrementa 1(++)
imprime o numero N x tabuada que anda no loop e por fim mais um console para pular linha se tivesse mais tabuadas a fazer por exemplo.
__________________________________
// exercício 3
//Crie uma função arrow chamada mostrarParesDeAte 
// que recebe um número n e imprime todos os números pares de 0 até n.

const mostrarParesDeAte = (n) => {
  let pares = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  console.log(pares.join(', '));
};

mostrarParesDeAte(99);
_________________________
cria um array vazio pares[]
loop for que começa no valor 0 e vai ate =n sendo acrescido +a (++)
se o modulo de i for zero indicando divisão par array pares é acrescido com o numero [i,] sendo acrescido no array pelo push
depois console,log imprime os array pare[] com .join para concatenar separando os  com ,
____________________________

//exercício 4 adivinhar o numero e mostrar quantidade de tentativas:

let numeroX = 1;
let tentativas = 0;

while (true) {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(`O número aleatório é: ${numeroAleatorio}`);
  tentativas++;
  console.log(`Tentativa ${tentativas}: ${numeroAleatorio}`);

  if (numeroX === numeroAleatorio) {
    console.log(`Número x: ${numeroX}`);
    console.log(`Você Acertou em ${tentativas} tentativas`);
    break;
  }
}
_______________________
numero X que tentamos acertar (defini como 1 no exemplo)1 e tentativas =0 
loop true gera numero aleatorio como no exercicio 1 e imprime este numero apenas para avaliar se estava funcionando
tentativas ++ para uncrementar numero de tentativas
se numero x identido numero aleatorio imprime o numero x e voce acertou em tantas tentativas
_______________________________________
