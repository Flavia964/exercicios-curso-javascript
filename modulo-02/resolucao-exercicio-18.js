// 18. Criar uma função que imprime todos os elementos de um array
// que estão posicionados em índices múltiplos de 5.
// imprime5(["hey",2,3,6,7,8,9,0,"olá"]) => imprime hey e 8

function imprimeElementosDosIndicesMultiplos5(lista){
    for(let i= 0; i< lista.length; i++){
        let el = lista [i];
       if(i % 5 === 0){
            console.log(el);
        }
    }
}
imprimeElementosDosIndicesMultiplos5(["Pedro", 1, 2, 3, 4, "Maria"]);