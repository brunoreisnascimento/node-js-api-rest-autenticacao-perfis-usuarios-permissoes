const database = require('../models');
const {hash} = require('bcryptjs')
const uuid = require('uuid')
 
class UsuarioService {

    async cadastrar(dto){
        const usuario =  await database.usuarios.findOne({
            where:{
                email: dto.email
            }
        });


        if(usuario){
                throw new Error("Usuário já cadastrado!");
        }

        try {
            const senhahash = await hash(dto.senha, 8);     
            
            const novoUsuario = await database.usuarios.create({
                id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhahash
            })

        return novoUsuario

        } catch (error) {
            throw new Error('Erro ao criar usuário!')
        }
    }

}

module.exports = UsuarioService;