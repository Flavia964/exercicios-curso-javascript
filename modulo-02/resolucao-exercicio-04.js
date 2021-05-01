
// 4. Criar uma função que imprime os ímpares de 1 a 50.
// Nota: Não usar o if nem o else

imprime = (numero) => console.log(numero)

function imprimeNumerosImparesDeUmCinquenta(){
  let i = 1;
  while(i <=50 ){
    imprime(i);
    i+=2
  }
}

imprimeNumerosImparesDeUmCinquenta();