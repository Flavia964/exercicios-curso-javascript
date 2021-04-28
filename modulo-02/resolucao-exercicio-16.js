// 16. Criar uma função que imprime todos os numeros de um array.

function imprimeLista(lista){
    for(let i= 0; i<lista.length; i++){
        let el= lista[i];
        console.log(el);
    }
}
imprimeLista([1,2,3,4,5,6]);