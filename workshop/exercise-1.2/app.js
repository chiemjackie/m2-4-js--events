// Exercise 1.2
// ------------
console.log('exercise 1.2');

const body = document.querySelector('body');
const result = document.getElementById('result');
const time = document.getElementById('time');
let won = false;

const timeLimit = Math.floor(Math.random() * 5 + 1);
time.innerText = timeLimit;

function onClick() {
  console.log(`onClick`);
  won = true;
  result.innerText = 'You win!';
  body.removeEventListener('click', onClick);
}

setTimeout(function() {
  console.log(`setTimeout`)
  if (won === false) {
    result.innerText = 'You lose!';
    body.removeEventListener('click', onClick);
  }
}, timeLimit * 1000);

body.addEventListener('click', onClick);
