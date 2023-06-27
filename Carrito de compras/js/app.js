// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoButton = document.querySelector('#vaciar-carrito');

// Funciones
function registrarEventListeners()
{
    //Agregar un curso presionando agregar.
    listaCursos.addEventListener('click', agregarCurso)
}
function agregarCurso(event)
{
    if(event.target.contains('agregar-carrito'))
    {
        cursoSeleccionado = e.target.parentElement.parentElement;
        event.preventDefault()
        leerDatosCurso(cursoSeleccionado)
    }
}
registrarEventListeners()

//Leer HTML seleccionado y leer su información
function leerDatosCurso(curso)
{
    // Crear objeto con el contenido del curso
    const infoCurso = 
    {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1


    }
}