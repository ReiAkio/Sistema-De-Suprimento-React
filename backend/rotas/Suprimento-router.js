const express = require('express')

const Suprimentosctrl = require('../Controllers/suprimentos-control')

const router = express.Router()

router.post('', Suprimentosctrl.criarSuprimento)
router.put ("/:id", Suprimentosctrl.updateSuprimento)
router.delete('/:id', Suprimentosctrl.deletarSuprimento)
router.get('/:id',  Suprimentosctrl.getSuprimentoPorId)
router.get('',  Suprimentosctrl.getSuprimento)

module.exports = router