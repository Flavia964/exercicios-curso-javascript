// 11. Conte a quantidade de vogais que aparecem em uma palavra

function countVocalsInSingleWord(word) {
    let vowels = 'aAeEiIoOuU';
    let countVowels = 0;
    for(let char of word) {
    if(vowels.includes(char)) {
         countVowels++
     }
    }
    return countVowels
}
    
const howManyVowels = countVocalsInSingleWord("JavaScript");
console.log(howManyVowels);
