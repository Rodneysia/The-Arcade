const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.gameStatus'); 
const restartBtn = document.getElementById('restartBtn');
const winningConditions = [
    //Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonals
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
    gameStatus.textContent = "Player " + currentPlayer + " " + "'s turn";
    //console.log(gameStatus);
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
    boardChoices[index] = currentPlayer; //updates the cell with the current player
    cell.textContent = currentPlayer;
}
function rotatePlayer () {
    currentPlayer = (currentPlayer == "X") ? "O" : "X"; //rotate x's and o's
    gameStatus.textContent = "Player " + currentPlayer + " " + "'s turn"; //updates the game status message section
}


function checkWinner() {
   let gameOver = false;
   
   for (let i =0; i < winningConditions.length; i++){ //itterate through winning conditions
    const condition = winningConditions[i];
    const cellA = boardChoices[condition[0]]; //8 winning conditions & each winning condition has 3 indexes (O, 1 & 2)
    const cellB = boardChoices[condition[1]];
    const cellC = boardChoices[condition[2]];

    if (cellA == "" || cellB == "" || cellC == ""){ //if each index is empty continue
        continue;
    }
    if (cellA == cellB && cellB == cellC){ //if each index is the same value x or o, game over
        gameOver = true;
        break;
    }
   }
    if(gameOver) {
        gameStatus.textContent = "Player " + currentPlayer + " " + "is the winner! Press the Restart button to play again!";
        gameIsActive = false;
    }
    else if (!boardChoices.includes("")){ //if no more empty cells & no winner game is a tie
        gameStatus.textContent = "Tie Game! Press the Restart button to play again!";
        gameIsActive = false;
    }
    else {
        rotatePlayer();
    }
}
 
function restartBoard () {
    currentPlayer = "X"; //reset current player to x
    boardChoices = [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ];
    cells.forEach(cell => cell.textContent = ""); //empty all cells
    gameStatus.textContent = "Player " + currentPlayer + " " + "'s turn"; //game restarts with player x marking first
    gameIsActive = true;


}