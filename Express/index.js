const express = require('express');
const app = express();
const port = 8080;

const controllers = require('./controllers/controllers')

// get

// app.METODO("/listas_usuarios", LOGICA QUE ENTREGA COMO RESULTADO LA LISTA TOTAL DE USUARIOS)
// app.METODO("/user_detail", LOGICA QUE ENTREGA COMO RESULTADO EL DETALLE DE UN USUARIO)

app.use((req, res, next) => {
    console.log("Se ejecutó un nueva consulta a un endpoint");
    next();
})

// app.get("/ruta", funcion1, funcion2, funcion3)
// lista de compra usuario
//app.get( "/ruta", 
// 1. consulta si el solicitante tiene credenciales -- next();
// 2. consulta a la base de datos -- next();
// 3. imprimo 

//)

app.get("/mensaje", controllers.emitirMensaje );
app.get("/lista-usuarios", controllers.mensajeListaUsuarios);
app.get("/nueva-ruta", controllers.nuevaConsulta);
app.get("/user-detail/:name/:lastname", controllers.userDetail);

// post

// put

// delete
app.listen(port, console.log(`Server running on port ${port}`));