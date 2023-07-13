//declaramos la instancia para la conexión a nuestra base de datos
                                //base datos  usuario contraseña
// const sequelize = new Sequelize("nueva_base", "root", "", {
//   host: "localhost", //servidor
//   dialect: "mysql", // tipo de motor de base de datos
// });
const{Model, DataTypes, INTEGER, where} = require('sequelize');
const dataBase = require('../utils/db')


const Usuarios = dataBase.define("Usuarios",
{
    id:
    {
        type: 
        DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: DataTypes.TEXT,
    apellido:   DataTypes.TEXT
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
})

// Comprobar que el modelo se creo correctamente
console.log(Usuarios === dataBase.models.Usuarios)

module.exports = Usuarios;