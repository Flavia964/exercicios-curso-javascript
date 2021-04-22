// 20. Criar uma função que imprime todos os numeros contidos
// em uma lista de lista de numeros.
// ex: flatPrint([[4,5,6], [4,5,7], [14,25,6]]) => imprime 4,5,6,4,5,7,14,25,6

    function juntarListas(){
        const listas = [...[1, 2, 3], ...[4, 5, 6], ...[10,20]];
        console.log(...listas);
    }
    juntarListas();