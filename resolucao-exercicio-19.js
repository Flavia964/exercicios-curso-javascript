// 19. Crie uma função que verifica se um número inteiro positivo qualquer
// é divisível por um outro numero inteiro positivo qualquer

function verificaSeSaoDivisiveis(n1, n2) {
    if(n1 % n2 === 0) {
        return "São divisíveis!";
    } else {
        return "Não são divisíveis!";
    }
}
console.log(verificaSeSaoDivisiveis(9, 9));