// Instalamos y obtenemos express.
const express = require('express');
const app = express();
// Importamos la base de datos para manipularla
const conn = require('./services/database');

// IMPORTAMOS LOS MODELOS DE TABLAS
// Modelo de Usuarios
const usuariosModel = require('./models/usuariosModel');


// IMPORTAMOS LOS CONTROLADORES DE LAS RUTAS
const createUsuario = require('./controllers/createUsuario')

//Formateamos los requests para leerlos, esto analiza el cuerpo de las peticiones entrantes en:
// Formato JSON
app.use(express.json());
// Formato listas o strings
app.use(express.urlencoded({extended: true}));

const port = 3001;

//app.listen(port, console.log("Servidor ejecutandose correctamente"))

// Generamos la conexion con la base de datos.
const database = async () => {
    try {
        await conn.authenticate();
        console.log('Base de datos conectada')
        //Generamos la sincronizacion de nuestro modelo con la base de datos (compatibiliza la tabla, si no existe, la crea)
        await usuariosModel.sync({force: true});
    } 
    catch (error) {
        console.log('Algo salio mal con la conexion', error)
    }
}

// Una vez generada la conexion, la llamaremos cada vez que se inicie el servidor

app.listen(port, () => {
    database();
    console.log("Servidor ejecutandose correctamente");
})


// Enrutamiento

app.post("/createUsuario", createUsuario);