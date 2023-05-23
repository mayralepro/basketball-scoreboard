let countHome = document.getElementById("counter1");
let countGuest = document.getElementById("counter2");
let reset = document.getElementById("reset");

let score = 0;

// +1

function plusOneHome() {
  score += 1;
  countHome.textContent = score;
}
function plusOneGuest() {
  score += 1;
  countGuest.textContent = score;
}

// +2

function plusTwoHome() {
  score += 2;
  countHome.textContent = score;
}
function plusTwoGuest() {
  score += 2;
  countGuest.textContent = score;
}

// +3

function plusThreeHome() {
  score += 3;
  countHome.textContent = score;
}
function plusThreeGuest() {
  score += 3;
  countGuest.textContent = score;
}

// New Game

function newGame() {
  score = 0;
  countHome.textContent = score;
  countGuest.textContent = score;
}
