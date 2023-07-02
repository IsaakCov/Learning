// Seleccione la sección con una identificación de contenedor sin usar querySelector.
const sectionById = document.getElementById('container');
console.log(sectionById)
// Seleccione la sección con una identificación de contenedor usando querySelector.
const sectionByQuerySelector = document.querySelector('#container')
console.log(sectionByQuerySelector)
//Seleccione toda la lista de elementos con una clase de "second".
const elementsWithSecondClass = document.querySelectorAll('.second')
console.log(elementsWithSecondClass);
//Seleccione un elemento de la lista con una clase de “third”, pero solo el elemento de la lista dentro de la etiqueta ol.
const elementsWithThirdClass = document.querySelectorAll('ol .third');
console.log(elementsWithThirdClass);
// Dar el texto "¡Hola!" a la sección con un ID de contenedor.
const container = document.getElementById('container');
container.textContent = '¡Hola!';
// Agregue la clase “main” al div con una clase ”footer” (cambiar nombre de la clase)
const div = document.getElementsByClassName('footer');
div.className = "main";
// Crea un nuevo elemento li.
const nuevoElementoLista = document.createElement('li');
// Dale al elemento li el texto "cuatro".
nuevoElementoLista.textContent = 'cuatro';
// Agregue el li al elemento ul.
const ul = document.querySelector('ul');
ul.appendChild(nuevoElementoLista);