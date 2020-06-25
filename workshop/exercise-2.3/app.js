const main = document.getElementById('main')

function toggleColour (event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.toggle('green');
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement('button');
  main.appendChild(button);
  button.id= `btn-${i}`;
  button.innerText = i;
  button.style.top = `${Math.random() * 95}vh`;
  button.style.left = `${Math.random() * 95}vw`;

  button.addEventListener('click', toggleColour);
}