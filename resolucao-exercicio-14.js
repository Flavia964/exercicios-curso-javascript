// 14. Crie uma função que verifica se um número é par com if else
// ex: isEven(12) => true;

function verificarSeEhPar(n) {
    if(n % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
console.log(verificarSeEhPar(5));