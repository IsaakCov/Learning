// Importaciones
// Importamos los tiposd de datos con sequelize
const {DataTypes} = require('sequelize');
// Importamos la base de datos para manipularla
const database = require('../utils/database');

const clientes = database.define(
    //Definir las tablas
    "datosClientes",
    {
        nombreCliente:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull:
                {
                    msg: "El nombre es obligatorio."
                }
            }
        },
        idConsulta:
        {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        correoCliente:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                isEmail: true, // formato pedrito@diego.com
                notNull:
                {
                    msg: "El correo es obligatorio."
                }
            }
        },
        telefonoCliente:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:
            {
                notNull:
                {
                    msg: "El telefono es obligatorio."
                }
            }
        },
        comentarioCliente:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:
            {
                notNull:
                {
                    msg: "El comentario es obligatorio."
                }
            }
        }
    }
)

module.exports =
{
    clientes
};