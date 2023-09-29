var words=["mouse"];
var charactersGuessed=[];
var startButton=document.querySelector(".start-button");
var display=document.querySelector(".display");
var displayWord=[];

console.log("test");
console.log(words[0].length);
startButton.addEventListener("click",function(){
    for (let i = 0; i < words[0].length; i++) {
        displayWord+="_ ";
    }
    display.textContent=displayWord;
})
