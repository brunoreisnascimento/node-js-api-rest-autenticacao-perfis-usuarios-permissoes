const RoleService = require('../services/roleService')
const roleService = new RoleService()

class RoleController {

    static async cadastrar(req, res){
        const {nome, desc} = req.body
        try {
            const role = await roleService.cadastrar({nome, desc})
            res.status(201).send(role)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    static async buscarTodasRoles(req, res){
        const allRoles = await roleService.buscarTodosRoles();

        return res.status(200).send(allRoles)
    }

    static async  buscarRolePorId(req, res){

        try {
            const { id } = req.params
            const data = await roleService.buscarRolePorId(id);
            
            res.status(200).send(data)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
    

    static async deletarRolePorId(req, res){
        try {
            const { id } = req.params
            const data = await roleService.deletarRolePorId(id)

            res.status(200).send({message: `A role de Id: ${id} foi excludída com sucesso!`})
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }

    }

    static async editarRole(req, res){

        const { nome, descricao } = req.body
        const {id} = req.params

        try {
            const role = await roleService.editarRole({ id, nome, descricao })
            res.status(200).json(role)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }

    }

} module.exports = RoleController