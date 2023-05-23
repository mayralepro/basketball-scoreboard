let countHome = document.getElementById("counter1");
let countGuest = document.getElementById("counter2");
let reset = document.getElementById("reset");

let scoreHome = 0;
let scoreGuest = 0;


// +1

function plusOneHome() {
  scoreHome += 1;
  countHome.textContent = scoreHome;
}
function plusOneGuest() {
  scoreGuest += 1;
  countGuest.textContent = scoreGuest;
}

// +2

function plusTwoHome() {
  scoreHome += 2;
  countHome.textContent = scoreHome;
}
function plusTwoGuest() {
  scoreGuest += 2;
  countGuest.textContent = scoreGuest;
}

// +3

function plusThreeHome() {
  scoreHome += 3;
  countHome.textContent = scoreHome;
}
function plusThreeGuest() {
  scoreGuest += 3;
  countGuest.textContent = scoreGuest;
}

// New Game

function newGame() {
  score = 0;
  countHome.textContent = score;
  countGuest.textContent = score;
}
