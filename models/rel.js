const Cliente = require("./Cliente")
const Veiculo = require("./Veiculo")
const Servico = require("./Servico")

Cliente.hasMany(Servico, {
    foreignKey: "idCliente", 
    as: "servicos",
    onDelete: "CASCADE"
})

Servico.belongsTo(Cliente, {
    foreignKey: 'idCliente', 
    as: 'cliente'           
})

Veiculo.hasMany(Servico, {
    foreignKey: 'idVeiculo',
    as: 'servicos',
    onDelete: "CASCADE"
})

Servico.belongsTo(Veiculo, {
    foreignKey: 'idVeiculo',
    as: 'veiculo'
})

module.exports = { Servico, Cliente, Veiculo }
