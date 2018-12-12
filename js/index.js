//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

const element = document.createElement('div');

element.innerText = 'Hi, DOM.';

element.style.backgroundColor = '#f2f2f2';

document.body.appendChild(element);

element.style.textAlign = 'center';

const ul = document.createElement('ul');
for (let i = 0; i < 4; i++) {
    let li = document.createElement('li');
    li.innerText = (i + 1).toString();
    ul.appendChild(li);
}

element.appendChild(ul);

ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(3)'));

ul.remove();