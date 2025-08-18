const { DataTypes } = require('sequelize')
const sequelize = require('../db/conn')

const Veiculo = sequelize.define('veiculo', {
    codVeiculos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    placa: {
        type: DataTypes.STRING(55),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    fabricante: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: "veiculos",
    timestamps: false
})

module.exports = Clientes