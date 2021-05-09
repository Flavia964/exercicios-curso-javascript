// 4. Encontre o primeiro elemento em uma lista de numeros cujo valor é maior que N.

function findFirstGreaterThanN(number) {
    let el;
    for(let i = 0; i<=number.length; i++) {
        if(number[i] > 10){
        el = number[i];
        break;
        }
    }
    return el
}

const encontreeOhMaior = (findFirstGreaterThanN([2, 3, 9, 5, 6, 50]));
console.log(encontreeOhMaior);