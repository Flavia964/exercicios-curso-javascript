//17. Criar uma função que imprime todos os numeros positivos um array.

function imprimeNumerosPositivos(lista){
    for(let i= 0; i < lista.length; i++){
    let el = lista [i];
    if(el > 0){
    console.log(el);
    }
    }
}
  imprimeNumerosPositivos([1, 2, 3, -5, -9, 4, 70, 80, -98]);