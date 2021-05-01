// 9. Criar uma função que retorna o primeiro dígito
// de um numero inteiro positivo qualquer.

imprime = (numero) => console.log(numero);

function retornaPrimeiroDigitoNumero(numero){
    return numero.toString().charAt(0);
}

const primeiroDigito = retornaPrimeiroDigitoNumero(30);
imprime(primeiroDigito);