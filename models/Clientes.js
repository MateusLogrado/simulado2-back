const { DataTypes } = require('sequelize')
const sequelize = require('../db/conn')

const Clientes = sequelize.define('cliente', {
    codCliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: { // o nome, o unico jeito é ser String
        type: DataTypes.STRING(55), 
        allowNull: false
    },
    telefone: { // obtamos por causa do "()" e "-"
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: { // igual ao nome, unico caminho para funcionar
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: "clientes",
    timestamps: false
})

module.exports = Clientes