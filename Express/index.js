const express = require("express");
const app = express();
const port = 3000;

const controllers = require("./controllers/controllers");
const dataBase = require("./utils/db");
// se hace el test de conexión la base de datos
const testConex = async () => {
  try 
  {
    await dataBase.authenticate(); // el metodo authenticate es un metodo propio de sequelize
    console.log("Connection has been established successfully.");
  } catch (error) 
  {
    console.error("Unable to connect to the database:", error);
  }
};



// get

// app.METODO("/listas_usuarios", LOGICA QUE ENTREGA COMO RESULTADO LA LISTA TOTAL DE USUARIOS)
// app.METODO("/user_detail", LOGICA QUE ENTREGA COMO RESULTADO EL DETALLE DE UN USUARIO)

app.use((req, res, next) => {
  console.log("Se ejecutó un nueva consulta a un endpoint");
  next();
});

// app.get("/ruta", funcion1, funcion2, funcion3)
// lista de compra usuario
//app.get( "/ruta",
// 1. consulta si el solicitante tiene credenciales -- next();
// 2. consulta a la base de datos -- next();
// 3. imprimo
//)

app.get("/mensaje", controllers.emitirMensaje);
app.get("/lista-usuarios", controllers.mensajeListaUsuarios);
app.get("/nueva-ruta", controllers.nuevaConsulta);
app.get("/user-detail/:name/:lastname", controllers.userDetail);

app.post("agregar-usuario", (req, res) => {
  // logica para acceder a los modelos de las tablas
});

app.put("modificar-user/:id", (req, res) => {
  // logica para modificar el usuario
  const { id } = req.params;

  // req.params = { "id": 243234 }
  // buscar en la base de datos un usuario con el ID (que recibo por parámetros)
  // async await????
  // condicional if ( existe el id ) ---> procede a ejecutar el cambio en la DB
  //logica en la consulta de la base de datos (MySql o MongoDb)
  // si no ??? enviamos un respuesta indicando que el ID no existe
  res.status(400).send("Su solicitud no puede ser procesada");
});

// post

// put

// delete
app.listen(port, console.log(`Server running on port ${port}`));