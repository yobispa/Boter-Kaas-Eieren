console.log("JS Loaded");

//variables
let board = document.querySelectorAll(".box");
let H = "X";
let AI = "O";
let T = "tie";
let myMusic = document.getElementById("myAudio");
myMusic.volume = 0.4;


const restartBtnforGame = document.querySelector(".restartBtnGame");
const restartGameBtn = document.querySelector(".restartGameClass");
const statusText = document.querySelector(".displayInfo");
const overlay = document.querySelector(".overlayClass");
const muteVolumeClass = document.querySelector(".muteVolume");
const setVolumeHalfClass = document.querySelector(".setVolumeHalf");
const setVolumeOneOfFiveClass = document.querySelector("setVolumeOneOfFive");
const backgroundcolorBtn = document.querySelector(".articleWrapper2");

//Page 1 & Page 2 function
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}


// setVolumeOneOfFiveClass.addEventListener("click", setVolumeToOneOfFive);

muteVolumeClass.addEventListener("click", muteVolume);
setVolumeHalfClass.addEventListener("click", setVolumeToHalf);

function muteVolume() {
    myMusic.volume = 0.0001;
}

function setVolumeToHalf() {
    myMusic.volume = 0.5;
}

function setVolumeToOneOfFive() {
    myMusic.volume = 0.2;
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
board.forEach((element) => {
    element.addEventListener("click", human);


})

restartBtnforGame.addEventListener("click", restartGame);

//checkwinner & checkTie
function win() {
    let _tie = false;
    let winner = null;
    let z = 0;
    let a = document.getElementById("0").innerHTML;
    let b = document.getElementById("1").innerHTML;
    let c = document.getElementById("2").innerHTML;
    let d = document.getElementById("3").innerHTML;
    let e = document.getElementById("4").innerHTML;
    let f = document.getElementById("5").innerHTML;
    let g = document.getElementById("6").innerHTML;
    let h = document.getElementById("7").innerHTML;
    let i = document.getElementById("8").innerHTML;
    //H
    if (a == AI && b == AI && c == AI) {
        winner = AI;
        _tie = true;
    }
    if (d == AI && e == AI && f == AI) {
        winner = AI;
        _tie = true;
    }
    if (g == AI && h == AI && i == AI) {
        winner = AI;
        _tie = true;
    }
    //V
    if (a == AI && d == AI && g == AI) {
        winner = AI;
        _tie = true;
    }
    if (b == AI && e == AI && h == AI) {
        winner = AI;
        _tie = true;
    }
    if (c == AI && f == AI && i == AI) {
        winner = AI;
        _tie = true;
    }
    //d
    if (a == AI && e == AI && i == AI) {
        winner = AI;
        _tie = true;
    }
    if (c == AI && e == AI && g == AI) {
        winner = AI;
        _tie = true;
    }

    //human
    if (a == H && b == H && c == H) {
        winner = H;
        _tie = true;
    }
    if (d == H && e == H && f == H) {
        winner = H;
        _tie = true;
    }
    if (g == H && h == H && i == H) {
        winner = H;
        _tie = true;
    }
    //V
    if (a == H && d == H && g == H) {
        winner = H;
        _tie = true;
    }
    if (b == H && e == H && h == H) {
        winner = H;
        _tie = true;
    }
    if (c == H && f == H && i == H) {
        winner = H;
        _tie = true;
    }
    //d
    if (a == H && e == H && i == H) {
        winner = H;
        _tie = true;
    }
    if (c == H && e == H && g == H) {
        winner = H;
        _tie = true;
    }

    //tie
    if (_tie == false) {
        if (a != '' && b != '' && c != '' && d != '' && e != '' && f != '' &&
            g != '' && h != '' && i != '') {
            winner = T;
        }
    }

    if (winner != null) {
        tun = false;
        return winner;
    }


}

function restartGameOvrl() {
    options = ["", "", "", "", "", "", "", "", ""];
    
    overlay.classList.remove("overlay");
    restartGameBtn.classList.remove("restartGameOverlay");
    document.querySelector(".playerWonClass").textContent = ``;
    document.querySelector(".playerWonClassAdd").classList.remove("playerWonClass");
    document.querySelector(".stickersClassAdd").classList.remove("stickersClass");
    for (let i = 0; i < board.length; i++) {
        board[i].textContent = "";

    
    }
    location.reload()
   
   
}

function restartGame() {
    options = ["", "", "", "", "", "" , "", "", ""];
    for (let i = 0; i < board.length; i++) {
        board[i].textContent = "";

    }
    location.reload()
  

   
}

computer();


function human(element) {

    document.getElementById(element.target.id).removeEventListener("click", human);

    document.getElementById(element.target.id).innerHTML = H;

    computer();
    // win()

}

function computer() {
    let bestScore = -Infinity;
    let bestMove;


    for (let i = 0; i < board.length; i++) {
        if (board[i].innerText == '') {
            document.getElementById(i).innerHTML = AI;
            let score = minimax(board, 0, false);
            document.getElementById(i).innerHTML = "";
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i].innerText == '') {
            document.getElementById(i).innerHTML = H;
            let score = minimax(board, 0, false);
            document.getElementById(i).innerHTML = "";
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    document.getElementById(bestMove).innerHTML = AI;
    document.getElementById(bestMove).removeEventListener("click", human);

    let result = win();
    if (result != null) {

        document.querySelector(".playerWonClassAdd").classList.add("playerWonClass");
        document.querySelector(".stickersClassAdd").classList.add("stickersClass");

        if (result == AI) {
            document.querySelector(".playerWonClass").textContent = `Computer win!`;
        } else if (result == H) {
            document.querySelector(".playerWonClass").textContent = `You win!`;
        } else if (result == T) {
            document.querySelector(".playerWonClass").textContent = `Draw!`;
        }

        restartGameBtn.addEventListener("click", restartGameOvrl);
        restartGameBtn.textContent = "Restart game";
                
                
        overlay.classList.add("overlay");
        restartGameBtn.classList.add("restartGameOverlay");
    

        restartGameBtn.addEventListener("click", restartGameOvrl);
        restartGameBtn.textContent = "Restart game";
        
        
        overlay.classList.add("overlay");
        restartGameBtn.classList.add("restartGameOverlay");


        }
    }




function minimax(board, depth, isMaximizing) {
    let s = {
        X: -101,
        O: -100,
        tie: -102,
    }
    let result = win();
    if (result != null) {
        return s[result];

    }

    return -1000;
   
}