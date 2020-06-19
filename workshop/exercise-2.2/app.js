const main = document.getElementById('main')
let red = true

function turnGreen () {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle('green');
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement('button');
  main.appendChild(button);
  button.innerText = i;
  button.id = `btn-${i}`;

  button.addEventListener('click',turnGreen);
}