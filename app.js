const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.gameStatus'); 
const restartBtn = document.getElementById('restartBtn');
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

let boardChoices = [
    "", "", "", 
    "", "", "", 
    "", "", ""
];
let currentPlayer = "X";
let gameIsActive = false;

buildInitialState();
function buildInitialState () {
    cells.forEach(cell => cell.addEventListener("click", cellClick));
    restartBtn.addEventListener("click", restartBoard);
    gameStatus.textContent = currentPlayer + " " + "'s turn";
    console.log(gameStatus);
    gameIsActive = true;
}

function cellClick () {
    const cellIndex = this.getAttribute("cellIndex");
    if (boardChoices[cellIndex] != "" || !gameIsActive){ //at the index check if active and a empty space
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell (cell, index){
    boardChoices[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer () {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    gameStatus.textContent = currentPlayer + " " + "'s turn";
}

function checkWinner() {

}
 
function restartBoard () {

}