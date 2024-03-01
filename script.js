let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let body = document.querySelector("body");

let turnO = true;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBtn();
  msgContainer.classList.add("hide");
};

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBtn = () => {
  for (let box of btn) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (let box of btn) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `"The winner is ${winner}"`;
  msgContainer.classList.remove("hide");
  body.style.overflow = "hidden";
  disableBtn();
};

const checkWinner = () => {
  for (let patterns of winPattern) {
    let pos1Val = btn[patterns[0]].innerText;
    let pos2Val = btn[patterns[1]].innerText;
    let pos3Val = btn[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
