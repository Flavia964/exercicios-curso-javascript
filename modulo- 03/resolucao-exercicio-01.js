// 1. Criar uma função que multiplica uma lista de numeros por dois
// ex: multiplyBy2([1,3]) => [2,6]

function multiplyBy2(list, num) {
    let multiplies = [];
    for(let i= 0; i< list.length; i++){
        let el = list[i];
        multiplies.push(el * num);
    }
    return multiplies
}

const result = (multiplyBy2([1, 3], 2));
console.log(result);


