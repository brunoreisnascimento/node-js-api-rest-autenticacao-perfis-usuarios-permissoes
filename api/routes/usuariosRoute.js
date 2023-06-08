const { Router } = require ('express');
const UsuarioController = require('../controllers/usuarioController')
const autenticado = require("../middleware/autenticado")

const router = Router()


router.use(autenticado)

router
    .post('/usuarios', UsuarioController.cadastrar)
    .get('/usuarios')
    .get('/usuarios/id/:id')
    .put('/usuarios/id/:id')
    .delete('/usuarios/id/:id')

module.exports = router