// 7. Criar uma função que retorna a quantidade de numeros
// de um numero inteiro positivo qualquer.

imprime = (numero) => console.log(numero)

function contaQuantidadeNumeros(numero){
  return numero.toString().length
}

const quantidadeNumeros = contaQuantidadeNumeros(1999);
imprime(quantidadeNumeros);