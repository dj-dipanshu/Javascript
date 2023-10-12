// DOM

// const para = document.querySelector('p');
const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');
// console.log(paras);
console.log(paras[2]);
paras.forEach(paras => {
    console.log(paras);
})

//get an element by id
const title = document.getElementById('page-title');
console.log(title);

//get an element by their tag name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
// we cannot use foreach loop on html collection

// get elements by their tag name
const res = document.getElementsByTagName('p');
console.log(res);
// console.log(res[2]);

// How we change the text and html inside element
// const x = document.querySelector('p');
// console.log(x.innerText);

const x = document.querySelectorAll('p');
x.forEach(x => {
    x.innerText += ' Added text';
})

const content = document.querySelector('.content');
//content.innerHTML = '<h2> This is a new H2 </h2>';

const names = ['luigi', 'yoshi', 'raka'];
names.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})

// getAttribute and setAttribute

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green');

const tittle = document.querySelector('h1');
console.log(title.style);
console.log(title.style.color);

tittle.style.margin = '10px';
tittle.style.color = 'green';
tittle.style.fontSize = '30px';

// Adding and Removing classes

const cont = document.querySelector('p');

console.log(cont.classList);
cont.classList.add('success');
cont.classList.remove('success');
cont.classList.add('error');