'use strict';
let score = 20;
let secretNum = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);
  if (score <= 0) {
    document.querySelector('.message').textContent =
      'You lost the game try again';
  } else if (!inputValue) {
    document.querySelector('.message').textContent =
      'Please enter a valid number';
  } else if (inputValue === secretNum) {
    document.querySelector('.message').textContent = 'Correct guess!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (inputValue > secretNum) {
    document.querySelector('.message').textContent = 'Too high';
    document.querySelector('.score').textContent = --score;
  } else {
    document.querySelector('.score').textContent = --score;
    document.querySelector('.message').textContent = 'Too low';
  }
});
