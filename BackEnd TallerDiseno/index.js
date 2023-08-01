// Instalamos y obtenemos express.
const express = require('express');
const app = express();
// Importamos la base de datos para manipularla
const conn = require('./services/database');

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