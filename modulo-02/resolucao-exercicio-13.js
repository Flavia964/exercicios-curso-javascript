// 13. Criar uma função que reverte uma palavra. Usar o for.
// ex: revertWord("texto") => "otxet"

function inverterTexto(str) {
    var t = "";
    for (var i = str.length - 1; i >= 0; i--) {
        t += str[i];
    }
    return t;
}
console.log(inverterTexto("JavaScript"));