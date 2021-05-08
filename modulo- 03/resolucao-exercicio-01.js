// 1. Criar uma função que multiplica uma lista de numeros por dois
// ex: multiplyBy2([1,3]) => [2,6]

function multiplyBy2(list) {
    let multiplies = [];
    for(let i= 0; i< list.length; i++){
        let el = list[i];
        multiplies.push(el * 2);
    }
    return multiplies
}

const result = (multiplyBy2([1, 3]));
console.log(result);


