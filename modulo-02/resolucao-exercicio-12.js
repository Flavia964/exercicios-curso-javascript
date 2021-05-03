// 12. Criar uma função que verifica se um número natural é primo ou não.
// Dica: Um número N é primo se ele não for divisível por nenhum numero
// de 2 a N-1.

function verificaSeEhPrimo(numero) {
    let primo = numero !=1;
    for(let i=2; i<numero; i++) {
        if(numero % i == 0) {
            primo = false;
        }
    }
    return primo;
}
const ehPrimo = verificaSeEhPrimo(10);
console.log(ehPrimo);