// 6. Crie uma função que retorna um preço após aplicado um desconto de 10%
// ex: precoComDesconto(10) => 9

function aplicarDescontoDezPorCento (preco) {
    const percentual = 10;
    const valorDesconto = percentual / 100 * preco;
    const valorFinal = preco - valorDesconto;
    return valorFinal;
}
console.log("O valor com desconto de 10% será de:" + " " + "$" + aplicarDescontoDezPorCento(210) + ".");