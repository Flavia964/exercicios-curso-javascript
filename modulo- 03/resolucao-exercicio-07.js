
// 7. Verifique se todos os numeros de uma lista sao maiores que um valor N qualquer.

function everyGreaterThan(list, n) {
    let check = true;

    for(let i = 0; i<=list.length; i++){
        let el = list[i];
        if(el > n){
        check = false;
        break;
        }
    }
    return check;
}

const result = everyGreaterThan([11, 1, 4], 20);
console.log(result);