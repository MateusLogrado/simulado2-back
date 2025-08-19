const { DataTypes } = require('sequelize')
const sequelize = require('../db/conn')

const Veiculo = sequelize.define('veiculo', {
    codVeiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    placa: { // uma placa é uma mistura de numeros e caracteres
        type: DataTypes.STRING(55),
        allowNull: false
    },
    modelo: { // o modelo, o unico jeito é ser String
        type: DataTypes.STRING(20),
        allowNull: false
    },
    fabricante: { // o fabricante, o unico jeito é ser String
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: "veiculos",
    timestamps: false
})

module.exports = Veiculo