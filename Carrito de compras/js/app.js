// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoButton = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];
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
    // Agreaga elementos al arreglo carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
}

// Muestra el carrito de compras en el HTML
function carritoHTML()
{
    // Limpiar el HTML para eliminar duplicados
    limpiarHTML();
    // Recorre el Carrito de compras y genera el HTML
    articulosCarrito.forEach
    (curso =>
    {
        const row = document.createElement('tr')
        row.innerHTML = 
        `
        <td><img src = "${curso.imagen}" width = "100"></td>
        <td>${curso.titulo}</td>
        
        `;

        //Agrega el HTML del carrito en el tbody
        contenerdorCarrito.appendChild(row);
    })
}

// Elimina los cursos del tbody
function limpiarHTML()
{
    // Forma lenta
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild)
    {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}