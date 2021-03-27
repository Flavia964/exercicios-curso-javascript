// 6. Crie uma função que retorna um preço após aplicado um desconto de 10%
// ex: precoComDesconto(10) => 9

function aplicarDescontoNoPreçoFinal (preço) {
    let percentual = 10;
        let obterPorcentagem = (percentual / 100) * preço;
            let valorFinal = preço - obterPorcentagem ;
                return valorFinal;
}
console.log("O valor com desconto de 10% será de:"+" " + "$"+ aplicarDescontoNoPreçoFinal (210) + ".");

