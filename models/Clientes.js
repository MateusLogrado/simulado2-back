const { DataTypes } = require('sequelize')
const sequelize = require('../db/conn')

const Clientes = sequelize.define('clientes', {
    codClientes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(55),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: "clientes",
    timestamps: false
})

module.exports = Clientes