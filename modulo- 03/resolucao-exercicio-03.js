// 3. Criar uma função que filtra multiplica numeros pares por dois
// ex: filterAndmultiplyEvenBy2([1, 3, 2, 4]) => [4, 8]

function filterAndMultiplyEvenBy2(list) {
    let multiplies = [];
    for(let i= 0; i< list.length; i++){
       let el = list[i];
       if(el % 2 === 0) {
        multiplies.push(el * 2);
    }
    }
    return multiplies
}

const result = (filterAndMultiplyEvenBy2([1, 2, 4, 3, 6]));
console.log(result);
