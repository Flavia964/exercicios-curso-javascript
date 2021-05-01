// 6. Criar uma função que retorna a soma dos numeros pares
// naturais de 1 a n. Não usar o if else;

function verificaSeEhPar(numero){return numero % 2 === 0;}

imprime = (numero) => console.log(numero)

function soma(n){
  let acc = 0;
  let i = 1;
  i++
  while(i <=n ){
    acc = acc + i;
    i+=2
  }
  return acc
 }
let resultado = soma(10);
imprime(resultado);