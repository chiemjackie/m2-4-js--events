// Exercise 1.0
// ------------
console.log('exercise-1');

const body = document.querySelector('body');
const para = document.getElementById('result');

function clickEvent () {
  result.innerText = 'You Win!';
  body.removeEventListener('click', clickEvent);
}

body.addEventListener('click',clickEvent)