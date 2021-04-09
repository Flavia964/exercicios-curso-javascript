// 8. Crie uma função que classifica uma idade em jovem, meia-idade e idoso
// jovens são aqueles que possuem até 39 anos;
// meia-idade são os que estão entre 40 e 60 anos;
// idosos são os que posssuem mais de 60 anos;
// ex: classificaIdade(60) => "meia-idade"

function classificaFaixaEtaria (idade) {
    if(idade <=39){
        return "Jovem!";
    } else if (idade > 60) {
        return "Idoso!";
    } else if (idade >=40) {
        return "Meia- idade!";
}
}
console.log(classificaFaixaEtaria(60));