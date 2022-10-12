const body = document.body;

const mainContainer = document.createElement('div')
document.body.appendChild(mainContainer);

const div2 = document.createElement('div');
div2.classList.add('div2');
mainContainer.appendChild(div2);

const p1 = document.createElement('p');
p1.classList.add('p1');
p1.textContent = "Hello world!"
div2.appendChild(p1);