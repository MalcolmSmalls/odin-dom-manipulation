const body = document.querySelector('body');

const redParagraph = document.createElement('p');

redParagraph.style.color = "red";

redParagraph.textContent = 'Hey I\'m red';

body.appendChild(redParagraph);

const h3 = document.createElement('h3');

h3.style.color = "blue";

h3.textContent = "I'm a blue h3!";

body.insertBefore(h3, redParagraph);

const div = document.createElement('div');

div.style.cssText = 'border-style:solid; border-color: black; background-color: pink;'

const h1 = document.createElement('h1')
h1.textContent = "I'm in a div!"

body.appendChild(div)

div.appendChild(h1)