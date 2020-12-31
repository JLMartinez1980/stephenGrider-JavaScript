
const newParagraph = document.getElementById('main')
console.log('new', newParagraph)


 const h1 = document.querySelector('h1');
 console.log('h1', h1);



 const ul = document.querySelector('ul');
 console.log('ul', ul);




 const input = document.querySelectorAll('input');
 console.log('input:',  input)

 //This behaves like an array use . notation to access certain value.

 const anchor = document.querySelector('a');

const range = document.querySelector('input[type="range"]');
console.log('range:', range);
// range.setAttribute('min', 300), grab the attribute, the set new value

const parentUl = document.querySelector('ul');
const createLi = document.createElement('li');
createLi.innerText = 'created';


const firstLi = document.querySelector('li');
console.log('firstLi', firstLi);


const selector = document.querySelectorAll('li');
console.log('selector', selector);

// for (let i = 0; i < selector.length; i++) {
//   console.log('loop', selector[i].innerText)
//   selector[i].innerText = "We Are The Chapions";
// };
//
// for (let li of selector) {
//   li.innerHTML = 'We ARE <b>The Chapions</b>'
// }

const createH1 = document.createElement('h1');
console.log('createH1', createH1);

createH1.innerText = 'Full of Info'

const section = document.querySelector('section');
section.appendChild(createH1);

//append

const createParagraph = document.createElement('p');
createParagraph.innerText = 'I am a newParagraph';
document.body.appendChild(createParagraph);

createParagraph.append(firstLi, createH1)

const removeElement = parentUl.querySelector('.special');
console.log('removeElement', removeElement);
