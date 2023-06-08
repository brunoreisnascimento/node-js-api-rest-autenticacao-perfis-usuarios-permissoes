const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuarios = require('./usuariosRoute')
const auth = require('./authRoutes')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    produto,
    usuarios,
  )
}
