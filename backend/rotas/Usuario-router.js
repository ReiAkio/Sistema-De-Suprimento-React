const express = require('express')

const Usuarioctrl = require('../controllers/usuario-control')

const router = express.Router()

router.post('', Usuarioctrl.criarUsuario)
router.post('/login', Usuarioctrl.login)
router.get('',  Usuarioctrl.getUsuario)

module.exports = router