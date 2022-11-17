console.log("JS loaded")
let playerOneWins;
let playerTwoWins;
let computerWins;
let click = 0;
let cells = document.querySelectorAll(".cell");
let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let running = false;

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

//Page 1 & Page 2 function
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

//Change Color function
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

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    running = true;
}
initializeGame();

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex")

    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner()
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
    
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
}

function checkWinner() {
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
 }

 function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    document.querySelector(".displayInfo").innerHTML = ``
    running = true;
}



   
