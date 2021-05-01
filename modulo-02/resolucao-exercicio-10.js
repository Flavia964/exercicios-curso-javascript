// 10. Criar uma função que calcula a potência k de um numero n
// inteiro positivo qualquer. Use um loop.

function calculaPotencia(base, expoente){
    let acumulador = 1;
    for(let i= 1; i<=expoente; i++){
        acumulador = acumulador * base;
    }
    return acumulador;
}

const potencia = calculaPotencia(3, 3);
console.log(potencia);