// 20. Crie uma função que recebe um numero inteiro positivo como parâmetro
// e que retorna "uga" se um numero for multiplo de 2
// e que retorna "buga" se um numero for multiplo de 5
// e que retorna "ugabuga" se um numero for multiplo de 10
// e "bugou" se o numero não for multiplo nem de 2, nem de 5 nem de 10;

function ehMultiplo(n) {
    if(n % 10 === 0) {
        return "Ugabuga!";
    } else if(n % 5 === 0) {
        return "Buga!";
    } else if(n % 2 === 0) {
        return "Uga!";
    } else {
        return "Bugou!";
    }
}
console.log(ehMultiplo(5));