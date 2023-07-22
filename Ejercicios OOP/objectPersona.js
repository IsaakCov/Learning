// Creacion de la clase persona

class persona
{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }
    describe()
    {
        return `${this.nombre}, ${this.edad} anos.`
    }
}


// Enlace al formulario

const formulario = document.getElementById('formulario')



//Ahora si capturamos los datos y creamos el objeto con ellos

function capturarDatos()
{
    //Obtenemos los datos
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    const newUser = new persona(nombre, edad);

    // Limpiar formulario
    formulario.reset();
    
    //Retornamos nuestro nueva instancia
    return newUser;
}

// Con los datos, creamos el objeto y mostramos los datos por un alert.
function escribirDatos()
{
    // Cogemos la instancia y establecemos el string para inyectar.
    const actualPerson = capturarDatos();
    const strToPrint = `${actualPerson.nombre}, ${actualPerson.edad} anos.`
    
    //Disponemos el lugar donde agregaremos la info para inyectar
    
    const cuadroParaDatos = document.getElementById('cuadroParaDatos');
    cuadroParaDatos.innerHTML = strToPrint;

    return;
}

//Traemos el boton
const boton = document.getElementById('button');

// Recordar que como no usamos metodos HTTP, tenemos que evitar el envio por defecto.
boton.addEventListener("click", function (event) 
{
    event.preventDefault();
})
// Ahora con la funcion por defecto eliminada, le pedimos que haga la inyeccion al presionar el boton submit.
boton.addEventListener("click", escribirDatos);