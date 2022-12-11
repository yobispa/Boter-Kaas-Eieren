console.log("JS loaded")
let playerOneWins;
let playerTwoWins;
let computerWins;
let click = 0;
let cells = document.querySelectorAll(".box");
let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let running = false;

const makecolorblack = document.querySelector(".makecolorblack");
const backgroundcolorBtn = document.querySelector(".articleWrapper2");
const gameColor = document.querySelector(".gameColorClass");
const playerOneBtn = document.querySelector(".playerOne");
const playerTwoBtn = document.querySelector(".playerTwo");
const statusText = document.querySelector(".displayInfo");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//PlayerOne / PlayerTwo names & addEventlisteners for it
playerOneBtn.addEventListener("click", player1);
playerTwoBtn.addEventListener("click", player2);


function player1() {
    let playerOneName = document.querySelector(".name1").value;
    document.querySelector(".playerOneSubmitted").innerHTML = `Speler 1 &nbsp; is ${playerOneName}`
}

function player2() {
    let playerTwoName = document.querySelector(".name2").value;
    document.querySelector(".playerTwoSubmitted").innerHTML = `Speler 2 &nbsp; is ${playerTwoName}`
}

function test() {
    console.log(playerOneName)
}


//Page 1 & Page 2 function
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}


//it makes the background color when button is clicked.

makecolorblack.addEventListener("click", changeColorHome);
gameColor.addEventListener("click", colorReset);

function changeColorHome() {
    document.body.style.background = backgroundColor = "black";
      
}

function colorReset() {
    document.body.style.background = ``
}

//Change Color function

backgroundcolorBtn.addEventListener("click", backgroundColor);

function changeColor(color) {
    document.body.style.background = color;
}
  
function backgroundColor() {
    let chooseColor = prompt('Type a color', 'purple');
    changeColor(chooseColor);
}    

function resetBackgroundColor() {
    document.body.style.background = ``;
}
document.querySelector('.resetBackgroundClass').addEventListener('click', resetBackgroundColor);

//X & O function

    cells.forEach(cell => cell.addEventListener("click", function() {
        console.log("Cell clicked")
    }));
    running = true;





   
