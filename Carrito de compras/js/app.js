// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoButton = document.querySelector('#vaciar-carrito');

function registrarEventListeners()
{
    //Agregar un curso presionando agregar.
    listaCursos.addEventListener('click', agregarCurso)
}