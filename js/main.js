console.log("JS loaded")
let playerOneWins;
let playerTwoWins;
let computerWins;
let click = 0;
let cells = document.querySelectorAll(".box");
let options = ["", "", "", "", "", "", "", "", ""]
 
let currentPlayer = "X"
let playerTurn = 1;
let myMusic = document.getElementById("myAudio");
myMusic.volume = 0.4;

const muteVolumeClass = document.querySelector(".muteVolume");
const setVolumeHalfClass = document.querySelector(".setVolumeHalf");
const setVolumeOneOfFiveClass = document.querySelector("setVolumeOneOfFive");
const restartBtnforGame = document.querySelector(".restartBtnGame");
const restartGameBtn = document.querySelector(".restartGameClass");
const submitButtonClass = document.querySelector(".submitButton");
const makecolorblack = document.querySelector(".makecolorblack");
const backgroundcolorBtn = document.querySelector(".articleWrapper2");
const gameColor = document.querySelector(".gameColorClass");
const playerOneBtn = document.querySelector(".playerOne");
const playerTwoBtn = document.querySelector(".playerTwo");
const statusText = document.querySelector(".displayInfo");
const overlay = document.querySelector(".overlayClass");
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



console.log(options.length)

restartBtnforGame.addEventListener("click", restartGame);

//PlayerOne / PlayerTwo names & addEventlisteners for it

playerOneBtn.addEventListener("click", player1);
playerTwoBtn.addEventListener("click", player2);

let playerOneName1 = ""
let playerTwoName2 = ""

submitButtonClass.disabled = true;

function player1() {
    let playerOneName = document.querySelector(".name1").value;
    playerOneName1 = playerOneName
    document.querySelector(".playerOneSubmitted").innerHTML = `Speler 1 &nbsp; is ${playerOneName}`
    checkInput()
}

function player2() {
    let playerTwoName = document.querySelector(".name2").value;
    playerTwoName2 = playerTwoName
    document.querySelector(".playerTwoSubmitted").innerHTML = `Speler 2 &nbsp; is ${playerTwoName}`
    checkInput()
}


//Page 1 & Page 2 function

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

//check if input text is filled and enable button

function checkInput() {

    if (playerOneName1.length > 0 && playerTwoName2.length > 0) { 

        submitButtonClass.disabled = false;
        playersScore()
    }
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

//eventlistener for the grid cells

function playersScore() {

    document.querySelector(".playerOneNameClass").innerHTML = `<h1>${playerOneName1} score</h1><p class="align-center">Symbol: X</p>`
    document.querySelector(".playerTwoNameClass").innerHTML = `<h1>${playerTwoName2} score</h1><p class="align-center">Symbol: O</P>`

}
    cells.forEach((cell, index) => cell.addEventListener("click", function() {
        console.log(index)
        placeMarker(index);
    }));

//mute volume, set volume to half, set volume to full and set volume to 1/5 functions && event listerners for it

muteVolumeClass.addEventListener("click", muteVolume);
setVolumeHalfClass.addEventListener("click", setVolumeToHalf);
// setVolumeOneOfFiveClass.addEventListener("click", setVolumeToOneOfFive);

function muteVolume() {
    myMusic.volume = 0.0001;
}

function setVolumeToHalf() {
    myMusic.volume = 0.5;
}

function setVolumeToOneOfFive() {
    myMusic.volume = 0.2;
}

// Place x & o function

function placeMarker(index) {

    if (cells[index].textContent !== "") {
        return;
    } else {
        checkPlayerTurn();
    }
    options[index] = currentPlayer;
    cells[index].textContent = currentPlayer; 




    checkWinner()
}

//check player turn

function checkPlayerTurn() {

    if (playerTurn == 2) {
        currentPlayer = "O";
        playerTurn = 1;
    } else if (playerTurn == 1) {
        currentPlayer = "X"
        playerTurn = 2;
    }
}


//checkwinner

function checkWinner() {

    let roundWon = false;
    
    for (let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        console.log(options)

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon) {

        document.querySelector(".playerWonClassAdd").classList.add("playerWonClass");
        document.querySelector(".stickersClassAdd").classList.add("stickersClass");

        if (currentPlayer == "X") {
            document.querySelector(".playerWonClass").textContent = `${playerOneName1} wins!`;
        } else if (currentPlayer = "O") {
            document.querySelector(".playerWonClass").textContent = `${playerTwoName2} wins!`;
        } else {
            document.querySelector(".playerWonClass").textContent = `Draw Or Error`;
        }

        restartGameBtn.addEventListener("click", restartGameOvrl);
        restartGameBtn.textContent = "Restart game";
        
        
        overlay.classList.add("overlay");
        restartGameBtn.classList.add("restartGameOverlay");
        running = false;
    }
} 



// function restart game

    function restartGameOvrl() {
        options = ["", "", "", "", "", "", "", "", ""];
        
        overlay.classList.remove("overlay");
        restartGameBtn.classList.remove("restartGameOverlay");
        document.querySelector(".playerWonClass").textContent = ``;
        document.querySelector(".playerWonClassAdd").classList.remove("playerWonClass");
        document.querySelector(".stickersClassAdd").classList.remove("stickersClass");
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";

        }
        
    }

    function restartGame() {
        options = ["", "", "", "", "", "", "", "", ""];
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";

        }
    }
 







   
