// 14. Criar uma função que reverte um numero.
// Dica: transformar o numero em string, reverter e depois passar p/numero

function reverteNumero(num){
    const converte = num.toString().split('').reverse().join('') * Math.sign(num);
    return converte;
}

const numero = reverteNumero(9384);
console.log(numero);
