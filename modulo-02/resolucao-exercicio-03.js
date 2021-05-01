// 3. Criar uma função que imprime os pares de 1 a 50. Use o while
// Nota: Não usar o if nem o else

 imprime = (numero) => console.log(numero)

function imprimeNumerosParesDeUmCinquenta(){
  let i = 1;
  i++
  while(i <=50 ){
    imprime(i);
    i+=2
  }
}

imprimeNumerosParesDeUmCinquenta();