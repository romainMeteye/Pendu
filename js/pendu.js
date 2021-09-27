// INITIALISATION ##################################################################################################
let word = randomWord();
let wordSplit = word.split("");
let maskWord = hiddenWord();
let playerLife = 7;

// FONCTIONS ########################################################################################################
function randomWord() {
    let wordList = ["lapin","voiture","musique","boolean","shifoumi","wagonnet","bisbille","croquelardon","procrastination","panegyrique","volatille","fennec","aventure","robotique","vitrine","contrister","margouillis","paraskevidekatriaphobie","eplapourdi","paltoquet","victorieux","diablotin","dechiffrage","parasite","illusion","organisation","kayak","interview","acajou","coccyx","yaourt","seisme","zipper","whisky","glue","zut","ski","tic","jet","val","git","abo","gaz","tac","toc","vie","riz","pie","momie","voleur","defaitiste","divulguer","mensonge","applatir","hip","hop","cercle","tyran","walabi","caimans","appartenance","identite","dentiste","collection","poster","calibrer","jargon","zozoter","arbalete","vitesse","devinette","humour","precipitation","verite","violence","mission","exploration","participation","recherche","medieval","temps","phobie","poursuite","horreur","perdu","espoir","recours","stylo","reserve","cachette","chateau","tableau","fuite","filature","armee","abattue","synonyme","chantonner","secourir","ancien","memorisation","prevision","anticiper","finition","commencement","histoire","ignorance","plainte","combat","dispaitre","plastique","ventriloque","affliger","bonheur","bienveillance","proteger","ordinateur","commander","idee","imaginaire","gougnafier","ouroboros","immarcescible","thebaide","druope","morigener","zinzinuler","apocryphe","ignivome","radouber","vindicatif","baguenauder","debagouler","baguenauder","tetraktys","corallin","noosphere","pellucide","petrichor","hypothese","pageot","mafflu","labile","kraken","cacochyme","babiller","apagogie"];
   let number = Math.floor(Math.random() * wordList.length)
   return wordList[number];
   // Prends un mot aléatoirement dans la liste
};
function hiddenWord() {
    let hidden = []
    for( let n = 0; n < word.length ; n++) {
        let countLetter = hidden.push("_");
    }
    return hidden;
    // Créer un tableau de la grandeur de mot avec que des underscores pour l'affichage visuel
};
// Interface du menu -----------------------------------------------------------------------------------------------
function menu() {
    word = randomWord();
    wordSplit = word.split("");
    maskWord = hiddenWord();
    playerLife = 7;
    let navig = prompt(`Bonjour et bienvenue dans le jeu du Pendu ! \nQue voulez vous faire ?\nj = jouer\nr = règles\nq = quitter`)
    // let navigLow = navig.toLowerCase
    navig === "j" ? game() : navig === "r" ? rules() : navig === "q" ? "bye" : menu();
};
function rules() {
    alert(`Ceci sont les règles`);
    menu();
};
// Fonction principale de jeu --------------------------------------------------------------------------------------
function game() {
    if ((maskWord.indexOf("_") === -1)) {
        alert(`Bravo vous avez gagné ! Le mot était "${word}" !`);
        menu();
        // Quand le joueur trouve toutes les lettres (plus d'underscores), affiche le message de victoire et retourne au menu       
    }
    else if(playerLife === 0) {
        alert(`Dommage, vous avez perdu... Le mot était "${word}" !`);
        menu();
        // Quand le joueur n'a plus de vie, affiche le message de defaite et retourne au menu
    }
    // Interface de Jeu --------------------------------------------------------------------------------------------
    else {
        let enterLetter = prompt(`\n${playerLife} chances restantes, entrez une lettre pour jouer :\n ${maskWord.join(" ")}`);
        // let letterChoice = enterLetter.toLowerCase
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
}
// Début du jeu #########################################################################################################
menu();