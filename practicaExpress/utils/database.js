// Importar sequelize
const {Sequelize} = require('sequelize');

// Crea la conexion con la base de datos
const conn = new Sequelize("proyectoTallerDiseno", "root", "", 
{
    host: "localhost",
    dialect: "mysql"
});

module.exports = conn;