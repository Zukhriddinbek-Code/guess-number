"use strict";

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number 🏆';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let numberRand = Math.trunc(Math.random() * 20) + 1; // random number generator from 1 to 20
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number';
    displayMessage("No number");
  }
  // when guess is too high
  else if (guess !== numberRand) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess < numberRand ? "Too low" : "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess > numberRand) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when guess is too low
  // else if (guess < numberRand) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // when player wins
  else if (guess === numberRand) {
    // document.querySelector('.message').textContent = 'CORRECT Number !!!';
    displayMessage("CORRECT Number !!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = numberRand;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  numberRand = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing. . .";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
