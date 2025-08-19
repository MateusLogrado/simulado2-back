const Veiculo = require("../models/Veiculos")

const cadastrar = async (req,res) =>{
    const valores = req.body
    try{
        const dados = await Veiculo.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os dados!',err)
        res.status(500).json({message: 'Erro ao cadastrar os dados!'})
    }
}

const listar = async (req,res) =>{
    try{
        const dados = await Veiculo.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar os dados!',err)
        res.status(500).json({message: 'Erro ao listar os dados!'})
    }
}

const apagar = async (req,res) =>{
    const valores = req.params.id
    try{
        const dados = await Veiculo.findByPk(valores)
        if(dados){ // aqui ele verifica o dado existe antes de apagar
            await Veiculo.destroy({where: { codVeiculo: valores}})
            res.status(204).json({message: 'Dados excluídos com sucesso!'})
        }else{
            res.status(404).json({message: 'dados não encontrados!'})
        }
    }catch(err){
        console.error('Erro ao excluir os dados!',err)
        res.status(500).json({message: 'Erro ao excluir os dados!'})
    }
}

module.exports = { cadastrar, listar, apagar }