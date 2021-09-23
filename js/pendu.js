let word = randomWord();
let wordSplit = word.split("");
let maskWord = hiddenWord();

function randomWord() {
    let wordList = ["lapin","voiture"]
   let number = Math.floor(Math.random() * wordList.length)
   return wordList[number];
}
function hiddenWord() {
    let hidden = []
    for( let n = 0; n < word.length ; n++) {
        let countLetter = hidden.push("_");
    }
    return hidden;
}

alert("Bonjour et bienvenue dans le jeu du Pendu !");
let enterLetter = prompt(`\n7 chances restantes, entrez une lettre pour jouer :\n ${maskWord.join(" ")}`);
console.log(maskWord);
console.log(word);
console.log(wordSplit);

