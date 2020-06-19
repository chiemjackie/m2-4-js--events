// Exercise 1.1
// ------------
console.log('exercise 1.1');

const body = document.querySelector('body');
const para = document.getElementById('result');
let win = false;

function clickEvent() {
  result.innerText = "You win!"
  body.removeEventListener('click',clickEvent)
  win = true;
}

function lost () {
  if (win === false) {
    result.innerText = "You lose!"
    body.removeEventListener('click',clickEvent)
  }
}

body.addEventListener('click',clickEvent)
setTimeout(lost, 1000)