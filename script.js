var words= "mouse";
var charactersGuessed=[];
var startButton=document.querySelector(".start-button");
var display=document.querySelector(".display");
var displayWord;


startButton.addEventListener("click",function(){
    displayWord = [];
    for (let i = 0; i < words.length; i++) {
        displayWord+="_";
        
    }
    display.textContent=displayWord;

})

document.addEventListener("keydown", function(e) {
    charactersGuessed = e.key;
    console.log(charactersGuessed);
    var splitWord = words.split("");
    displayWord = displayWord.split("");
        console.log(displayWord);
    for (let i = 0; i < words.length; i++) {
        if (charactersGuessed === splitWord[i]) {
            displayWord.splice(i, 1, charactersGuessed);
            displayWord = displayWord.join("");
            display.textContent = displayWord;
        } else {

        }
    } 
})

