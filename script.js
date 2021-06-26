'use strict';
let score = 20;
let secretNum = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);
  if (score <= 0) {
    displayMessage('You lost the game try again');
  } else if (!inputValue) {
    displayMessage('Please enter a valid number');
  } else if (inputValue === secretNum) {
    displayMessage('Correct guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    displayMessage(inputValue > secretNum ? 'Too High' : 'Too low');
    document.querySelector('.score').textContent = --score;
  }
});
