// Importamos los tipos de datos de sequelize (que modela un sistema SQL) para definir nuestro modelo.
import {DataTypes} from 'sequelize';
// Importamos la base de datos para manipularla
const database = require('../utils/database');

const FormularioDeConsultas = database.define(
    "FormularioDeConsultas",
    {
        idConsulta:
        {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        Comentario:
        {
            type: DataTypes.TEXT,
            primaryKey: true,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El comentario es obligatorio.'
                }
            }
        },
        // Falta enlazar la llave foranea y preguntar como hacer para que compartan datos
        CorreoUsuario:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El correo es obligatorio.'
                }
            }
        }

    }
)

module.exports = FormularioDeConsultas;