// 7. Crie uma função que retorna um preço após aplicado um desconto de n%

function aplicarDesconto (preco, desconto) {
    const valorDesconto = desconto / 100 * preco;
    const valorFinal = preco - valorDesconto ;
    return valorFinal;
}
console.log(aplicarDesconto(80, 50));