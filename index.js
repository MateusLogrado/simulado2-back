const express = require("express")
const app = express()

const cors = require("cors")
const PORT = 3000
const hostname = "localhost"

const conn = require("./db/conn")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const clienteController = require("./controller/cliente.controller")
const veiculoController = require("./controller/veiculo.controller")
const servicoController = require("./controller/servico.controller")

app.post("/cliente", clienteController.cadastrar)
app.get("/cliente", clienteController.listar)
app.delete("/cliente", clienteController.apagar)


app.post("/veiculo", veiculoController.cadastrar)
app.get("/veiculo", veiculoController.listar)
app.delete("/veiculo", veiculoController.apagar)

app.post("/servico", servicoController.cadastrar)
app.get("/servico", servicoController.listar)
app.put("/servico", servicoController.atualizar)
app.delete("/servico", servicoController.apagar)

app.get("/", (req,res)=>{
    res.status(200).json({message: "Aplicação rodando"})
})

conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Não foi possível conectar com o banco de dados!',err)
})