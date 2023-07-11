//declaramos la instancia para la conexión a nuestra base de datos
                                //base datos  usuario contraseña
// const sequelize = new Sequelize("nueva_base", "root", "", {
//   host: "localhost", //servidor
//   dialect: "mysql", // tipo de motor de base de datos
// });
const{Model, DataTypes} = require('sequelize');
const dataBase = require('../utils/db')

const Usuarios = dataBase.define("usuarios",
{
    id: DataTypes.INTEGER,
    nombre: DataTypes.TEXT,
    apellido:   DataTypes.TEXT
})