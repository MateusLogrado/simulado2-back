const { Sequelize } = require('sequelize')
const sequelize = new Sequelize("db_oficina", "root", "senai", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()

.then(()=>{
    console.log("Conexão com o banco de dados realizada com sucesso.")
})
.catch((err)=>{
    console.log("Não foi possível conectar ao banco de dados: ", err)
})

module.exports = sequelize