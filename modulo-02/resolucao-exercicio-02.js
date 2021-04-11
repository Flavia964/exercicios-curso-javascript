// 2. Criar uma função que imprime os numeros de n a 1,
// onde n é um inteiro positivo;

function imprimeDeTrasParaFrente(n) {
    for(let i = n.length-1;i>=1;i--){
        let list = [i];
        console.log(list);
    }
}
imprimeDeTrasParaFrente([1,2,3,4,5,6]);