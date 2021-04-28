// 5. Criar uma função que retorna a soma dos numeros naturais de 1 a n.

function imprimeSoma(n){
 let acc = 0;
 for (let i = 1; i<=n; i++) {
     let el= i;
    acc=acc + el;
    console.log(acc);
}
return acc
}
imprimeSoma(10);