// 12. Conte a quantidade de vogais que aparecem em um texto

function getVowelsInText(text) {
    let countVowels = 0;
    let vowels = ["a","ã","A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for(let char of text) {
        if(vowels.includes(char)) {
            countVowels++
        }
    }
    return countVowels
}

const howManyVowels = getVowelsInText("Linguagem de programação JavaScript, exercícios para praticar. Bora?!");
console.log(howManyVowels);