// 3. Criar uma função que imprime os pares de 1 a 50. Use o while
// Nota: Não usar o if nem o else

function imprimeNumerosPares(list) {
    let i = 0
    while (i % 2 === 0){
        console.log(list[i]);
        i++;
    }
}
imprimeNumerosPares([1,2,3,4,5,6]);