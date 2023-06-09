const { Router } = require('express')
const RoleController = require('../controllers/roleController')

const router = Router();


router 
    .post('/role', RoleController.cadastrar)
    .get('/role', RoleController.buscarTodasRoles)
    .get('/role/:id', RoleController.buscarRolePorId)
    .delete('/role/id/:id', RoleController.deletarRolePorId)
    .put('/role/:id', RoleController.editarRole)


    module.exports = router
