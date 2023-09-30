var words= "mouse";
var charactersGuessed=[];
var startButton=document.querySelector(".start-button");
var display=document.querySelector(".display");
var timerEL=document.querySelector("#timer");
var scoreTotal = document.querySelector(".scoreTotal");
var scoreWins = document.querySelector(".wins");
var scoreLosses = document.querySelector(".losses");
var displayWord;
var timeInterval;
var secondsLeft=20;
var counter=0;
var wins;
var losses=0;



startButton.addEventListener("click",function(){
    secondsLeft=20;
    clearInterval(timeInterval);
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
    if(counter===words.length){
        wins++;
        storage();
        clearInterval(timeInterval);
        
    }

    
})


function setTime(){
    timeInterval=setInterval(function(){
        secondsLeft--;

        timerEL.textContent="Timer Remaining "+secondsLeft;
        if(secondsLeft<=0){
            clearInterval(timeInterval);
            losses++;
            storage();
            
        }

    },1000)
}

function storage() {
    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", losses);

    scoreWins.textContent = wins;
    scoreLosses.textContent = losses;
}


function mainFunction(){


    wins = localStorage.getItem("wins");
    losses = localStorage.getItem("losses");

    storage();

}
mainFunction();