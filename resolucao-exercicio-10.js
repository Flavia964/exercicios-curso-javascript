// 10. Crie uma função que classifica uma idade em jovem, meia-idade e idoso
// jovens são aqueles que possuem até 39 anos;
// meia-idade são os que estão entre 40 e 60 anos;
// idosos são os que posssuem mais de 60 anos;
// a idade zero deve retornar "recém-nascido";
// Se a idade for menor que zero ou maior que 150, retornar "idade inválida"
// ex: classificaIdade(-1) => "idade inválida"

function classificaFaixaEtaria (idade) {
    if(idade < 0 || idade >=150) {
        return "Idade inválida!";
    } else if (idade ===0) {
        return "Recém- nascido!";
    } else if (idade > 60) {
        return "Idoso!";
    } else if (idade >=40) {
        return "Meia- idade!";     
    } else if (idade <=39) {
        return "Jovem!";
}
}
console.log(classificaFaixaEtaria(0));