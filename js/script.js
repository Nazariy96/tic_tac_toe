const message = document.querySelector(".message");
const button = document.querySelector(".restart");

let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let currPlayer = "X";
message.innerHTML = `It's ${currPlayer}'s turn`;


const handleClick = (e) => {
  let actNum = e.target.className.split(" ")[1];
  if (board[actNum] !== "" || !gameActive) {
    return;
  }
  board[actNum] = currPlayer;
  e.target.innerHTML = currPlayer;
  
  handleResult();
};
let k = 0;
const createGrid = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let tag = document.createElement("div");
      tag.className = `grid_item ${k}`;
      k++;
      tag.addEventListener("click", handleClick);
      document.querySelector(".grid").appendChild(tag);
    }
  }
};
createGrid()



const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const handleResult = () => {
  let winner = false;
  
  for (let i = 0; i <= 7; i++) {
    const winCombElem = winComb[i];
    let a = board[winCombElem[0]];
    let b = board[winCombElem[1]];
    let c = board[winCombElem[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      winner = true;
      break;
    }
  }

  if (winner) {
    message.innerHTML = `Player ${currPlayer} has won!`;
    gameActive = false;
    return;
  }

  let draw = !board.includes("");
  if (draw) {
    message.innerHTML = `Game ended in a draw!`;
    gameActive = false;
    return;
  }

  handlePlayerChange();
};


const handlePlayerChange = () => {
  currPlayer = currPlayer === "X" ? "O" : "X";
  message.innerHTML = `It's ${currPlayer}'s turn`;
};


const handleRestartGame = () => {
  gameActive = true;
  currPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  message.innerHTML = `It's ${currPlayer}'s turn`;
  document.querySelectorAll(".grid_item").forEach((item) => (item.innerHTML = ""));
};
button.addEventListener("click", handleRestartGame);
