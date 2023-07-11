const { Sequelize } = require("sequelize"); // se hace la importacion del modulo de sequelize (CommonJS)

//declaramos la instancia para la conexión a nuestra base de datos
                                //base datos  usuario contraseña
const sequelize = new Sequelize("nueva_base", "root", "", {
  host: "localhost", //servidor
  dialect: "mysql", // tipo de motor de base de datos
})
module.exports = sequelize;