// Importaciones
// Importamos Express
const express = require('express');
// Obtener las funcionalidades
const app = express();
// Conexion a nuestra base de datos.
const conn = require('./utils/database');
// Traemos los modelos.
const clientes = require('./models/datosclientes');
// Traemos los controladores de ruta.



// Abrimos la manipulación del archivo formateado en json.
app.use(express.json);
// ????
app.use(express.urlencoded({extended: true}));

// Definir el puerto de trabajo en el localhost
const port = 3306;

// Verificar que se establezca la conexion
const database = async() =>
{
    try
    {
        await conn.authenticate(); //Verifica la conexion
        console.log("Se obtuvo respuesta del servidor")
    }
    catch(error)
    {
        console.log("Algo salio mal en la conexion con la DB", error);
    }
}

// Verifica que el servidor se ejecute
app.listen(port, () =>
{
    database();
    console.log("Servidor funcionando");
});