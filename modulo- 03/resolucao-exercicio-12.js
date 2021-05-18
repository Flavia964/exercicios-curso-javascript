// 12. Conte a quantidade de vogais que aparecem em um texto

function getVowelsInText(text) {
    let countVowels = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for(let char of text) {
        if(vowels.includes(char)) {
            countVowels++
        }
    }
    return countVowels
}

const howManyVowels = getVowelsInText("JavaScript");
console.log(howManyVowels);