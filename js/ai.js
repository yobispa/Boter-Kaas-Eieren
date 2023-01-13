console.log("JS loaded")
let playerOneWins;
let playerTwoWins;
let computerWins;
let click = 0;
let cells = document.querySelectorAll(".box");
let options = ["", "", "", "", "", "", "", "", ""];
let drawChecker = 0;

let H = "X";
let AI = "O"
let playerTurn = 1;
let myMusic = document.getElementById("myAudio");
myMusic.volume = 0.4;

const muteVolumeClass = document.querySelector(".muteVolume");
const setVolumeHalfClass = document.querySelector(".setVolumeHalf");
const setVolumeOneOfFiveClass = document.querySelector("setVolumeOneOfFive");
const restartBtnforGame = document.querySelector(".restartBtnGame");
const restartGameBtn = document.querySelector(".restartGameClass");
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


//eventlistener for the grid cells
    cells.forEach((cell, index) => cell.addEventListener("click", function() {
        placeMarker(index);
        }));


// Place x & o function


function placeMarker(index) {
    

    if (cells[index].textContent !== "") {
        return;
    } else {
        checkPlayerTurn();
    }
    drawChecker++;
    options[index] = H;
    cells[index].textContent = H; 
    
    computer()
    checkDraw()
    checkWinner()

}

//check player turn

function checkPlayerTurn() {
    
    // console.log("checking player turn");
    if (playerTurn == 2) {
        playerTurn = 1;
       
    } else if (playerTurn == 1) {
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

        document.querySelector(".playerWonClassAdd").classList.add("playerWonClass");
        document.querySelector(".stickersClassAdd").classList.add("stickersClass");

        if (playerTurn == 1) {
            document.querySelector(".playerWonClass").textContent = `You win!`;

        } if (playerTurn == 2) {
            document.querySelector(".playerWonClass").textContent = `Computer wins!`;
        }
        
        restartGameBtn.addEventListener("click", restartGameOvrl);
        restartGameBtn.textContent = "Restart game";
                
                
        overlay.classList.add("overlay");
        restartGameBtn.classList.add("restartGameOverlay");
    

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
        drawChecker = 0;
        playerTurn = 1;
    }

    function restartGame() {
        options = ["", "", "", "", "", "" , "", "", ""];
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";

        }
        drawChecker = 0;
        playerTurn = 1;
        currentPlayer= "X";

       
    }


    function checkDraw() {

        
        
            if (drawChecker == 5){
                document.querySelector(".playerWonClassAdd").classList.add("playerWonClass");
                document.querySelector(".stickersClassAdd").classList.add("stickersClass");

                document.querySelector(".playerWonClass").textContent = `Draw`;
                

                restartGameBtn.addEventListener("click", restartGameOvrl);
                restartGameBtn.textContent = "Restart game";
                
                
                overlay.classList.add("overlay");
                restartGameBtn.classList.add("restartGameOverlay");
            }
    }

        //cpu 

    function computer() {
           

            let bestScore = -Infinity;
            let bestMove;

            
        
        
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].innerText == '') {
                    document.getElementById(i).innerHTML = AI;
                    let score = minimax(cells, 0, false);
                    document.getElementById(i).innerHTML = "";
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = i;
                    }
                }
                
            }
        
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].innerText == '') {
                    document.getElementById(i).innerHTML = H;
                    let score = minimax(cells, 0, false);
                    document.getElementById(i).innerHTML = "";
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = i;
                    }
                }
            }
            checkWinner()
            checkDraw()

            document.getElementById(bestMove).innerHTML = AI;
            options[bestMove] = AI;
            
            
            }
        
           
        
        
    function minimax(cells, depth, isMaximizing) {
            let s = {
                X: -101,
                O: -100,
                tie: -102,
            }
            let result = checkWinner();
            if (result != null) {
                return s[result];
        
            }
        
            return -1000;
           
        }
           
    