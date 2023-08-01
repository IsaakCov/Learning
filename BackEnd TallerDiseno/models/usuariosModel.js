// Importamos los tipos de datos de sequelize (que modela un sistema SQL) para definir nuestro modelo.
import {DataTypes} from 'sequelize';
// Importamos la base de datos para manipularla
const database = require('../utils/database');

const Usuarios = database.define(
    "Usuarios",
    {
        Correo:
        {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
            validate:
            {
                isEmail: true,
                notNull: {
                    msg: 'El correo es obligatorio'
                }
            }
        },
        Nombre:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El nombre es obligatorio'
                }
            }
        },
        Apellido:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El apellido es obligatorio'
                }
            }
        },
        Telefono:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El telefono es obligatorio'
                }
            }
        },
        Contrasena:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'La contrasena es obligatoria'
                }
            }

        }
        
    }
)

module.exports = Usuarios;