
// 8. Verifique se algum numero na lista é maior que um valor N qualquer.

function someGreaterThan(list, n) {
    let i = 0;
    for(let i = 0; i<=list.length; i++) {
        let el = list [i];
        if(el > n) {
        return el;
        }
    }
}

const result = someGreaterThan([1, 2, 3, 11], 9);
console.log(result);
