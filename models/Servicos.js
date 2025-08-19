const { DataTypes } = require("sequelize")
const db = require("../db/conn")

const Servico = db.define("servico", {
    codOrdem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataServico: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    descricaoServico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precoServico: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "clientes",
            key: "codClinte"
        }
    },
        idVeiculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "veiculos",
            key: "codVeiculo"
        }
    }
},{
    tableName: "servicos",
    timestamps: false
})

module.exports = Servico