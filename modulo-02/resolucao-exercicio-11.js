// 11. Criar uma função que calcula o fatorial de um numero.
// Ex: 5!(5 fatorial) = 5 * 4 * 3 * 2 *1

function calculaFatorial(numero){
    let acumulador = 1;
    for(let i = numero; i>=1; i--){
        acumulador = acumulador * i;
    }
    return acumulador;
}

const fatorial = calculaFatorial(5);
console.log(fatorial); 