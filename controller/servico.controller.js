const Servico = require("../models/Servicos")

const cadastrar = async (req,res) =>{
    const valores = req.body
    try{
        const dados = await Servico.create(valores)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao cadastrar os dados!',err)
        res.status(500).json({message: 'Erro ao cadastrar os dados!'})
    }
}

const listar = async (req,res) =>{
    try{
        const dados = await Servico.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar os dados!',err)
        res.status(500).json({message: 'Erro ao listar os dados!'})
    }
}

const apagar = async (req,res) =>{
    const valores = req.params.id
    try{
        const dados = await Servico.findByPk(valores)
        if(dados){ // aqui ele verifica o dado existe antes de apagar
            await Servico.destroy({where: { codOrdem: valores}})
            res.status(204).json({message: 'Dados excluídos com sucesso!'})
        }else{
            res.status(404).json({message: 'dados não encontrados!'})
        }
    }catch(err){
        console.error('Erro ao excluir os dados!',err)
        res.status(500).json({message: 'Erro ao excluir os dados!'})
    }
}

const atualizar = async (req,res)=>{
    const valor = req.params.id
    const valores = req.body
    try{
        let dados = await Servico.findByPk(valor)
        if(dados){ // aqui ele verifica o dado existe antes de atualizar
            await Servico.update(valores, {where: { codOrdem: valor}})
            dados = await Servico.findByPk(valor)
            res.status(200).json(dados)
        }else{
            res.status(404).json({message: 'dados não encontrado!'})
        }
    }catch(err){
        console.error('Erro ao atualizar os dados!',err)
        res.status(500).json({message: 'Erro ao atualizar os dados!'})
    }
}

module.exports = { cadastrar, listar, apagar, atualizar }