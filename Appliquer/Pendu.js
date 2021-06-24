function chooseWord(){
    var list = ["banana", "apple", "orange", "mango", "kiwi"];

    var randomNumberList = Math.floor(Math.random() * list.length);
    var randomWord = list[randomNumberList];

    return randomWord;
}
 
function existsAlready(list, character){
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
       // console.log("element: "+ element)
        // console.log("character: "+ character)
    
        if (element == character) {
            // console.log("==")
            return true;
        }
        
    }
    return false;
}

function replaceCharacters(word, letters){
        for (let index = 0; index < word.length; index++) {
        const character = word[index];
        // console.log(character)
        if (existsAlready (letters, character) == false) {
            word = word.replace (character, "*");
            // console.log("notexist: "+ character)
            // console.log(word)
        }
        
        
    }
    return word
}
var chosenWord = chooseWord();
console.log(chosenWord);
var mask = replaceCharacters(chosenWord, ['a']);
console.log(mask);