var words= "mouse";
var charactersGuessed=[];
var startButton=document.querySelector(".start-button");
var display=document.querySelector(".display");
var timerEL=document.querySelector("#timer");
var displayWord;
var timeInterval;
var secondsLeft=20;
var counter=0;
var wins=0;
var losses=0;

startButton.addEventListener("click",function(){
    displayWord = [];
    setTime();
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
            counter++;
        } else {
        }
    } 
    displayWord = displayWord.join("");
    display.textContent = displayWord;
    console.log(displayWord);
})


function setTime(){
    timeInterval=setInterval(function(){
        secondsLeft--;

        timerEL.textContent="Timer Remaining "+secondsLeft;
        if(secondsLeft<=0){
            clearInterval(timeInterval);
            losses++;
        }

    },1000)
}



function mainFunction(){

    if(counter===words.length){
        wins++;
    }

}
mainFunction();