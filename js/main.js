const body = document.querySelector('body');

const redParagraph = document.createElement('p');

redParagraph.style.color = "red";

redParagraph.textContent = 'Hey I\'m red';

body.appendChild(redParagraph);

const h3 = document.createElement('h3');

h3.style.color = "blue";

h3.textContent = "I'm a blue h3!";

body.insertBefore(h3, redParagraph);