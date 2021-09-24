let word = randomWord();
let wordSplit = word.split("");
let maskWord = hiddenWord();
let playerLife = 7;

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
function game() {
    let enterLetter = prompt(`\n${playerLife} chances restantes, entrez une lettre pour jouer :\n ${maskWord.join(" ")}`);
    if (enterLetter.length > 1 || enterLetter.length < 1) {
        game();
    }
    else if (wordSplit.indexOf(enterLetter) === -1) {
        playerLife--;
        game();
    }
    else {
        for(let n = 0; n < wordSplit.length ; n++) {
            if (enterLetter === wordSplit[n]) {
                maskWord.splice(n, 1, enterLetter);
            }
            else {
                 ""
                }
            }
            return game();
        }
}
alert("Bonjour et bienvenue dans le jeu du Pendu !");
game();