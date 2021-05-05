// 15. Criar uma função que calcula o mínimo múltiplo comum de dois
// inteiros positivos.
// ex: mmc(2,3) => 6;  mmc(4,12) => 12

function calculaMMC(num1, num2){
    let resto, a, b;
    a = num1;
    b = num2;
    while(resto!=0){
        resto = a % b;
        a = b;
        b = resto;
    }
    return (num1*num2)/a;
    }
    console.log(calculaMMC(12, 5));