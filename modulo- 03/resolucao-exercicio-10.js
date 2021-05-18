
// 10. Criar uma função que filtra multiplica numeros pares por dois
// e soma os elementos;
// ex: filterAndmultiplyEvenBy2Sum([1, 3, 2, 4]) => 12

function filterAndmultiplyEvenBy2Sum(list) {
    let acc = 0;
    
    for(let i = 0; i<=list.length; i++) {
        let el = list[i];
        if(el % 2 === 0) {
        let multiplies = el * 2;
        acc = acc + multiplies;
        }
    }
    return acc;
}
const result = filterAndmultiplyEvenBy2Sum([1, 3, 2, 4,]);
console.log(result);