// exercício 1
//Crie um loop que vá somando números aleatórios entre 1 e 10 até que a soma chegue ou ultrapasse 100. 
//Mostre no final quantos números foram somados.
let soma = 0;
let numerosSomados = 0;

while (soma < 100) {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  soma += numeroAleatorio;
  numerosSomados++;
}

console.log(`Soma final: ${soma}`);
console.log(`Números somados: ${numerosSomados}`);

// exercício 2 tabuada de um numero (n)
function tabuadaPersonal(numero) {
  for (let tabuada = 1; tabuada <= 10; tabuada++) {
    console.log(`${numero} x ${tabuada} = ${tabuada * numero}`);
  }
  console.log(); // pula linha entre as tabuadas
}

tabuadaPersonal(7);

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